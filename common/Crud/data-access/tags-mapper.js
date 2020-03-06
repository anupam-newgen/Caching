
var db = require('../db')

exports.get = function(req,res)
{
   var sql = "select * from tags";
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
    let insertQuery = "INSERT INTO `tags` (userId, movieId, tag, timestamp) VALUES ('" +
    requestObject.userId + "', '" + requestObject.movieId+ "', '" + requestObject.tag + "', '" + (Math.floor(Date.now() / 1000))+"')";
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
    const tag = req.params.tag;
    let deletQuery = 'DELETE FROM tags WHERE tag="' + tag + '"';
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
