export default {
  // metodo render de uma imagem
  render(image) {
    return {
      id: image.id,
      url: `http://localhost:3334/uploads/${image.path}`
    }
  },

  // metodo render de todas imagens
  renderMany(images) {
    return images.map(image => this.render(image))
  }
}
