var express = require("express");
var mysql   = require("mysql");
var app     = express();

var connection = mysql.createConnection({
    host        : "localhost",
    user        : "root",
    password    : "",
    database    : "nodejs_db"
});

connection.connect(function(konek){
    if(!konek)
        console.log('koneksi berhasil');
    else
        console.log('koneksi gagal');
});
//routing
app.get("/", function(request, response){
    connection.query("SELECT * FROM nodejs_db", function(success, row, fields){
        if(success){
            console.log("kueri berhasil");
        }else{
            console.log("kueri gagal");
        }
    });
});

//setting port
app.listen(3333);