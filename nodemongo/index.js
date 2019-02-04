const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('./api');

const app = express();
app.use(bodyParser.json())


app.use('/api',require('./api'));








app.listen('3000',()=>{
    console.log('server running');
})