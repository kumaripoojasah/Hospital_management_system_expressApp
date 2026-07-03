const mysql=require('mysql2');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    
});
connection.connect(function(err){
 connection.query("CREATE DATABASE hospital;", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
module.exports=connection;