var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    facebook         : {
        token: String,
        user: Object
    },
    
    google           : {
        token: String,
        user: Object
    },

    twitter         :{
        token: String,
        user: Object
    },

    github         :{
        token: String,
        user: Object
    },

    linkedin         :{
        token: String,
        user: Object
    }
});

module.exports = mongoose.model('User',userSchema);