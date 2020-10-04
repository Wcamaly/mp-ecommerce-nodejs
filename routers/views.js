var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')

router.get('/', function (req, res) {
    res.render('home', {
        helpers: {
            view: function () { return 'home' }
        }
    });
});

router.get('/detail', function (req, res) {
    res.render('detail', {...req.query,
        helpers: {
            view: function () { return 'item' }
        }
    });
});

router.get('/checkout', function (req, res) {
    res.render(`checkout/checkout`, req.query);
});


router.get('/checkout/notify', function (req, res) {
    
    let json = fs.readFileSync(path.join(__dirname,'../assets/notify.json'))
    res.render(`checkout/notify`, {json});
});

router.get('/checkout/success', function (req, res) {

    res.render(`checkout/success`, req.query);
});

router.get('/checkout/failure', function (req, res) {

    res.render(`checkout/failure`, req.query);
});

router.get('/checkout/pending', function (req, res) {

    res.render(`checkout/pending`, req.query);
});

router.get('/checkout/payer', function (req, res) {
    res.render(`checkout/payer`, {...req.query,
        helpers: {
            view: function () { return 'item' }
        }
    });
});

module.exports = router;