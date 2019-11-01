export interface endPointInterface {
  endPoint: string,
  userService: boolean,
  params: object
}

export interface apiRestInterface {
  data: {
   accessToken: string
  },
  status: object
}
