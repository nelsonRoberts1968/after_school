const router = require('express').Router();
const Account = require('../../models/Account');

router.get('api/account', (req,res) => {
    res.render('account');
})

module.exports = router;