'use strict'

const Store = require('../models/stores')


function CreateStore(req, res){
    let store = new Store()
    store.store_name = req.body.store_name
    store.admin_user = req.body.admin_user
    store.admin_password = req.body.admin_password
    store.store_address = req.body.store_address
    store.store_zip_code = req.body.zip_code 
    store.store_phone = req.body.store_phone
    store.store_email = req.body.store_email
    store.store_description = req.body.store_description
    store.store_raiting = req.body.store_raiting
    store.store_logo = req.body.store_logo
    store.store_social.store_facebook = req.body.store_facebook
    store.store_social.store_instagram = req.body.store_instagram
    store.store_sections.about.banner = req.body.about_banner
    store.store_sections.about.title = req.body.about_title
    store.store_sections.catalog.banner = req.body.catalog_banner
    store.store_sections.catalog.title = req.body.catalog_title
    store.store_sections.promotions.banner = req.body.promotions_banner
    store.store_sections.promotions.title = req.body.promotions_title
    store.store_sections.share.banner = req.body.share_banner
    store.store_sections.share.title = req.body.share_title 
 
    store.save((err, storeAdded)=>{
        if(err){
            res.status(500).send({error: true, message:`Error al guardar en la base de datos: ${err}`})
        }else{
            res.status(200).send({ error: false, message:'Establecimiento guardado exitosamente en la base de datos', store: storeAdded})
        }
    })
}


function GetStores (req, res){
    Store.find({}, (err, stores) => {
        if(err) return res.status(500).send({error: true, message: `Error al realizar la busqueda: ${err}`})
        if(!stores) return res.status(404).send({error: true, message: `Lo sentimos no existen usuarios dados de alta`})
            
        res.status(200).send( { error: false, stores})
    })
}


function GetStore (req, res){
     let storeId = req.params.storeId

    Store.findById(storeId, (err, store) => {
        if(err) return res.status(500).send({error: true, message: `Error al realizar la busqueda: ${err}`})
        if(!store) return res.status(404).send({error: true, message: `Lo sentimos, el usuario que buscas no existe. Porfavor Intenta nuevamente`})

        res.status(200).send({ error: false, store})
    })
} 

function UpdateStore (req, res){
  
}
 
function DeleteStore (req, res){
  
} 

module.exports = {
    CreateStore,
    GetStores
}