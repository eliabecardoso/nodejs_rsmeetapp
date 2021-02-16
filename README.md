# Meetup/MeetApp - Web Application (Backend)

**Requisites**

Pre-requisites:
  - install [Nodejs](https://nodejs.org/pt-br/download/);
  - install or run an instance database relational(SQL) PostgresDB as a container(recommended) on [Docker (ENG)](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198) | [Docker (PT-BR)](https://medium.com/@renato.groffe/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4);
  - install or run an instance of database no-relational(NoSQL) MongoDB as a container(recommended) on [Docker (ENG)](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/) or [Docker (PT-BR)](https://medium.com/dockerbr/mongodb-no-docker-dd3b72c7efb7);
  - inst... no no no... run an instance data store structured(key/value) Redis as a container(can be the Redis-Alpine version) on [Docker (ENG)](https://hub.docker.com/_/redis/) | [Docker (PT-BR)](https://medium.com/@prog.tiago/redis-instalando-via-docker-58cb1d2cfb3b);
  - Sign up [mailtrap.io for mail notification](https://mailtrap.io) and get keys to configure your send of notifications(.env);
  - Sign up [sentry.io for reporting errors](https://sentry.io) to get DSN key for set in your configuration (.env);
  - I think it's just this ;D.

Optional: install [yarn (recommended)](https://yarnpkg.com/pt-BR/docs/getting-started) or use npm


**Steps for working**

1. clone or get .zip of this project.

2. within folder of project, create archive .env and set all configurations like on archive .env.example.
   1. obs: database PostgresDB; Mail for tests Mailtrap.io; handler exceptions with Sentry.io.

3. yet within folder of project, run on terminal: yarn (for downloading of packages/dependencies).

4. yet on terminal, run: yarn dev | and in another terminal, run: yarn queue.

5. just enjoy! [I recommended use Insomnia(OpenSource Project) for tests of endpoint].

##### Sorry for any mistake about my writing in English.
##### PS: Uma implementação-desafio da Rocketseat - Bootcamp (GoStack 7.0).
