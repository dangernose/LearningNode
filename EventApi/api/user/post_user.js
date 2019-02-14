const express = require('express');
const pool = require('../../config').pool;
const bcrypt = require('bcrypt');

const router = express.Router();


router.post('/',(req,res)=>{
    let sql = 'INSERT INTO table_users SET ?';
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        const saltRounds = 10;
        bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
            let user = {
                username : req.body.username,
                hash : hash
            };
            conn.query(sql,user,(err,result)=>{
                if(err) throw err;
                res.json({
                    rowsaffected : result.affectedRows
                });
            });

        });
    });
});

module.exports = router;