FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm install --silent
RUN npm install -g serve
COPY . /app

RUN npm run build

EXPOSE 3000

CMD ["serve", "-p", "3000", "./build"]