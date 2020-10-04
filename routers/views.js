var express = require('express');
var router = express.Router();

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

router.get('/checkout/success', function (req, res) {
    req.query.external_reference = JSON.parse(req.query.external_reference) // parseo to JSON
    console.log("QUESuccess : ", req.query)
    res.render(`checkout/success`, req.query);
});

router.get('/checkout/failure', function (req, res) {
    req.query.external_reference = JSON.parse(req.query.external_reference) // parseo to JSON
    console.log("QUEFailure: ", req.query)
    res.render(`checkout/failure`, req.query);
});

router.get('/checkout/pendings', function (req, res) {
    req.query.external_reference = JSON.parse(req.query.external_reference) // parseo to JSON
    console.log("QUEPendings: ", req.query)
    res.render(`checkout/pendigs`, req.query);
});

router.get('/checkout/payer', function (req, res) {
    res.render(`checkout/payer`, {...req.query,
        helpers: {
            view: function () { return 'item' }
        }
    });
});

module.exports = router;