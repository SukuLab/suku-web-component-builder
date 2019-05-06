FROM node:10.15.3
COPY ./ /app
WORKDIR /app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build:lib
ENTRYPOINT ["./gitpush.sh"]
