FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development
ENV PORT=3050

EXPOSE 3050

CMD ["npm", "run", "dev"]
