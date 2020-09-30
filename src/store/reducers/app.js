import { appActionTypes } from '../actions/app'

const initialState = {
  mountedTime: undefined
}

const setMountedTime = (state, mountedTime) => {
  return {
    ...state,
    mountedTime
  }
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appActionTypes.SET_APP_MOUNTED_TIME:
      return setMountedTime(state, payload)
    default:
      return state
  }
}

export default appReducer
