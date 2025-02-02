FROM node:20-alpine
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY ./src /app/src

EXPOSE 5001

CMD ["node", "src/app.js"]
