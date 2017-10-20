'use strict'

const jwt = require('jwt-simple')
const config = require('../config')

function createToken(user){
    const payload = {
        sub: user._id
    }
    return jwt.encode(payload, config.SECRET_TOKEN)
}

module.exports = createToken