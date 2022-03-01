FROM node:12.18.3

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

RUN npm build

COPY . .

EXPOSE 3000

RUN npm install --global http-server

CMD ["http-server", "./build", "-p", "3000"]