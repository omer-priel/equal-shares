from uuid import UUID, uuid4
from datetime import datetime

import psycopg
from pydantic import BaseModel

from src.server.database import db_named_query


class Project(BaseModel):
    project_id: UUID
    name: str
    min_amount: int
    max_amount: int
    order_number: int
    created_at: datetime  # timestamp


@db_named_query
def create_project(db: psycopg.Connection, name: str, min_amount: int, max_amount: int, order_number: int) -> Project:
    project_id = uuid4()
    project = Project(
        project_id=project_id,
        name=name,
        min_amount=min_amount,
        max_amount=max_amount,
        order_number=order_number,
        created_at=datetime.now()
    )

    with db.cursor() as cursor:
        cursor.execute(
            """
            INSERT INTO public.projects (id, name, min_amount, max_amount, order_number, created_at)
            VALUES (%s, %s, %s, %s, %s);
            """,
            (
                project.project_id,
                project.name,
                project.min_amount,
                project.max_amount,
                project.order_number,
                project.created_at,
            ),
        )
        db.commit()

    return project


@db_named_query
def get_projects(db: psycopg.Connection) -> list[Project]:
    with db.cursor() as cursor:
        cursor.execute(
            """
            SELECT id, name, min_amount, max_amount, order_number, created_at
            FROM public.projects
            ORDER BY order_number, created_at;
            """
        )
        rows = cursor.fetchall()

    return [Project(
        project_id=row[0],
        name=row[1],
        min_amount=row[2],
        max_amount=row[3],
        order_number=row[4],
        created_at=row[5]
        ) for row in rows]


class Voter(BaseModel):
    voter_id: UUID
    email: str
    created_at: datetime  # timestamp


class ProjectVote(BaseModel):
    voter_id: UUID
    project_id: UUID
    amount: int
    rank: int
    selected: bool


class VoteProjectInput(BaseModel):
    project_id: UUID
    amount: int
    rank: int
    selected: bool


class VoteData(BaseModel):
    voter: Voter
    projects: list[ProjectVote]


@db_named_query
def get_voter(db: psycopg.Connection, email: str) -> Voter | None:
    with db.cursor() as cursor:
        cursor.execute(
            """
            SELECT id, email, created_at
            FROM public.voters
            WHERE email = %s;
            """,
            (email,),
        )
        row = cursor.fetchone()

    if row is None:
        return None

    return Voter(
        vote_id=row[0],
        email=row[1],
        created_at=row[2]
    )


@db_named_query
def add_vote(db: psycopg.Connection, email: str, projects: list[VoteProjectInput]) -> Voter:
    voter_id = uuid4()
    voter = Voter(voter_id=voter_id, email=email, created_at=datetime.now())

    with db.cursor() as cursor:
        cursor.execute(
            """
            INSERT INTO public.voters (id, email, created_at)
            VALUES (%s, %s, %s);
            """,
            (voter.voter_id, voter.email, voter.created_at),
        )

        for project in projects:
            cursor.execute(
                """
                INSERT INTO public.projects_votes (vote_id, project_id, amount, rank, selected)
                VALUES (%s, %s, %s, %s, %s);
                """,
                (voter.voter_id, project.project_id, project.amount, project.rank, project.selected),
            )

        db.commit()

    return voter


@db_named_query
def get_votes(db: psycopg.Connection) -> list[VoteData]:
    with db.cursor() as cursor:
        cursor.execute(
            """
            SELECT v.voter_id, v.email, v.created_at, pv.project_id, pv.amount, pv.rank, pv.selected
            FROM public.voters AS v
            JOIN public.projects_votes AS pv ON v.voter_id = pv.voter_id
            ORDER BY v.created_at, pv.rank;
            """
        )
        rows = cursor.fetchall()

    votes: dict[UUID, VoteData] = {}
    for row in rows:
        voter_id = row[0]
        if voter_id not in votes:
            votes[voter_id] = VoteData(
                voter=Voter(
                    voter_id=voter_id,
                    email=row[1],
                    created_at=row[2]
                ),
                projects=[]
            )

        votes[voter_id].projects.append(
            ProjectVote(
                voter_id=voter_id,
                project_id=row[3],
                amount=row[4],
                rank=row[5],
                selected=row[6]
            )
        )

    return votes
