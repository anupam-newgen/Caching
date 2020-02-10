const express = require('express');
const app = express();

app.get('/dock',(req,res)=>
{
    console.log("hello docker from request");

    res.send("Hello docker!");
})

console.log("hello bro!");

app.listen(3913 ,()=>
{
    console.log('My Rest API running on Port 3913');
})