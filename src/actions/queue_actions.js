import { 
  FETCH_CUSTOMERS, 
  FETCH_CUSTOMERS_ERROR } from './types'
import { fetchCustomersToday } from '../utils/api'

export const getCustomers = () => async dispatch  => {
    let data = await fetchCustomersToday()

    if(data.err) {
      dispatch( { type: FETCH_CUSTOMERS_ERROR, error: data.err })
    } else {

      // fetch avatar
      dispatch({ type: FETCH_CUSTOMERS, customers: data })
    }
}
