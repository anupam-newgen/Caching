FROM mysql:latest

MAINTAINER anupam.vashisth@newgen.co.in

ENV MYSQL_ROOT_PASSWORD 12345
ADD setup.sql /docker-entrypoint-initdb.d

#WORKDIR tmp

#ENTRYPOINT ["../entrypoint.sh"]

EXPOSE 33060:3306




