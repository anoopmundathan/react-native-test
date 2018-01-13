import { 
  FETCH_CUSTOMERS, 
  FETCH_CUSTOMERS_ERROR } from './types'

import { fetchCustomersToday, fetchAvatar } from '../utils/api'
import { pipe, lower, trim, md5Hash } from '../utils/helpers'

export const getCustomers = () => async dispatch  => {
    const data = await fetchCustomersToday()

    if(data.err) {
      dispatch( { type: FETCH_CUSTOMERS_ERROR, error: data.err })
    } else {
      const customers = transformQueueData(data)
      dispatch({ type: FETCH_CUSTOMERS, customers })
    }
}

const transformQueueData = customers => customers.map(customer => ({
      name: customer.customer.name,
      email: customer.customer.emailAddress,
      expectedTime: customer.expectedTime
    }
))
