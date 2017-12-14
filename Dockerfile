FROM node:9-alpine
lsll
ENV PORT=8080

COPY . /app
WORKDIR /app
RUN npm i && npm run build
WORKDIR /app
RUN npm i && rm -rf web
EXPOSE 8080

CMD npm start