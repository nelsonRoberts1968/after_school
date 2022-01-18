const express = require('express');
const router = express.Router();
const db = require('../db/connection');


router. get('/', (req, res)=>{
    res.render('homepage');
})

module.exports = router;