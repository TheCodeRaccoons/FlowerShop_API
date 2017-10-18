'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Use bluebird
mongoose.Promise = require('bluebird');

const User = require('./models/users')

const app = express()
const port = process.env.PORT || 3001


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//Llamar todos los usuarios
app.get('/api/v1/users', (req, res) => { 
    User.find({}, (err, users) => {
        if(err) return res.status(500).send({message: `Error al realizar la busqueda: ${err}`})
        if(!users) return res.status(404).send({message: `Lo sentimos no existen usuarios dados de alta`})
            
        res.status(200).send( {users})
    })
})

//Llamar usuario por id
app.get('/api/v1/user/:userid', (req, res) => { 
    let userId = req.params.userid

    User.findById(userId, (err, user) => {
        if(err) return res.status(500).send({message: `Error al realizar la busqueda: ${err}`})
        if(!user) return res.status(404).send({message: `Lo sentimos, el usuario que buscas no existe. Porfavor Intenta nuevamente`})

        res.status(200).send({user})
    })
})

//Crear un nuevo usuario
app.post('/api/v1/user', (req, res) => { 
    console.log('POST /api/v1/user')
    console.log(req.body)

    let user = new User()
    user.user_name = req.body.user_name
    user.password = req.body.password
    user.first_name = req.body.first_name
    user.last_name = req.body.last_name
    user.email = req.body.email
    user.address = req.body.address
    user.phone = req.body.phone

    user.save((err, userAdded)=>{
        if(err){
            res.status(500).send({message:`Error al guardar en la base de datos: ${err}`})
        }else{
            res.status(200).send({message:'Usuario guardado exitosamente en la base de datos', user: userAdded})
        }
    })
})

//Editar un usuario por id
app.put('/api/v1/user/:user_id', (req, res) => { 
    
})

//Elimina un usuario por id
app.put('/api/v1/user/:user_id', (req, res) => { 
    
})

mongoose.connect('mongodb://Joorch:Jorch1304@appfloreria-shard-00-00-wwicd.mongodb.net:27017,appfloreria-shard-00-01-wwicd.mongodb.net:27017,appfloreria-shard-00-02-wwicd.mongodb.net:27017/test?ssl=true&replicaSet=appfloreria-shard-0&authSource=admin',{useMongoClient: true}, (err, res)=> {
    if(err){
        return console.log(`Error al conectarse a la base de datos. Codigo de error: ${err}`)
    }
        console.log("Conexion establecida a la base de datos")

    app.listen(port, () => {
        console.log(`API Rest corriendo en http://localhost:${port}`)
    })
})