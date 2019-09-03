const express = require('express');
const app = express();

app.use('/canvas', function(req,res){
    res.sendFile(__dirname+'/api/index.html');
});

module.exports = app;



