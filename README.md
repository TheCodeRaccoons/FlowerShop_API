# FlowerShop_API
documentacion del api para el app para florerias
 
**This project's source and others from the org. can be downloaded from https://github.com/TheCodeRaccoons/**

<br>

Author & Contributor List
--------------------
* Jorge Cortez (JorchC)
<br>

Sections:
==================== 
* [User endpoints](#user-endpoints)
* [Json Schemas in the Database](#json-schemas-in-the-database)
<br>

# User endpoints 
<br>

Llamar todos los usuarios<br>
--------------------
**GET:** https://{Heroku-link}/api/v1/users/

____________________________
Example AJAX Call
```
 $.ajax({
    type: 'GET',
    url: 'https://{Heroku-link}/api/v1/user/{userid}/',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false,
    success: function(data){
        console.log(data)
    },            
    error: function (errMsg) {
        console.log(errMsg)
    }
});
```


Llamar usuario por id<br>
--------------------
**GET:** https://{Heroku-link}/api/v1/user/{userid}/

**PARAMETERS:**<br>
-userid<br>

____________________________
Example AJAX Call:
```
 $.ajax({
    type: 'GET',
    url: 'https://{Heroku-link}/api/v1/user/{userid}/',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false,
    success: function(data){
        console.log(data)
    },            
    error: function (errMsg) {
        console.log(errMsg)
    }
});
```
 
Crear un nuevo usuario
--------------------

**POST:** https://{Heroku-link}/api/v1/user/

**PARAMETERS:**<br>
- user_name
- password
- first_name
- last_name
- email
- address
- phone
____________________________
Example AJAX Call
```
 $.ajax({
    type: 'POST',
    url: 'https://{Heroku-link}/api/v1/user/',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false, 
    data: JSON.stringify( {
        "user_name":$('#user_name').val(),
        "password": $('#password').val(),
        "first_name": $('#first_name').val(),
        "last_name": $('#last_name').val(), 
        "email": $('#email').val(), 
        "address": $('#address').val(),
        "phone": $('#phone').val()
    }), 
    success: function(data){
        console.log(data)
    },            
    error: function (errMsg) {
        console.log(errMsg)
    }
});
```

# Json Schemas in the Database
First of all lets check our schemas, for this API we have 3 schemas (ATM) which are the user schema, the store schema and the ticket schema defined down here:

User Schema
--------------------

```
 [
    "user":{
        "_id":"",
        "user_name":"",
        "password":"",
        "first_name":"",
        "last_name":"",
        "email":"",
        "address":"",
        "phone":""
    }
]
```

Store Schema
--------------------
 
```
[
    {
        "_id":"",
        "store_name":"",
        "admin_user":"",
        "admin_password":"", 
        "store_address":"", 
        "store_zip_code":"", 
        "store_phone":"", 
        "store_email":"", 
        "store_description":"",
        "store_raiting":"", 
        "store_logo":"", 
        "store_social":{
            "store_facebook":"",
            "store_instagram":""
        },
        "store_sections":{
            "about":{
                "banner":"",
                "title":""
            },
            "catalog":{
                "banner":"",
                "title":""
            },
            "promotions":{
                "banner":"",
                "title":""
            },
            "share":{
                "banner":"",
                "title":""
            }
        },
        "store_categories":[
            {
                "category_name":"",
                "category_icon":""
            }
        ],
        "store_promos":[{
            "promo_id":"",
            "promo_description":"",
            "promo_amount": 0,
            "promo_banner":""
        }],
        "products":[
            {
            "product_sku":"",
            "product_name":"",
            "product_category":"",
            "product_price":0,
            "product_description":"",
            "product_image":""
            }
        ]
    }
]
```

Ticket schema
--------------------
```
[
    {
        "_id":"",
        "user_id":"",
        "ticket_info":[{
            "store_id":"",
            "store_name":"",
            "product_id":"",
            "product_name":"",
            "price":0
        }],
        "ticket_total":0
    }
]
```
