
var db = require('../db')
var redis = require('redis');
var redisclient = redis.createClient("6379", "192.168.60.45");


// var redis = require('node-redis')
// var redisclient = redis.createClient("6379", "192.168.60.45")

exports.get = function(req,res)
{
    redisclient.get('getMoive', function(error, result) {
        if (error) throw error;
        if(result!=null && result!=undefined)
        {
            console.log('GET result ->', result.length);
            res.json(result);
        }
        else
        {
            var sql = "select * from movies";
            db.query(sql,function(err,rows,fields)
            {
                if(err)
                {
                    res.status(500).send(({error:'something failed'}));
                }
                redisclient.set('getMoive',JSON.stringify(rows));
                res.json(rows);
            }) 
        }
        
      });
};

exports.create = function(req,res)
{
    let requestObject = req.body;
    let insertQuery = "INSERT INTO `movies` (movieId, title, genres) VALUES ('" +
    requestObject.movieid + "', '" + requestObject.title+ "', '" + requestObject.genres + "')";
    db.query(insertQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        else
        {
            res.send(result);
        }
    });
}

exports.delete = function(req,res)
{
    const movieId = req.params.id;
    let deletQuery = 'DELETE FROM movies WHERE movieId="' + movieId + '"';
    db.query(deletQuery,(err,result) =>
    {
        if(err)
        {
            return res.send(err);
        }
        else
        {
            res.send(result)
        }
    })
}
