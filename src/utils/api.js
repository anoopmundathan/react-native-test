import base64 from 'base-64'

export const userName = 'codetest1'
export const password = 'codetest100'
export const apiUrl = 'https://app.qudini.com/api/queue/gj9fs'

// GET - fetch queueData 
export const fetchQueueData = async () => {
  let response = await fetch(apiUrl, { 
    method: 'GET',
    headers: {
      'Authorization': 'Basic '+ base64.encode(userName + ":" + password), 
      'Content-Type': 'application/json'
    }
  })
  let queueData = await response.json()
  return queueData
}
