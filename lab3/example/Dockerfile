FROM node:10

WORKDIR /prod/app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["yarn", "start"]
#CMD ["yarn", "start:dev"]