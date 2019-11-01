import {
  parseDecrypt,
  stringifyEncrypt
} from '~/helpers/aesJs/securityEnctrypt'

const setDataJson = (key: string, value: object | string): void => {
  localStorage.setItem(key, stringifyEncrypt(value))
}

const getDataJson = (key: string) => {
  if (localStorage.getItem(key)) {
    return parseDecrypt(localStorage.getItem(key) || '{}')
  } else return null
}

const removeKey = (key: string) => {
  localStorage.removeItem(key)
}
const removeAllKey = () => {
  localStorage.clear()
  window.localStorage.clear()
}
export { setDataJson, getDataJson, removeKey, removeAllKey }
