const express = require('express');
var pool = require('../../config').pool;

const router = express.Router();

router.delete('/',(req,res)=>{
    let deleteid = {
        id : req.body.id
    };
    sql = 'DELETE FROM table_guest WHERE ?'
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(sql,deleteid,(err,result)=>{
            if(err) throw err;
            console.log(req.body.id);
            res.send(result);
        })
    })
    
})

module.exports = router;