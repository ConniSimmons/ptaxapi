//TODO MAKE THIS WORK
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prodsetSchema = new Schema({
    category: {
        type: String,
        unique: false,
        required: true,
        ref: "category"
    }, 
    product: {
        type: String,
        unique: false,
        required: true,
        ref: "product"
    }, 
    fprod: {
        type: String,
        unique: false,
        required: true,
        ref: "f-product"
    }, 
        fprice: {
        type: String,
        unique: false,
        required: true,
        ref: "f-price"
    }, 
        mprod: {
        type: String,
        unique: false,
        required: true,
        ref: "m-product"
    }, 
        mprice: {
        type: String,
        unique: false,
        required: true,
        ref: "m-price"
    }, 
        nettax: {
        type: String,
        unique: false,
        required: true,
        ref: "net tax"
    },
        taxpcnt: {
        type: String,
        unique: false,
        required: true,
        ref: "percent"
    },
        pic: {
        type: String,
        unique: false,
        required: true,
        ref: "pix"
        }
});

module.exports = prodsetSchema;