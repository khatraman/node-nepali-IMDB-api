const express = require('express');
const mongoose  = require('../db/db.js');
const nepalimovie = require('../model/nepalimovie').nepalimovie;



const router = express.Router();

router.get('/',(req, res)=>{
var random = Math.floor((Math.random() * 20) + 1);

    nepalimovie.find()
    .skip(random)
    .limit(10)
    .then((doc)=>{
        if(!doc.length)
        {
            res.status(404).send("no movie found");
        }
        res.json({found : doc.length, movies : doc});
       
    }, (err)=>{
        res.send(400).send();
    });

})

router.get('/:name',(req, res)=>{

    var name = req.params.name;

    nepalimovie.find({title : name })
    .then((doc)=>{
        if(!doc.length)
        {
            res.status(404).send('movie not found!');
        }
       res.send(doc);
    }, (err)=>{
        res.send(400).send();
    });


router.get ('/year/:year',(req, res)=>{
    
    var year = req.params.year;

    

    nepalimovie.find({year })
    .then((doc)=>{
        if(!doc.length)
        {
             res.status(404).send("movie not found");
        }
        
         res.json({found : doc.length,movies : doc});
        //res.send(doc);

    }, (err)=>{
        res.status(400).send();
    });

});



});




module.exports = {
    router
}