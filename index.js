'use strict'
 
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config') 
 
// Use bluebird
mongoose.Promise = require('bluebird');

mongoose.connect(config.db,{useMongoClient: true}, (err, res)=> {
    if(err){
        return console.log(`Error al conectarse a la base de datos. Codigo de error: ${err}`)
    }
    console.log("Conexion establecida a la base de datos")

    app.listen(config.port, () => {
        console.log(`API Rest corriendo en http://localhost:${config.port}`)
    })
})