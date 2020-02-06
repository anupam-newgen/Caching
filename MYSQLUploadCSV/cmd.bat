sudo docker run --name db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 mysql:latest

sudo docker exec -it db /bin/bash
mysql -uroot -p12345



sudo docker build -t movies/mysql01 .

sudo docker run --name db2 -p 3307:3307 -d movies/mysql01
sudo docker exec -it db2 /bin/bash
mysql -uroot -p12345


sudo docker build -t moviescsv4/mysql01 .

sudo docker run --name db81 -p 3381:3381 -d moviescsv4/mysql01
sudo docker exec -it db81 /bin/bash

mysql -uroot -p12345 --local-infile

mysql -uroot -p12345


LOAD DATA LOCAL INFILE "/home/ngz559/UploadCSV/movies.txt" INTO TABLE movies1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(movieId, title);



sudo docker run --name db77 -p 3377:3377 -d movies/mysql01 -v "/home/ngz559/UploadCSV/:/movies"
sudo docker exec -it db75 /bin/bash


docker cp /home/ngz559/UploadCSV/movies.txt db2:/movies.txt

SET GLOBAL local_infile = true;
LOAD DATA LOCAL INFILE "movies.txt" INTO TABLE movies
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(movieId, title);
