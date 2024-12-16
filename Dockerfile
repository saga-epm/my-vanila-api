FROM node:16-alpine AS baseimage

# set working directory
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY .npmrc ./

RUN yarn install

COPY . .

EXPOSE 5122

CMD [ "yarn", "dev" ]