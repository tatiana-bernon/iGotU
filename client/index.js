import React from 'react'
import ReactDOM from 'react-dom'
import main from '../server/'
import Welcome from './components/Welcome'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome')
  )
})
