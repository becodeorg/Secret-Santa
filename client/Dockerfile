FROM node:12.18.3

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm install --global http-server

EXPOSE 3000

CMD ["http-server", "./build", "-p", "3000"]