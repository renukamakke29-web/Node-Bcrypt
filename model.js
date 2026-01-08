const mongoose = require('mongoose');
const {type}=require('os');
const {boolean}=require('webidl-conversions');

const user = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
},
    { timestamps: true }
);
module.exports = mongoose.model('user', user);