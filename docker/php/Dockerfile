# # イメージを指定
# ARG PHP_VERSION=8.1.0-fpm
# FROM php:${PHP_VERSION}

# ARG PHPREDIS_VERSION=5.3.3
# COPY php.ini /usr/local/etc/php/

# RUN apt update && apt install git zip -y \
# RUN pecl install redis
# # RUN apt-get update \
# #   && apt-get install -y zlib1g-dev mariadb-client \
# #   && docker-php-ext-install zip pdo_mysql

# #Composer install
# COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
# ENV COMPOSER_ALLOW_SUPERUSER 1
# ENV COMPOSER_HOME /composer
# ENV PATH $PATH:/composer/vendor/bin

# WORKDIR /var/www

# RUN composer global require "laravel/installer"


# ------------------------------

# イメージを指定
ARG PHP_VERSION=8.1.0-fpm
FROM php:${PHP_VERSION}

COPY ./php.ini /usr/local/etc/php/

RUN apt update && apt install git zip -y
RUN pecl install redis

### mysql利用のため、ドライバ追加
RUN docker-php-ext-install pdo_mysql

#Composer install
COPY --from=composer /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

WORKDIR /var/www

### laravel インストール
RUN composer global require "laravel/installer"

### npm インストール
RUN apt install nodejs npm -y

### redis利用
RUN git clone https://github.com/phpredis/phpredis.git /usr/src/php/ext/redis && \
  docker-php-ext-install redis