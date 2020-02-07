FROM node:10.15.0
COPY ./ /app
WORKDIR /app
#RUN npx npm i typescript@">=3.4.0 <3.5.0"
RUN npx npm i typescript@">=3.1.1 <3.2.0"
RUN npm install
RUN npm rebuild node-sass
RUN npm run build:package
ENTRYPOINT ["./gitpush.sh"]
