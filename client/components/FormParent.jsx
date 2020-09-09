import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const FormParent = () => {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className="has-text-centered">
          <h1>Parent Profile Form</h1>
          <h3>Kindly fill this form with the relevant information about you and your whānau.</h3>
        </div>
        <fieldset>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input is-primary" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input is-primary" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>

        </fieldset>
        <br />
        <Footer />
      </div>

    </>
  )
}

export default FormParent
