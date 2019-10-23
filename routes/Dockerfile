FROM node:10-slim as builder

WORKDIR /usr/src

COPY package.json ./

RUN node -v \
    && npm -v \
    && npm install \
    && npm cache verify 

COPY . .

ENTRYPOINT [ "npm", "run", "start-api" ]

EXPOSE 3001