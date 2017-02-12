var express = require("express");
var mysql   = require("mysql");
var app     = express();

var connection = mysql.createConnection({
    host        : "localhost",
    user        : "root",
    password    : "",
    database    : "nodejs_db"
});

connection.connect(function(gagal){
    if(!gagal)
        console.log('koneksi berhasil');
    else
        console.log('koneksi gagal');
});
//routing
app.get("/", function(request, response){
    connection.query("SELECT * FROM sample", function(gagal, row, fields){
        if(!gagal){
            console.log("kueri berhasil");
            console.log(row);
        }else{
            console.log("kueri gagal");
        }
    });
});

//setting port
app.listen(3333);