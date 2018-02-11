'use strict'

const express = require('express')
const UserController = require('../controllers/users')
const StoreController = require('../controllers/stores')
const AdminController = require('../controllers/admins')
const api = express.Router() 
/*Esquema Usuarios*/
//Llamar todos los usuarios
api.get('/v1/users', UserController.GetUsers)

//Llamar usuario por id
api.get('/v1/user/:userid', UserController.GetUser)

//Crear un nuevo usuario
api.post('/v1/user', UserController.CreateUser )

//Editar un usuario por id
api.put('/v1/user/:userid', UserController.UpdateUser)

//Elimina un usuario por id
api.delete('/v1/user/:userid', UserController.DeleteUser)

//Realiza el Login
api.post('/v1/user/login', UserController.SignIn)
  

/*Esquema Tiendas*/
//Llamar todas las tiendas
api.get('/v1/stores', StoreController.GetStores)
 
//Crear una nueva tienda
api.post('/v1/store', StoreController.CreateStore )

//Llamar una tienda por id
api.get('/v1/store/:storeid', StoreController.GetStore)

//Editar una tienda por id
api.put('/v1/store/:storeid', StoreController.UpdateStore)
 
//Elimina una tienda por id
api.delete('/v1/store/:storeid', StoreController.DeleteStore)


/*Esquema Login Admin*/
//Genera a un nuevo administrador
api.post('/v1/admin', AdminController.CreateAdmin)

//Edita el admin
api.put('/v1/admin/update/:adminId', AdminController.UpdateAdmin)

//Realiza el Login de admin
api.post('/v1/admin/login', AdminController.AdminSignIn)


module.exports = api