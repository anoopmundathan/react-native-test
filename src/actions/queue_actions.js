import { 
  FETCH_CUSTOMERS, 
  FETCH_CUSTOMERS_ERROR } from './types'

import { fetchCustomersToday } from '../utils/api'

export const getCustomers = () => async dispatch  => {
    const data = await fetchCustomersToday()

    if(data.err) {
      dispatch( { type: FETCH_CUSTOMERS_ERROR, error: data.err })
    } else {
      const customers = transformQueueData(data)
      dispatch({ type: FETCH_CUSTOMERS, customers })
    }
}

const transformQueueData = customers => customers.map(({customer, expectedTime}) => ({
      name: customer.name,
      email: customer.emailAddress,
      expectedTime
    }
))
