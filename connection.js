const mysql = require('mysql2');

let mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'employeedb'


})

 mysqlConnection.connect((err)=>{
    if(err){
        console.log('error occured in db'+JSON.stringify(err,undefined,2));
    }else{
        console.log('db connected successfully');
    }
})

module.exports = mysqlConnection