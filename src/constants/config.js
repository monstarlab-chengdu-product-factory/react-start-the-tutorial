const apiRoot = 'api'
const version = 'v1'
const API_HOST_DEV = `http://120.76.126.214:8104/${apiRoot}/${version}`
const API_HOST_PRO = `http://120.76.126.214:8103/${apiRoot}/${version}`

export const API_HOST = process.env.NODE_ENV === 'production' ? API_HOST_PRO : API_HOST_DEV

export const COMMENTS_NUM_ROWS = 10
export const POSTS_NUM_ROWS = 5

export const errorCase = {
  NO_AUTH: 'NO_AUTH'
}
