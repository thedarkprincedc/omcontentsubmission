FROM mongo
RUN apt-get update \
     && apt-get install -y nodejs npm \
     && npm install mongoose
