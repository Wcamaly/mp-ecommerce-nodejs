var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

router.get('/checkout', function (req, res) {
    res.render(`checkout/checkout`, req.query);
});

router.get('/checkout/success', function (req, res) {
    res.render(`checkout/success`, req.query);
});

router.get('/checkout/failure', function (req, res) {
    res.render(`checkout/failure`, req.query);
});

router.get('/checkout/pendings', function (req, res) {
    res.render(`checkout/pendigs`, req.query);
});

router.get('/checkout/payer', function (req, res) {
    res.render(`checkout/payer`, req.query);
});

module.exports = router;