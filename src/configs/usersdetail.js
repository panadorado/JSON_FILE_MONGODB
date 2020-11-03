const mongoose = require('mongoose');
const userSchema = mongoose.Schema;

//User Schema
const userdetail = new userSchema({
    firts_name: String,
    last_name: String,
    id_user: Object,
    name: String,
    avatar: String,
    permission: String,
    love: Number,
    post: Number,
    point: Number
});

module.exports = mongoose.model('userdetail', userdetail);