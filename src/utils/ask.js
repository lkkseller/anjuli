import axios from 'axios' // axios
// get
export function get(url) {
  return axios({
    method: 'get',
    url: 'http://10.168.2.67:9999/' + url
  }).then((res) => {
    return res.data
  }).catch((err) => {
    return err
  })
}

// post
export function post(url, data) {
  return axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: 'http://10.168.2.67:9999/' + url,
    data: JSON.stringify(data)
  }).then((res) => {
    return res.data
  }).catch((err) => {
    return err
  })
}
