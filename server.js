const express = require('express');

const bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());

PORT = process.env.NODE_ENV || 3000;

app.use('/movies',require('./controller/movies_controller').router);




app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});