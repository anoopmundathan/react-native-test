import { FETCH_QUEUE_DATA } from './types'
import { fetchQueueData } from '../utils/api'

export const getCustomer = () => async dispatch  => {
    let data = await fetchQueueData()
    console.log(data)
    // dispatch({ type: FETCH_QUEUE_DATA, payload: data })
}
