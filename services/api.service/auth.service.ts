import { getDataJson, setDataJson } from '~/helpers/localStore/localStoreHelper'

const accessParam = function() {
  return getDataJson('token')
}
const setToken = function(token: string) {
  setDataJson('token', token)
}

export { accessParam, setToken }
