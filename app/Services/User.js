const StripeService = use('App/Services/StripeService')

class User {
  constructor (Encryption) {
    this.Encryption = Encryption
  }

  static get inject () {
    return ['Adonis/Src/Encryption']
  }

  encryptDetails (username) {
    return this.Encryption.encrypt(username)
  }

  async createChargeForUser () {
    const charge = await StripeService.createCharge({
      account_id: 'SOME_ACCOUNT_ID',
      amount: 1000,
      stripeToken: 'SOME_TOKEN',
      description: 'test description'
    })
    return charge
  }
}

module.exports = User
