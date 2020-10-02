const mp = require("mercadopago")
const moment = require("moment")

class Checkout {
    constructor(config){
        mp.configure(
            {
                access_token: config.mpAccessToken,
                integrator_id: config.mpIntegrationId
            }
        )
        this.preference = {
            backUrls : config.backUrls || {},
            paymentMethods : config.paymentMethods || {},
            auto_return : config.autoReturn || 'all',
            purpose : config.purpose || null,
            notification_url : config.notificationUrl || '',
            statement_descriptor : config.statementDescriptor || '',
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
            newp.expiration_date_from = moment().format()
            newp.expiration_date_to = moment().add(this.timeExpires, 'second').format()
        }
        return mp.preference.create(newp)
    }




}


module.exports = Checkout