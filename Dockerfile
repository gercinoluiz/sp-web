FROM node:16-alpine

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install --location=global

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]

CMD ["yarn", "dev"]