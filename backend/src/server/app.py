from contextlib import asynccontextmanager
from typing import AsyncIterator
from uuid import UUID

from fastapi import FastAPI, HTTPException, status
from fastapi.responses import RedirectResponse

from pydantic import BaseModel

from src.config import init_config
from src.server.logger import get_logger, init_loggers
from src.server.admin import admin

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    """Initialize and close the server"""

    init_config()
    init_loggers()

    get_logger().info("The server started.")
    get_logger().info(f"admin_key: {admin.admin_key}")

    yield None

    get_logger().info("The server closed.")


app = FastAPI(
    title="SoluTrain",
    description="SoluTrain API",
    lifespan=lifespan,
)


@app.get("/", include_in_schema=False)
def root() -> RedirectResponse:
    return RedirectResponse("/docs")


@app.get("/health-check")
def health_check() -> dict:
    return {"status": "ok"}


@app.get("/create-database-tables")
def create_database_tables(admin_key: UUID) -> dict:
    if admin.admin_key != admin_key:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    return {"status": "ok"}

@app.get("/clean-projects")
def clean_projects(admin_key: UUID) -> dict:
    if admin.admin_key != admin_key:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    return {"status": "ok"}


@app.get("/clean-votes")
def clean_votes(admin_key: UUID) -> dict:
    if admin.admin_key != admin_key:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    return {"status": "ok"}


class AddProjectsSchema(BaseModel):
    pass


@app.post("/add-projects")
def add_projects(body: AddProjectsSchema) -> dict:
    return {"status": "ok"}


class ProjectsSchema(BaseModel):
    pass


@app.get("/projects")
def get_projects() -> ProjectsSchema:
    return ProjectsSchema()


class VoteBodySchema(BaseModel):
    pass


@app.post("/vote")
def vote(body: VoteBodySchema) -> dict:
    return {
        "status": "ok",
    }
