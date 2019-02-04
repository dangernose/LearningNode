const express = require('express');

const router = express.Router();

// Get all Guests
router.get('/guests',(req,res)=>{
    res.send({
        type:'GET'
    })
})

// Add new Guest in Database
router.post('/guests',(req,res)=>{
    console.log(req.body);
    res.send({
        type:'POST',
        name : req.body.name,
        rank : req.body.rank
    })
})

// Update Guest in Database
router.put('/guests/:id',(req,res)=>{
    res.send({
        type:'PUT'
    })
})

router.delete('/guests/:id',(req,res)=>{
    res.send({
        type:'DELETE'
    })
})

module.exports = router;