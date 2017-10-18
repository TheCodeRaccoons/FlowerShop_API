'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({ 
        user_name: String,
        password: String,
        first_name: String,
        last_name: String,
        email: String,
        address: String,
        phone: Number
})

module.exports = mongoose.model('User', UserSchema)