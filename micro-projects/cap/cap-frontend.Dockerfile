FROM node:15.0.0

WORKDIR /app

COPY . /app/

RUN npm install

RUN touch .env
RUN echo "REACT_APP_BASE_URL=http://localhost:8000/" >> .env
RUN echo "PORT=3000" >> .env

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
