const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema and model
const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    username: String,
    password: Number
});
const userChar = mongoose.model('userchar', userSchema);
module.exports = userChar;