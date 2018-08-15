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
}

module.exports = User
