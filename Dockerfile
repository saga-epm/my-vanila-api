FROM node:16-alpine AS baseimage

# set working directory
WORKDIR /app

COPY package*.json /app
COPY .npmrc /app
COPY config/ /app/config

RUN yarn install

COPY . /app

# Expose application port
ENV SERVER_PORT 3000
EXPOSE 3000

CMD ["yarn", "dev"]