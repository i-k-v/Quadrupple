const express = require('express')
const mysql = require('mysql2')
const path = require('path')
const connect = mysql.createConnection('mysqlConfig')

const mysqlConfig = {
    host: "data_base",
    password: "root12345",
    database: "epicstory"
}

const app = express()

// link nodejs and html page
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(3000)