import axios from 'axios'

export default {

  itemCollection (name) {
    return axios.get('&s=' + name)
      .then(response => {
        return response.data
      })
  },

  singleItem (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}
