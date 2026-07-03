const mysql=require('mysql2');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital'
});

connection.connect(function(err){
    connection.query("insert into patient values(1, 'John Doe', 30, 'Male');", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("insert into staff values(1, 'Jane Smith', 25, 'Female');", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("insert into doctor values(1, 'Dr. John', 40, 'Male');", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
module.exports=connection;