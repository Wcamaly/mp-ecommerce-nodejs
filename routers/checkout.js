var express = require('express');
var router = express.Router();

router.post('/checkout',async (req,res)=>{  
    res.redirect(`/checkout?id=${39309}`)
})

module.exports=router