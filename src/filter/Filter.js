const filters = {
  currencyIDR(value) {
    return 'Rp ' + parseInt(value).toLocaleString('id-ID')
  },
  ellipsis(string, max) {
    if(string) {
      return (string.lenght > max) ? string.slice(0, max) + '...' : string
    }
  }
}

export default filters;