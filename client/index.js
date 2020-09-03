import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Welcome from './components/Welcome'
import '../server/public/main.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome')
  )
})
