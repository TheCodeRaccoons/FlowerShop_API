'use strict'

const Admin = require('../models/admins')


function CreateAdmin(req, res){
    let admin = new Admin()
    admin.admin_user = req.body.admin_user
    admin.admin_password = req.body.admin_password  

    admin.save((err, adminAdded)=>{
        if(err){
            res.status(500).send({error: true, error_code:`CA-500`, message:`Error al guardar en la base de datos: ${err}`})
        }else{
            res.status(200).send({ error: false, message:'Administrador creado con exito', admin: adminAdded})
        }
    })
}

function UpdateAdmin (req, res){
    let adminId = req.params.adminid
    let update = req.body
     
    Admin.findByIdAndUpdate(adminId, update, (err, adminUpdated) =>{
        if(err) return res.status(500).send({error: true, error_code:`AU-500`, message: `Error al realizar la operacion: ${err}`})
        if(!adminUpdated) return res.status(500).send({error: true, error_code:`AU-404`, message: `No existe el usuario seleccionado`})
        
        res.status(200).send({adminUpdated:true, error: false , adminUpdated }) 
    })  
} 

function AdminSignIn (req, res){
    Admin.find({admin_user: req.body.admin_user, admin_password: req.body.admin_password},(err, admin) => {
        if(err) return res.status(500).send({error : true, error_code:`ASI-500`, message: err })
        if(!admin[0]) return res.status(404).send({error : true, error_code:`ASI-404`, message: 'No existe el usuario'})
            
        res.status(200).send({ error: false,message:"Sesion iniciada", admin})
    })  
}

module.exports = {
    CreateAdmin,
    UpdateAdmin,
    AdminSignIn
}