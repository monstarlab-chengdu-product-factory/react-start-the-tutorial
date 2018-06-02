import {getCookie} from '@/util/cookie'
import {getToken} from '@/api/login'

const checkXSRFToken = () => {
  let token = getCookie('XSRF-TOKEN')
  if (token.length === 0) {
    return getToken()
      .then(() => getCookie('XSRF-TOKEN'))
  } else {
    return new Promise(resolve => {
      resolve(token)
    })
  }
}

export default checkXSRFToken
