module.exports = {
    port : process.env.PORT || 3001,
    db : process.env.MONGODB || 'mongodb://Joorch:Jorch1304@appfloreria-shard-00-00-wwicd.mongodb.net:27017,appfloreria-shard-00-01-wwicd.mongodb.net:27017,appfloreria-shard-00-02-wwicd.mongodb.net:27017/test?ssl=true&replicaSet=appfloreria-shard-0&authSource=admin',
    SECRET_TOKEN : 'floreriaToken'
}