import React from 'react'

import Navbar from './components/Navbar'
import WelcomeContent from './components/WelcomeContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <br/>
        <WelcomeContent />
        <br/>
        <Footer />
      </div>
    </>
  )
}

export default App
