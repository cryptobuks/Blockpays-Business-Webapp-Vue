import { post } from '~/services/api.service/api.service'
import { logInInterface } from '~/interfaces/authInterfaces/authInterface'
import { apiRestInterface, endPointInterface } from '~/interfaces/apiInterfaces/apiInterface'

const logInApiRest = function(logIn: logInInterface): Promise<apiRestInterface> {
  const apiRest: endPointInterface = {
    endPoint: '/auth/login',
    userService: false,
    params: logIn
  }
  return post(apiRest)
}

export { logInApiRest }
