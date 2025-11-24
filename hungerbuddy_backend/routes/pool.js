var mysql=require('mysql2')
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'hungersbuddy',
    multipleStatements:true,
    connectionLimit:100,
})
module.exports=pool
