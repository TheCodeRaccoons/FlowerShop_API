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
* [Store endpoints](#store-endpoints)
* [Json Schemas in the Database](#json-schemas-in-the-database)
<br>

# User endpoints 
<br>




Login using Username/Password<br>
--------------------
**GET:** https://appfloreria.herokuapp.com/api/v1/user/login

____________________________
Example AJAX Call
```
 $.ajax({
    type: 'GET',
    url: 'https://appfloreria.herokuapp.com/api/v1/user/login',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false,data: JSON.stringify( {
        "user_name":$('#user_name').val(),
        "password": $('#password').val(), 
    }), 
    success: function(data){
        console.log(data)
    },            
    error: function (errMsg) {
        console.log(errMsg)
    }
});
```


Get All Users<br>
--------------------
**GET:** https://appfloreria.herokuapp.com/api/v1/users/

____________________________
Example AJAX Call
```
 $.ajax({
    type: 'GET',
    url: 'https://appfloreria.herokuapp.com/api/v1/user/',            
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


Get a Single user by ID<br>
--------------------
**GET:** https://appfloreria.herokuapp.com/api/v1/user/{userid}/

**PARAMETERS:**<br>
- userid<br>

____________________________
Example AJAX Call:
```
 $.ajax({
    type: 'GET',
    url: 'https://appfloreria.herokuapp.com/api/v1/user/{userid}/',            
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
 
Create a new User<br>
--------------------

**POST:** https://appfloreria.herokuapp.com/api/v1/user/

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
    url: 'https://appfloreria.herokuapp.com/api/v1/user/',            
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

Delete a User by ID<br>
--------------------
**DELETE:** https://appfloreria.herokuapp.com/api/v1/user/{userid}/

**PARAMETERS:**<br>
- userid<br>

____________________________
Example AJAX Call:
```
 $.ajax({
    type: 'DELETE',
    url: 'https://appfloreria.herokuapp.com/api/v1/user/{userid}/',            
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

Update a User by ID<br>
--------------------
**PUT:** https://appfloreria.herokuapp.com/api/v1/user/{userid}/

**PARAMETERS:**<br>
- userid<br><br>

**Data:**<br>
- user_name
- password
- first_name
- last_name
- email
- address
- phone 

____________________________
Example AJAX Call:
```
 $.ajax({
    type: 'PUT',
    url: 'https://appfloreria.herokuapp.com/api/v1/user/{userid}/',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false,
    data: JSON.stringify({
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

<br>


# Store endpoints 
<br>

 
 

Create a new Store<br>
--------------------
It is not necesary to store all the data right away but username/password Must be added, 
the resto of the data can be modified later depending on the admin's need <br>
**POST:** https://appfloreria.herokuapp.com/api/v1/store/

**PARAMETERS:**<br>
- user_name (Store)
- password (Store)
____________________________
Example AJAX Call
```
 $.ajax({
    type: 'POST',
    url: 'https://appfloreria.herokuapp.com/api/v1/store/',            
    headers: {
        'Content-Type': 'application/json',
    },
    dataType: "JSON", 
    async: false, 
    data: JSON.stringify( {
        "store_name": "",
        "admin_user": $('#admin_user').val(),
        "admin_password": $('#admin_password').val(), 
        "store_address":"", 
        "store_zip_code": "", 
        "store_phone":"", 
        "store_email":"", 
        "store_description":"",
        "store_raiting": "", 
        "store_logo": "" , 
        "store_social":{
            "store_web": "",
            "store_facebook": "",
            "store_instagram": ""
        },
        "store_sections":{
            "about":{ 
                "banner": "",
                "title": ""
                },
            "catalog":{ 
                "banner": "",
                "title": ""
            },
            "promotions":{
                "banner": "",
                "title": ""},
            "share":{ }
        },
        "store_categories":[],
        "store_promos":[],
        "products":[]
}) 
    }), 
    success: function(data){
        console.log(data)
    },            
    error: function (errMsg) {
        console.log(errMsg)
    }
});
```


Get All Stores<br>
--------------------
**GET:** https://appfloreria.herokuapp.com/api/v1/stores/

____________________________
Example AJAX Call
```
 $.ajax({
    type: 'GET',
    url: 'https://appfloreria.herokuapp.com/api/v1/stores/',            
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

Get single Store by id<br>
--------------------
**GET:** https://appfloreria.herokuapp.com/api/v1/store/{storeId}
<br>
**PARAMETERS:**<br>
- storeId<br>

____________________________
Example AJAX Call
```
 $.ajax({
    type: 'GET',
    url: 'https://appfloreria.herokuapp.com/api/v1/store/{storeId}',            
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



# Json Schemas in the Database
This Schemas are intended to learn how our Database works, and is only for informational purposes, in here we list the 3 main (Hopefully the noly 3) Schemas for the API where we will store the data, any changes will be listed in here.
schema defined down here:

User Schema
--------------------

``` 
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
```

Store Schema
--------------------
 
``` 
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
```

Ticket schema
--------------------
``` 
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
```
