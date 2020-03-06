
var db = require('../db')

exports.get = function(req,res)
{
   var sql = "select * from links";
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
    let insertQuery = "INSERT INTO `links` (movieId, imdbId, tmdbid) VALUES ('" +
    requestObject.movieId + "', '" + requestObject.title+ "', '" + requestObject.genres + "')";
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
    const movieId = req.params.movieId;
    let deletQuery = 'DELETE FROM links WHERE movieId="' + movieId + '"';
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
