'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StoreSchema = Schema({ 
        store_name: String,
        admin_user: String,
        admin_password: String, 
        store_address: String, 
        store_zip_code: Number, 
        store_phone: Number, 
        store_email: String, 
        store_description: String,
        store_raiting: Number, 
        store_logo: String, 
        store_representative: String, 
        store_social:{
            store_web: String,
            store_facebook: String,
            store_instagram: String
        },
        store_sections:{
            about:{
                banner: String,
                title: String
            },
            catalog:{
                banner: String,
                title: String
            },
            promotions:{
                banner: String,
                title: String
            },
            share:{
                banner: String,
                title: String
            }
        },
        store_categories:[
            {
                category_name: String,
                category_icon: String
            }
        ],
        store_promos:[{
            promo_id: Number,
            promo_description: String,
            promo_amount: Number,
            promo_banner: String
        }],
        products:[
            {
            product_sku: String,
            product_name: String,
            product_category: String,
            product_price: Number,
            product_description: String,
            product_image: String
            }
        ]
})

module.exports = mongoose.model('Store', StoreSchema)