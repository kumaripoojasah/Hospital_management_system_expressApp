const mysql=require('mysql2');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital'
});

connection.connect(function(err){
    connection.query("SELECT * FROM patient;", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("SELECT * FROM staff;", function(err,result,fields){
        if(err) throw err;  
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("SELECT * FROM doctor;", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
module.exports=connection;