const express = require('express');
// const sql = require('mysql');
const pool = require('../../config').pool;

const router = express.Router();
// const db = sql.createConnection(require('../config').config)
// db.connect((err)=>{
//     if(err) throw err;
//     console.log('mysql connected');
// });

router.post('/',(req,res)=>{
    // res.send(`${req.body.name} is ${req.body.rank}.`)

    let guest = {
        guest_name : req.body.name,
        guest_address : req.body.address,
        guest_phone : req.body.phone,
        guest_email : req.body.email
    };
    let sql = 'INSERT INTO table_guest SET ?';
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        conn.query(sql, guest, (err,result)=>{
            if(err) throw err;
            // console.log(result);
            res.json({
                rowsaffected : result.affectedRows,
                insertid : result.insertId
            });
        });
    })
    
})

module.exports = router;