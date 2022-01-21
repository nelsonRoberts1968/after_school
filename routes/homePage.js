const express = require('express');
const router = express.Router();
const db = require('../db/connection');


router. get('/', (req, res)=>{
    res.render('homepage');
})

router.get('/about', (req,res) => {
    res.render('about');
});

router.get('/submitform',(req, res) =>{
    res.render('submitform');
 });
 
 router.get('/signup',(req, res) =>{
    res.render('signup');
 });
module.exports = router;
