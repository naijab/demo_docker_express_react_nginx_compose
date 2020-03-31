FROM node:lts-alpine

WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start"]