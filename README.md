# SoluTrain

## Requirements

* docker
* docker compose
* conda

## Technologies

* python - As programming language for the backend
* conda - For managing python environment
* poetry - For managing python dependencies
* FastAPI - As framework for the backend
* PostgresSQL - As database
* docker - For development in production of the backend
* docker compose - For local development
* React - As framework for the frontend
* TypeScript - As programming language for the frontend

## Installation and Getting Started

Run the following commands to install:

```bash
git clone git@github.com:omer-priel/equal-shares.git
cd equal-shares

conda env create -f environment.yml
conda activate equal-shares

cd backend
poetry install

docker-compose up --build
```

## Environment Variables

### Backend

Table of the required environment variables for the backend:

| Variable    | Description               |
|-------------|---------------------------|
| PG_DATABASE | PostgresSQL database name |
| PG_USER     | PostgresSQL user          |
| PG_PASSWORD | PostgresSQL password      |
| PG_HOST     | PostgresSQL host          |

Table of the optional environment variables for the backend:

| Variable | Description      | Default |
|----------|------------------|---------|
| PG_PORT  | PostgresSQL port | 5432    |


## License

MIT

## Author

* Omer Priel - [GitHub](http://www.github.com/omer-priel)
