FROM python:3.11

RUN pip install -U pip poetry==1.7.1

WORKDIR /app

COPY pyproject.toml poetry.lock /app/

RUN poetry config virtualenvs.create false
RUN poetry install --no-root

COPY src /app/src

EXPOSE 8000

ENTRYPOINT ["uvicorn", "--host", "0.0.0.0", "--port", "8000", "--reload", "src.server.app:app"]
