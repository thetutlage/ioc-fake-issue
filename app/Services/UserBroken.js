const Encryption = use('Encryption')

class User {
  encryptDetails (username) {
    return Encryption.encrypt(username)
  }
}

module.exports = User
