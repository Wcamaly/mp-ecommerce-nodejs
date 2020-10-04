const mp = require("mercadopago")
const moment = require('moment-timezone')


class Checkout {
    constructor(config){
        mp.configure(
            {
                access_token: config.mpAccessToken,
                integrator_id: config.mpIntegrationId
            }
        )
        this.preference = {
            back_urls : config.backUrls || {},
            payment_methods : config.paymentMethods || {},
            auto_return : config.autoReturn || 'all',
            notification_url : config.notificationUrl || '',
            expires : config.expires || false
        }

        this.timeExpires = config.expires ? (config.timeExpires ? config.timeExpires : 3600) : null

    }


    async createPreference( items, payer,externalReference) {
        let newp = {
            ...this.preference,
            items,
            payer,
            external_reference : JSON.stringify(externalReference)
        }
        if (this.preference.expires){
            newp.expiration_date_from = moment().tz('America/Argentina/Buenos_Aires').format("yyyy-MM-DDTHH:mm:ss.SSSZ")
            newp.expiration_date_to = moment().tz('America/Argentina/Buenos_Aires').add(this.timeExpires, 'second').format("yyyy-MM-DDTHH:mm:ss.SSSZ")
        }

        return mp.preferences.create(newp)
    }




}


module.exports = Checkout