FROM node:14-alpine as build
WORKDIR /app
COPY . .
RUN npm install

FROM node:14-alpine as final
WORKDIR /app
COPY --from=build /app ./
RUN npm install -g pm2
EXPOSE 80
ENTRYPOINT [ "pm2-runtime", "ecosystem.config.js"]

