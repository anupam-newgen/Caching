FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD 12345
ENV MYSQL_DATABASE movies
ADD movies.txt /
ADD script3.sql /docker-entrypoint-initdb.d
EXPOSE 3371