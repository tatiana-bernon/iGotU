import React from 'react'
import ReactDOM from 'react-dom'


import App from './App'
import '../server/public/main.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
