const express = require('express');
const mysql = require('mysql');
const config = require('./config').config;
const jwt = require('jsonwebtoken');
const adbs = require('ad-bs-converter');
const app = express();

app.use(require('body-parser').urlencoded({extended:false}));
const postuser= require('./api/user/post_user');
app.use('/api/post/user',postuser);

app.use('/api/get/guest',require('./api/guest/get_guest'));
app.use('/api/post/guest',require('./api/guest/post_guest'));
app.use('/api/update/guest',require('./api/guest/put_guest'));
app.use('/api/delete/guest',require('./api/guest/delete_guest'));

app.get('/api',(req,res)=>{
    res.send('Welcome to Api');
})

app.post('/api/posts',veryfytoken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,data)=>{
        if(err)
        res.sendStatus(403)
        else{
            res.json({
                message : 'post created',
                data
            })
        }
    })
    // res.json({
    //     message: 'Post created..'
    // })
});

// app.post('/api/login',(req,res)=>{

//     cosnt user = {


//         id : 1,
//         username : 'brad',
//         email : 'brad@gmail.om'
//     };

//     jwt.sign({user: user},'secretkey', (err,token)={
//             res.json({
//                 res.json({
//                     token
//                 });
//             });
//         });
// });

//  Generate and Sending Token Response
app.post('/api/login',(req,res)=>{
    const user = {
        id: 1,
        username : 'brad',
        email : 'bard@gmail.com'
    }

    jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        });
    });
});

function veryfytoken(req,res,next){
    const bearerHeader = req.headers['authorization']

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();

    }else{
        res.sendStatus(403);
    }
}


app.listen('3000',(err)=>{
    if(err){
        console.log(err);
        // process.env.SECRET_KEY;
        // throw err;
    }
    console.log("Server Running");
})

// console.log("1992/02/12")
// console.log(adbs.ad2bs('1992/05/25'));

