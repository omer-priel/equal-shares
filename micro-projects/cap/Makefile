SHELL:=/usr/bin/env bash -O globstar

rebuild-containers:
	docker compose down -v
	docker compose up -d

start-database:
	docker compose up -d

create-database:
	docker compose exec db mysql -u root -p -e "DROP DATABASE IF EXISTS cap_db;"
	docker compose exec db mysql -u root -p -e "CREATE DATABASE cap_db;"

create-python:
	conda env create -f environment.yml

# conda activate cap

install-requirements:
	cd cap-backend && pip install -r requirements.txt
	cd cap-backend && pip install mysqlclient

create-migrate:
	cd cap-backend && python manage.py migrate
	cd cap-backend && python manage.py createsuperuser

# nvm use 15.0.0

install-frontend:
	cd cap-frontend && npm install

# conda activate cap

run-backend:
	cd cap-backend && python manage.py runserver

# nvm use 15.0.0

run-frontend:
	cd cap-frontend && npm start