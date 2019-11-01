import Vue from 'vue'
import { authInterface } from '~/interfaces/authInterfaces/authInterface'
const state = {
  isLogged: false,
  state: 'Not Logged'
} as authInterface
Vue.observable<authInterface>(state)

export { state }
