FROM node:10.15.0
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm install typescript@3.1.1
RUN npm rebuild node-sass
RUN npm run build:package
ENTRYPOINT ["./gitpush.sh"]
