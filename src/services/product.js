import axios from 'axios'

export default {
  // here write the all service product
  getProductFavorite(apiService, params){
    axios.get(`${apiService}/listProduct/favourite`, { params: params })
  }
}