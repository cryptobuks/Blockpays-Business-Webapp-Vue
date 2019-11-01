export interface authInterface {
  isLogged: boolean,
  state: string,
  token: string
}

export interface logInInterface {
  password?: string | null ,
  email?: string | null
}
