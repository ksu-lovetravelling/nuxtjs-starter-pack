const file = {
  getFileUrl (link) {
    return process.env.strapiBaseUri + link;
  }
};

export default ({ app }, inject) => {
  inject('file', file)
}
