const Checkout = require("../libs/checkout")
const Config = require("../libs/config")
module.exports = (req, res, next) => {
    if (!req.app.get("checkout")) {
        let mp = new Checkout({
            mpAccessToken : Config.MP_ACCESS_TOKEN,
            mpIntegrationId: Config.MP_INTEGRATOR_ID,
            backUrls: Config.MP.BACK_URLS,
            paymentMethods: Config.MP.PAYMENT_METHODS,
            notificationUrl:Config.MP.NOTIFICATION_URL,
            statementDescriptor: Config.MP.STATEMENT_DESCRIPTOR,
            expires:false,
            timeExpires: Config.MP.TIME_EXPIRES
        })
        req.app.set("checkout", mp)
    }
    next()
} 