import { state } from './state'
import { authInterface } from '~/interfaces/authInterfaces/authInterface'
export default {
  setAuth(alert: authInterface): void {
    state.isLogged = alert.isLogged
    state.state = alert.state
  }
}
