FROM node:14-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN yarn && yarn cache clean

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 8888

EXPOSE 9229

ENTRYPOINT yarn server:dev
