export default {
  // metodo render de um usuario
  render(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      street: user.street,
      number
    }
  },

  // metodo render de todos usuarios
  renderMany(users) {
    return users.map(user => this.render(user))
  }
}
