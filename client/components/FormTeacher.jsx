import React from 'react'

import Navbar from './Navbar'
import Footer from './Footer'

const FormTeacher = () => {
  return (
    <>
      <div>
        <Navbar />
        <br />
        <fieldset>

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
            </div>
          </div>

        </fieldset>
        <br />
        <Footer />
      </div>

    </>
  )
}

export default FormTeacher
