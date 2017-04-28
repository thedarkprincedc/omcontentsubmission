FROM node:7.4-alpine

COPY /resources/ /app
COPY /app /app/public
RUN cd /app && npm install

EXPOSE 8080
CMD ["node", "/app/app.js"]
