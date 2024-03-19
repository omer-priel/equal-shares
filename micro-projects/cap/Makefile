SHELL:=/usr/bin/env bash -O globstar

remove-containers:
	docker compose down -v

build-containers:
	docker compose build

rebuild-containers:
	make remove-containers
	make build-containers

create-database:
	docker compose up -d db
	docker compose exec db mysql -u root -p -e "DROP DATABASE IF EXISTS cap_db;"
	docker compose exec db mysql -u root -p -e "CREATE DATABASE cap_db;"

migrate-database:
	docker compose up -d db
	docker compose up -d cap-backend-service
	docker compose exec cap-backend-service python manage.py migrate
	docker compose stop cap-backend-service

create-superuser:
	docker compose up -d db
	docker compose up -d cap-backend-service
	docker compose exec cap-backend-service python manage.py createsuperuser
	docker compose stop cap-backend-service

rebuild-db:
	make create-database
	make migrate-database
	make create-superuser


start-backend:
	docker compose up cap-backend
