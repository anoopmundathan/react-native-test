import { combineReducers } from 'redux'
import { FETCH_CUSTOMERS } from '../actions/types'

const customers = (state=[], action) => {
  const { customers, page } = action
  
  switch(action.type) {
    case FETCH_CUSTOMERS:
      return page === 1 ? customers : [...state, ...customers]
    default:
      return state
  }
}

export default combineReducers({
  customers
})
