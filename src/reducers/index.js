import { combineReducers } from 'redux'
import { FETCH_CUSTOMERS } from '../actions/types'

const customers = (state=[], action) => {
  const { customers } = action
  
  switch(action.type) {
    case FETCH_CUSTOMERS:
      return customers
    default:
      return state
  }
}

export default combineReducers({
  customers
})
