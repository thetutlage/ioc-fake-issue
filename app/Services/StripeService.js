const Env = use('Env')
const stripe = require('stripe')(Env.get('STRIPE_SECRET_KEY'))

class StripeService {
  static createCharge({
    account_id,
    amount,
    description,
    stripeToken,
    currency = 'usd'
  }) {
    return new Promise((resolve, reject) => {
      stripe.charges.create(
        {
          amount,
          description,
          currency,
          source: stripeToken,
          destination: account_id
        },
        (err, charge) => {
          if (err) {
            return reject(err);
          }
          return resolve(charge);
        }
      );
    });
  }
  // ...other methods
}

module.exports = StripeService;
