const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/auth');
const db = require('../db/connection');

// rendering signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Create a candidate
router.post('/auth/signup', async ({ body }, res) => {
  console.log(body);
  const response = await signup(body);
  // Signup complete then render page again.
  res.render('homepage');
});

module.exports = router;
