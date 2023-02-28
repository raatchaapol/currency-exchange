FROM node:lts-alpine

WORKDIR /app

COPY package.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

EXPOSE 80

CMD [ "pnpm", "dev" ]
