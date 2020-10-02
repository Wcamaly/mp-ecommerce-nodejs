const express = require("express");
const RouteViews = require("./views")
const RouteCheckout= require("./checkout")

const router = express.Router();

router.use('/',RouteViews)
router.use('/api', RouteCheckout)

module.exports= router