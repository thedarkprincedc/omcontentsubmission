FROM k0st/alpine-apache-php:latest
MAINTAINER FAN ZHISHEN <thedarkprincedc@yahoo.com>

ENV TIMEZONE="US/United States" \
     PHP_MEMORY_LIMIT="512M" \
     MAX_UPLOAD="50M" \
     PHP_MAX_FILE_UPLOAD="200" \
     PHP_MAX_POST="100M"
COPY app /app
