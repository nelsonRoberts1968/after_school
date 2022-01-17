const router = require('express').Router();

router.get("/", (req,res)=>{
    res.render("homepage")
})

router.get("/api/account", (req,res) => {
    res.render("user-homepage")
})

module.exports = router;