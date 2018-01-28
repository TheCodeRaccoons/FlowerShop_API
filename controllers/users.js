'use strict'

const User = require('../models/users')


function CreateUser(req, res){
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
            res.status(500).send({error: true, error_code:`CU-500`, message:`Error al guardar en la base de datos: ${err}`})
        }else{
            res.status(200).send({ error: false, message:'Usuario guardado exitosamente en la base de datos', user: userAdded})
        }
    })
}

function GetUsers (req, res){
    User.find({}, (err, users) => {
        
        if(err) return res.status(500).send({error: true, error_code:`GU-500`, message: `Error al realizar la busqueda: ${err}`})
        if(!users) return res.status(404).send({error: true, error_code:`GU-404`, message: `Lo sentimos no existen usuarios dados de alta`})
            
        res.status(200).send( { error: false, users})
    })
}

function GetUser (req, res){
    let userId = req.params.userid

    User.findById(userId, (err, user) => {
        if(err) return res.status(500).send({error: true, error_code:`GSU-500`, message: `Error al realizar la busqueda: ${err}`})
        if(!user) return res.status(404).send({error: true, error_code:`GSU-404`, message: `Lo sentimos, el usuario que buscas no existe. Porfavor Intenta nuevamente`})

        res.status(200).send({ error: false, user})
    })
}

function UpdateUser (req, res){
    let userId = req.params.userid
    let update = req.body
     
    User.findByIdAndUpdate(userId, update, (err, userUpdated) =>{
        if(err) return res.status(500).send({error: true, error_code:`UU-500`, message: `Error al realizar la operacion: ${err}`})
        if(!userUpdated) return res.status(500).send({error: true, error_code:`UU-404`, message: `No existe el usuario seleccionado`})
        
        res.status(200).send({user_updated:true, error: false , userUpdated }) 
    })  
}

function DeleteUser (req, res){
    let userId = req.params.userid

    User.findById(userId, (err, user) =>{
        if(err) return res.status(500).send({error: true, error_code:`UU-500`, message: `Error al realizar la operacion: ${err}`})
        if(!user) return res.status(404).send({error: true, error_code:`UU-404`, message: `Lo sentimos, el usuario que buscas no existe. Porfavor Intenta nuevamente`})
        
        user.remove(err =>{
            if(err) return res.status(500).send({error: true, error_code:`UU-500`, message: `Error al realizar la operacion: ${err}`})
            res.status(200).send({ error: false, message: `Usuario Eliminado exitosamente`})
        })
    })

}

function SignIn (req, res){
    User.find({user_name: req.body.user_name, password: req.body.password},(err, user) => {
        if(err) return res.status(500).send({error : true, error_code:`SI-500`, message: err })
        if(!user[0]) return res.status(404).send({error : true, error_code:`SI-404`, message: 'No existe el usuario'})
            
        res.status(200).send({ error: false, user})
    })  
}

module.exports = {
    CreateUser,
    GetUsers,
    GetUser,
    UpdateUser,
    DeleteUser,
    SignIn
}