'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = Schema({ 
        admin_user : "",
        admin_password : ""

})

module.exports = mongoose.model('Admin', AdminSchema)