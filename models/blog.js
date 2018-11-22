const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name : String,
    image : String,
    description : String,
    author: {
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Admin'
        },
        username : String,
    },
    
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
});

module.exports = mongoose.model('Blog', blogSchema);