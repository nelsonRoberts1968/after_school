const express = require('express');
const router = express.Router();
const db = require('../config/connection');

// rendering signup page 
router.get('/',(req, res) =>{
    res.render('signup');
});

// Create a candidate
router.post('/auth/signup', async ({ body }, res) => {
    console.log(body);
    const response = await signup(body);
// Signup complete then render page again.
   // res.render('homepage');
});


 module.exports = router;