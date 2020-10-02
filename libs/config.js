const host = process.env.HOST || `http://localhost:${process.env.PORT || 3000}`
module.exports = {
    MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN || "",
    MP_COLLECTOR_ID: process.env.MP_COLLECTOR_ID || "",
    MP_PUBLIC_KEY: process.env.MP_PUBLIC_KEY || "",
    MP_INTEGRATOR_ID: process.env.MP_INTEGRATOR_ID || "",
    PORT: process.env.PORT || 3000,
    MP: {
        BACK_URLS: {
            success: `${host}/checkout/success`,
            failure: `${host}/checkout/failure`,
            pending: `${host}/checkout/pending`
        },
        PAYMENT_METHODS: {
            "excluded_payment_methods": [
                {
                    "id": "amex"
                }
            ],
            "excluded_payment_types": [
                {
                    "id": "atm"
                }
            ],
            "installments": 6
        },
        TIME_EXPIRES: 3600*2,
        STATEMENT_DESCRIPTOR: "Tienda en linea celulares | Certificación de CheckOut Mercado Pago",
        NOTIFICATION_URL: `${host}/checkout/notify`
    }


}