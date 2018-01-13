import base64 from 'base-64'

export const userName = 'codetest1'
export const password = 'codetest100'
export const qApiUrl = 'https://app.qudini.com/api/queue/gj9fs'

// GET - fetch today's customers
export const fetchCustomersToday = async () => {
  
  try {
    let response = await fetch(qApiUrl, { 
      method: 'GET',
      headers: {
        'Authorization': 'Basic '+ base64.encode(userName + ":" + password), 
        'Content-Type': 'application/json'
      }
    })

    let data = await response.json()

    return data.status === 'ok' 
      ? data.queueData.queue.customersToday 
      : { err: 'Invalid response'}
  
  } catch(err) {
    return {
      err: "Network error"
    }
  }
}
