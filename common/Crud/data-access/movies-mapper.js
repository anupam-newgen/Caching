
var db = require('../db')

exports.get = function(req,res)
{
   var sql = "select * from movies";
   db.query(sql,function(err,rows,fields)
   {
       if(err)
       {
           res.status(500).send(({error:'something failed'}));
       }
       res.json(rows);
   }) 
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
