const filters = {
  currencyIDR(value) {
    return 'Rp ' + parseInt(value).toLocaleString('id-ID')
  }
}

export default filters;