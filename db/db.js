const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.Promise = global.Promise;



mongoose.connect(config.dbserver).then((good)=>{
    console.log("Db connected successfully");

}, (err)=>{
    console.log(`DB connection failed. Error: ${err}`);
} );

// (err)=>{
//     if(err)
//     {
//         console.log(` Db connection failed!!! error: ${err}`);
//     }

//     console.log("Db connected successfully!!");
// });


module.exports = {
    mongoose
};