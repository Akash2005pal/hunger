var mysql=require('mysql2')
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'hungerbuddy',
    multipleStatements:true,
    connectionLimit:100,
})
module.exports=pool
