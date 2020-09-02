import React from 'react'
import ReactDOM from 'react-dom'

import Welcome from './components/Welcome'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome')
  )
})
