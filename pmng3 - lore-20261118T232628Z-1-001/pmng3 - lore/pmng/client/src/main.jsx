import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

export const findAll = async () => {
  try {
    const response = await fetch('', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    const result = await response.json()
    return result.data || []
  } catch (error) {
    console.log(error)
    return []
  }
}

export const savePerson = async (name) => {
  const person = { name }

  try {
    const response = await fetch('url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(person),
    })
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)