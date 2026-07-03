const mysql=require('mysql2');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital'
});

connection.connect(function(err){
    connection.query("CREATE TABLE patient(pid int, pname varchar(20),age int , gender varchar(10));", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("create table staff(eid int , ename varchar(25), age int , gender varchar(25));", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("create table doctor(did int , dname varchar(25), age int , gender varchar(25));", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
module.exports=connection;