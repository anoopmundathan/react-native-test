import base64 from 'base-64'

export const userName = 'codetest1'
export const password = 'codetest100'
export const apiUrl = 'https://app.qudini.com/api/queue/gj9fs'

// GET - fetch customers 
export const fetchCustomers = async () => {
  let response = await fetch(apiUrl, { 
    method: 'GET',
    headers: {
      'Authorization': 'Basic '+ base64.encode(userName + ":" + password), 
      'Content-Type': 'application/json'
    }
  })
  let customers = await response.json()
  return customers
}
