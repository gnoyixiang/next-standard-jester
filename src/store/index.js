import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import * as reducers from './reducers'

const bindMiddleware = (...middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
  ...reducers
})

const hydrationReconciliation = (state, payload) => {
  return {
    ...state,
    ...payload
  }
}

const baseReducer = (state, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return hydrationReconciliation(state, payload)
    default:
      return combinedReducer(state, { type, payload })
  }
}

const initStore = () => {
  return createStore(baseReducer, bindMiddleware(thunk))
}

export const wrapper = createWrapper(initStore)
