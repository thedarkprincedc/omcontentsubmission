FROM mongo
ENV production true

COPY /resources/ /app
COPY /app/ /app/public

RUN apt-get update \
     && apt-get install -y nodejs npm \
     && npm install mongoose \
     && cd /app \
     && npm install
EXPOSE 27017 28017 80 8080
CMD ["nodejs", "/app/app.js"]
