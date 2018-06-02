import * as types from '../constants/ActionTypes'

// global error
export const shownGlobalError = (errorType) => ({
  type: types.SHOWN_GLOBAL_ERROR,
  errorType
})