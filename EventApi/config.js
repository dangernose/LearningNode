const express = require('express');
const config = {
    host        : 'localhost',
    user        : 'root',
    password    : 'nothing',
    database    : 'event_central',
}

const pool = require('mysql').createPool(config);

exports.pool = pool;
exports.config = config;