export const appActionTypes = {
  SET_APP_MOUNTED_TIME: 'SET_APP_MOUNTED_TIME'
}

export const setAppMountedTime = timestamp => {
  return {
    type: appActionTypes.SET_APP_MOUNTED_TIME,
    payload: timestamp
  }
}
