import mutations from './mutations'
import { authInterface, logInInterface } from '~/interfaces/authInterfaces/authInterface'
import { logInApiRest } from '~/services/api.endPoints/authentication'
import { getDataJson } from '~/helpers/localStore/localStoreHelper'

export default {
  setAuth(auth: authInterface) {
    mutations.setAuth(auth)
  },

  getToken() {
    const token: string | null = getDataJson('token')
    console.log(token)
    if (token)
    this.setAuth({
      token: token,
      isLogged: true,
      state: 'Is logged'
    })
  },

  async logIn(userLogin: logInInterface): Promise<object> {
    const { data } = await logInApiRest(userLogin)
    console.log(data)
    this.setAuth({
      token: data.accessToken,
      isLogged: true,
      state: 'Is logged'
    })
    return data
  }
}
