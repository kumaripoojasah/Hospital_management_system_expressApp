const mysql=require('mysql2');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'info123',
    database:'hospital'
});

connection.connect(function(err){
    connection.query("delete from staff where eid=1;", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("delete from patient where pname='John Doe';", function(err,result,fields){
        if(err) throw err;  
        console.log(result);
    });
});

connection.connect(function(err){
    connection.query("delete from doctor where dname='Dr. John';", function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });
});
module.exports=connection;