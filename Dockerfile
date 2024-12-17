FROM node:16-alpine AS baseimage

# set working directory
#ENV NODE_ENV=dev
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY .npmrc ./
COPY .yarnrc.yml ./

RUN yarn install

COPY . .

EXPOSE 5122

CMD [ "yarn", "dev" ]