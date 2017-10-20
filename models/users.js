'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')


const UserSchema = Schema({ 
        user_name: String,
        password: {type: String, select: false},
        first_name: String,
        last_name: String,
        email: String,
        address: String,
        phone: Number
})
/*
UserSchema.pre('save', function(next){
        let user = this

        if(!user.isModified('password')) return next()

        bcrypt.genSalt(10, (err, salt) =>{
                if(err) return next()

                bcrypt.hash(user.password, salt, null, (err, hash) => {
                        if(err) return next(err)
                        
                        user.password = hash
                        next()
                })
        })
})
*/
module.exports = mongoose.model('User', UserSchema)