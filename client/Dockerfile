FROM node:12.18.2-alpine3.12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -f

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
