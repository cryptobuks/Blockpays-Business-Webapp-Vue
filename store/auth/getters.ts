import { state } from './state'
import { authInterface } from '~/interfaces/authInterfaces/authInterface'

export default {
  getAuht(): authInterface{
    return state
  }
}
