import React from 'react'

const Welcome = () => {
  return (
    <>
      <div>
        <div>
          <ul className="welcomeNav">
            <li><a href="/Login">Login</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contacts">Contacts</a></li>
          </ul>
        </div>
        <h1 className='welcomeHeader'>Haere mai, Welcome to</h1>
        <h1><strong>iGotU !</strong></h1>
      </div>
    </>
  )
}

export default Welcome
