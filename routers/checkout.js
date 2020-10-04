var express = require('express');
const config = require('../libs/config');
var router = express.Router();
const fs = require('fs')
const path = require('path')



router.post('/checkout', async (req, res) => {
    let { body } = req
    let checkout = req.app.get("checkout")

    let result = await checkout.createPreference([{
        id: 1234,
        title: body.title,
        picture_url: `${config.HOST}${body.img}`,
        description: "Dispositivo móvil de Tienda e-commerce​ ", // hardcode for task
        quantity: Number(body.unit),
        unit_price: Number(body.price)
    }], {
        name: body.name,
        surname: body.surname,
        email: body.email,
        phone: {
            "area_code": body.cod,
            "number": Number(body.phone)
        },
        address: {
            "street_name": body.address,
            "street_number": Number(body.num),
            "zip_code": body.zipcode
        },
    }, { numOrder: 10001 })

    res.redirect(result.body.init_point)

})


router.post('/checkout/notify', async (req, res) => {

    fs.appendFile(
        path.join(__dirname,'../assets/notify.json'),
        JSON.stringify(req.body,undefined, 2), () => {
            console.log("Se a agregado contenido")
        }
    );

    res.status(201).send()

})

module.exports = router