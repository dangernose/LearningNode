const express = require('express');
const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'nothing',
    database : 'nodesql'
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("my Sql Connected");
})

const app = express();

// Create db

app.get('/createdb',(req, res)=>{
    let sql = 'CREATE DATABASE nodesql';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database Created');
    })
});

app.get('/create_posts_table',(req,res)=>{
    let sql = 'CREATE TABLE posts( id INT AUTO_INCREMENT, title varchar(255), body varchar(255), PRIMARY KEY (id));';
    db.query(sql,(req,res)=>{
        db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send('Posts table created');
        });

    });
});

app.get('/addpost',(req,res) => {
    let post = {title: 'Post One', body: 'this is post one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post one Added');
    })
});

app.get('/addpost2',(req,res) => {
    let post = {title: 'Post two', body: 'this is post two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post one Added');
    })
});

app.get('/getposts',(req,res)=>{
    let sql = 'SELECT * FROM posts';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen('3000', startingserver());

function startingserver(){
    console.log("Server listening on port 3000");
}


console.log(Math.random());
