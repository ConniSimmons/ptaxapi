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
        unique: true,
        required: true,
        ref: "emailid"
    }
});

module.exports = mailinglistSchema;