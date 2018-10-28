const mongoose = require('mongoose');

var nepalimovie = mongoose.model('nepalimovie', {

    imdb_url : {
        type : String,

    },
    title : {
        type: String,
        require : true
    },
    year :  Number,
    runtime : Number,
    genre :  String,
    rating : Number,
    plot : String,
    votes : Number

} );

module.exports = {
    nepalimovie
};