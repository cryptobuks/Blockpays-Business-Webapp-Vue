import Vue from 'vue'
import MetaTags from './meta'
import { auth } from '~/store'
import { logInInterface } from '~/interfaces/authInterfaces/authInterface'
export default Vue.extend({
  head: () => ({
    title: 'Login',
    meta: MetaTags
  }),
  layout: 'index',
  data: () => ({
    login: {
      password: '' as string,
      email: '' as string
    } as logInInterface
  }),
  methods: {
    async logIn(): Promise<void> {
      await auth.actions.logIn(this.login)
    }
  }
})
