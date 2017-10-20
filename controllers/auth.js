'use strict'

const mongoose = require('mongoose') 
const User = require('../models/users')
const service = require('../service')

function SingUp(req, res){
    const user = new User({
        email : req.body.email,
        user_name : req.body.user_name, 
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone: req.body.phone 
    })
    user.save((err) => {
        if(err) return res.status(500).send({error : true, message : `Error al crear el usuario ${err}`})
    
        return res.status(200).send({token: service.createToken(user)})
        })
}