
class User {
  constructor({ id, name, email, type, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.password = password;
  }
}

module.exports = User;