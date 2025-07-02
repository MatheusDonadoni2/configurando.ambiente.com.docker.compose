FROM node:22.16.0-alpine3.22 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:22.16.0-alpine3.22

WORKDIR /app

COPY --from=build /usr/src/app/package.json package.json
COPY --from=build /usr/src/app/dist dist
COPY --from=build /usr/src/app/node_modules node_modules

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]

