import axios from 'axios'

function doLogin(account_name, password) {
  const data = JSON.stringify({
    account_name: account_name,
    password: password
  })

  const config = {
    method: 'post',
    url: 'http://127.0.0.1:8080/api/account/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default doLogin
