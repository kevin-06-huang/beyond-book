FROM node:16-alpine

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
