# Pull base image
FROM python:3.8

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY . /app/

# Create .env file from all the environment variables
RUN pip install -r requirements.txt

RUN apt-get update
RUN apt-get install -y default-mysql-client

RUN pip install mysqlclient

RUN touch .env
RUN echo "DJANGO_SECRET_KEY=54d352f0-er42-u\$&jskfhejrl2fhfc+ru-gjf)s6n652ognv6" >> .env
RUN echo "HOSTNAME=127.0.0.1" >> .env
RUN echo "PORT_BACKEND=8000" >> .env
RUN echo "PORT_FRONTEND=3000" >> .env
RUN echo "EMAIL_HOST=smtp.gmail.com" >> .env
RUN echo "EMAIL_PORT=587" >> .env
RUN echo "EMAIL_HOST_PASSWORD=sjflejdgzaefmvod" >> .env
RUN echo "EMAIL_HOST_USER=example@gmail.com" >> .env
RUN echo "FROM_EMAIL=Ariel-Courses" >> .env
RUN echo "DB_ENGINE=django.db.backends.mysql" >> .env
RUN echo "DB_NAME=cap_db" >> .env
RUN echo "DB_USER=root" >> .env
RUN echo "DB_HOST=172.17.0.1" >> .env
RUN echo "DB_PASSWORD=password" >> .env
RUN echo "DB_PORT=3306" >> .env

RUN ls -al
RUN cat .env

EXPOSE 8000
