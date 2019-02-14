const express = require('express');
const bcrypt = require('bcrypt');
var pool = require('../../config').pool;

const router = express.Router();

router.put('/',(req,res)=>{
    let updates = [ 
        {
            guest_name : req.body.name,
            guest_address : req.body.address,
            guest_phone : req.body.phone,
            guest_email : req.body.email
        },
        {
           id : req.body.id
        }
    ]
    let sql = 'UPDATE table_guest SET ? WHERE ?'
    pool.getConnection((err,connection)=>{
        if(err)
        throw err;
        connection.query(sql,updates,(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    })
})

module.exports = router;