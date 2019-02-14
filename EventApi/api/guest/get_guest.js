const express = require('express');
const pool = require('../../config').pool;
// const sql = require('mysql');

// const db = sql.createConnection(require('../config').config);
// db.connect((err)=>{
//     if(err) throw err;
//     console.log('mysql connected');
// })

const router = express.Router();

router.get('/',(req,res)=>{
    const queryoptions = req.query.id!=null?{id : req.query.id}:true;

    let sql = 'SELECT * FROM table_guest WHERE ?'
    pool.getConnection((err,conn)=>{
        if(err) throw err;
        conn.query(sql,queryoptions,(err,result)=>{
            res.send(result);
        })
    })
    // if(id!=null){
    //     let sql = 'SELECT * FROM table_guest WHERE ?'
    //     let  id = { id : req.query.id }
    //     db.query(sql,id,(err,result)=>{
    //         res.send(result);
    //     })
        
    // }else{
    //     let sql = 'SELECT * FROM table_guest'
    //     db.query(sql,(err,result)=>{
    //         res.send(result);
    //     })
    // }
})

module.exports = router;