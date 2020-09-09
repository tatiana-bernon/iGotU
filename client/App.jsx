import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import WelcomeContent from './components/WelcomeContent'
import FormParent from './components/FormParent'
import FormTeacher from './components/FormTeacher'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div className='container'>
          <Route path='/' component={Navbar} />
          <div className='content'>
            <Route exact path='/' component={WelcomeContent} />
            <Route path='/formparent' component={FormParent} />
            <Route path='/formteacher' component={FormTeacher} />
            <Route path='/' component={Footer} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
