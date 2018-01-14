import { combineReducers } from 'redux'
import { FETCH_CUSTOMERS, FETCH_CUSTOMERS_ERROR } from '../actions/types'

const customers = (state=[], action) => {
  const { customers } = action
  switch(action.type) {
    case FETCH_CUSTOMERS:
      return customers
    default:
      return state
  }
}

const error = (state = { }, action) => {
  switch(action.type) {
    case FETCH_CUSTOMERS_ERROR:
      return {
        error: action.error
      }
    default:
      return state
  }
}

export default combineReducers({
  customers,
  error
})
