<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailinglistSchema = new Schema({
    firstname: {
        type: String,
        unique: false,
        required: true,
        ref: "firstname"
    }, 
    emailid: {
        type: String,
        unique: false,
        required: true,
        ref: "emailid"
    }
});

module.exports = mailinglistSchema;
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mailinglistSchema = new Schema({
    firstname: {
        type: String,
        unique: false,
        required: true,
        ref: "firstname"
    }, 
    emailid: {
        type: String,
        unique: false,
        required: true,
        ref: "emailid"
    }
});

module.exports = mailinglistSchema;
>>>>>>> 6a08c7037774f91d9b02a60efd97bb1ebc6d4296
