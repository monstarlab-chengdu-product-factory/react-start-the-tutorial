import {
  SHOWN_GLOBAL_ERROR
} from '../constants/ActionTypes'
import {errorCase} from '../constants/config'
import {message} from '../constants/message'

const initialState = {
  hasError: false,
  text: ''
}

export default function error(state = initialState, action) {
  switch (action.type) {
    case  SHOWN_GLOBAL_ERROR: {
      if (action.errorType === errorCase.NO_AUTH) {
        return {
          hasError: true,
          text: message.globalError.noAuth
        }
      }else{
        return {
          hasError: false,
          text: ''
        }
      }
    }
    default:
      return state
  }
}