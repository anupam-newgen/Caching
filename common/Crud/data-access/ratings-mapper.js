
var db = require('../db')

exports.get = function(req,res)
{
   var sql = "select * from ratings";
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
    let insertQuery = "INSERT INTO `ratings` (userId, movieId, rating, timestamp) VALUES ('" +
    requestObject.userId + "', '" + requestObject.movieId+ "', '" + requestObject.rating + "', '" + (Math.floor(Date.now() / 1000))+",)";
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
    let deletQuery = 'DELETE FROM ratings WHERE movieId="' + movieId + '"';
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
