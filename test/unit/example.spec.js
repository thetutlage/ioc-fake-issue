'use strict'

const { test } = use('Test/Suite')('Example')
const { ioc } = use('@adonisjs/fold')
const User = use('App/Services/User')
const UserBroken = use('App/Services/UserBroken')

test('encrypt data with correct service', async ({ assert }) => {
  class MyEncryption {
    encrypt (value) {
      return `${value}-encrypted`
    }
  }

  ioc.fake('Adonis/Src/Encryption', () => {
    return new MyEncryption()
  })

  const user = make(User)
  assert.equal(user.encryptDetails('virk'), 'virk-encrypted')
})

test.failing('encrypt data with broken service', async ({ assert }) => {
  class MyEncryption {
    encrypt (value) {
      return `${value}-encrypted`
    }
  }

  ioc.fake('Adonis/Src/Encryption', () => {
    return new MyEncryption()
  })

  const user = make(UserBroken)
  assert.equal(user.encryptDetails('virk'), 'virk-encrypted')
})

test('create a stripe charge for a user', async ({ assert }) => {
  class StripeService {
    static createCharge() {
      return true
    }
  }

  ioc.fake('App/Services/StripeService', () => {
    return new StripeService()
  });
  const user = make(User)
  const charge = await user.createChargeForUser()
  assert.equal(charge.length, true)
});
