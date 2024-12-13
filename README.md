# BRAIN-AGRICULTURE

Simple API to manage agriculturists.

## Requirements

---

- Node.js version:

  > NODE.JS >= 16.16.0

- Npm version:

  > NPM >= 9.6.6

- Docker version:

  > DOCKER >= 20.10.12

- Docker-Compose version:

  > DOCKER-COMPOSE >= v2.31.0

## Installation

---

- In the project directory, execute the command below:
  > npm i

## Execution

---

- In the project directory, execute the command below to up database:

  > docker-compose up -d

- In the project directory, execute the command below to create tables:

  > npx sequelize-cli db:migrate

- In the project directory, execute the command below:

  > npm run dev
