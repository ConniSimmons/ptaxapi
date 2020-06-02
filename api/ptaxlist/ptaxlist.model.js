
//TODO MAKE THIS WORK? 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ptaxlistSchema = new Schema({
    fprod: {
        type: String,
        unique: false,
        required: true,
        ref: "fprod"
    }, 
        fprice: {
        type: String,
        unique: false,
        required: true,
        ref: "fprice"
    }, 
        mprod: {
        type: String,
        unique: false,
        required: true,
        ref: "mprod"
    }, 
        mprice: {
        type: String,
        unique: false,
        required: true,
        ref: "mprice"
    }, 
        nettax: {
        type: String,
        unique: false,
        required: true,
        ref: "nettax"
    }, 



});

module.exports = ptaxlistSchema;


//TODO MAKE THIS WORK? 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ptaxlistSchema = new Schema({
    fprod: {
        type: String,
        unique: false,
        required: true,
        ref: "fprod"
    }, 
        fprice: {
        type: String,
        unique: false,
        required: true,
        ref: "fprice"
    }, 
        mprod: {
        type: String,
        unique: false,
        required: true,
        ref: "mprod"
    }, 
        mprice: {
        type: String,
        unique: false,
        required: true,
        ref: "mprice"
    }, 
        nettax: {
        type: String,
        unique: false,
        required: true,
        ref: "nettax"
    }, 



});

module.exports = ptaxlistSchema;

 
