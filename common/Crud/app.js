var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.options('*', cors())

var port = process.env.port || 2000;

// var corsOptions = {
//     origin: 'http://localhost:4000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const moviesMapper = require("./data-access/movies-mapper");
const linksMapper = require("./data-access/links-mapper");
const ratingsMapper = require("./data-access/ratings-mapper");
const tagsMapper = require("./data-access/tags-mapper");

app.route('/movies')
    .get(moviesMapper.get)
    .post(moviesMapper.create);

app.route('/movies/:id')
    .delete(moviesMapper.delete);

app.route('/links')
    .get(linksMapper.get)
    .post(linksMapper.create);

app.route('/links/:movieId')
    .delete(linksMapper.delete);


app.route('/ratings')
    .get(ratingsMapper.get)
    .post(ratingsMapper.create);

app.route('/ratings/:movieId')
    .delete(ratingsMapper.delete);

app.route('/tags')
    .get(tagsMapper.get)
    .post(tagsMapper.create);

app.route('/tags/:tag')
    .delete(tagsMapper.delete);

app.listen(port);