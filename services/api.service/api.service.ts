import axios from 'axios'
import { accessParam } from './auth.service'
import {
  apiRestInterface,
  endPointInterface
} from '~/interfaces/apiInterfaces/apiInterface'

const API_URL = 'https://dce78de2.ngrok.io/api/v1'
// const API_URL = 'https://dev.eyewalletpro.com/api/v1'
const fileUrl: string = 'https://dev.eyewalletpro.com/web'
const apiUrl: string = API_URL
let header: object
let url: string = ''
let jsonParams: string = ''

function jsonToURLEncoded(jsonString: any) {
  return Object.keys(jsonString)
    .map(function(key: any): any {
      return encodeURIComponent(key) + '=' + encodeURIComponent(jsonString[key])
    })
    .join('&')
}

const get = async function(apiRest: endPointInterface): Promise<object> {
  if (apiRest.userService) {
    header = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + `${accessParam}`
    }
  }
  url = API_URL + apiRest.endPoint
  return new Promise((resolve) => {
    if (apiRest.params) {
      jsonParams = jsonToURLEncoded(apiRest.params)
    }
    axios
      .get(url + '?' + jsonParams, { headers: header })
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        console.log('error en api', error)
      })
  })
}

const post = async function(
  apiRest: endPointInterface
): Promise<apiRestInterface> {
  url = API_URL + apiRest.endPoint
  if (apiRest.userService) {
    header = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + `${accessParam}`
    }
  }
  if (apiRest.params) {
    return axios.post(url, apiRest.params, { headers: header })
  }
  return axios.post(url, '', { headers: header })
}

const put = function(apiRest: endPointInterface): Promise<object> {
  url = API_URL + apiRest.endPoint
  if (apiRest.userService) {
    header = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + `${accessParam}`
    }
  }
  if (apiRest.params) {
    return axios.put(url, apiRest.params, { headers: header })
  }
  return axios.post(url, '', { headers: header })
}

const deleted = function(apiRest: endPointInterface): Promise<object> {
  url = API_URL + apiRest.endPoint
  if (apiRest.userService) {
    header = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + `${accessParam}`
    }
  }
  return axios.delete(url + '/' + apiRest.params, { headers: header })
}
export { post, get, put, deleted, apiUrl, fileUrl }
