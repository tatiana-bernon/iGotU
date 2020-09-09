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

          <h1 className='has-text-primary-dark'>Teacher Profile Form</h1>

          <h3>Kindly fill this form with the relevant information about you and your whānau.</h3>

        </div>

        <fieldset>

          <div className="field">

            <br />

            <label className="label">Name</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. John Doe" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Experience</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Places you worked before" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Qualifications</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Any courses completed in the field of Education" />

            </div>

          </div>

          <br />

          <label className="label">Teacher Registration Number</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g. Number on Registration card" />

          </div>

          <br />

          <div className="field">

            <label className="label">Last time you were police veted</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Last year when applying for my provisional teacher Reg" />

            </div>

          </div>

          <br />

          <label className="label">First aid expiry date</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g. 20/12/2021" />

          </div>

          <br />

          <div className="field">

            <label className="label">Preferred age group</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Toddlers; 2-3.5 years" />

            </div>

          </div>

          <br />

          <label className="label">Personal teaching philosophy and values</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g Reggio philosophy with RIE" />

          </div>

          <br />

          <div className="field">

            <label className="label">Curriculum offered</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Emphasis on sensory exploration and free play" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Ressources provided</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. books and finger puppets" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Expectation</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Parents to share with me their strategies for me to use them, for more consistency for the child" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Location</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. New Lynn, Auckland, 0600" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">How would you respect the parent space and need to work while being inclusive?</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. I will adapt a routine where is possible the family can have meals together" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Things we should know about you</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Likes, hobbies and passion, anything helpful to know you better" />

            </div>

          </div>

        </fieldset>

        <br />

        <div className="field is-grouped is-grouped-centered">

          <p className="control">

            <a className="button is-primary"><strong>Submit Form</strong></a>

          </p>

          <p className="control">

            <a className="button is-light"><strong>Save and Exit</strong></a>

          </p>

        </div>

        <br />

        <Footer />

      </div>

    </>
  )
}

export default FormParent
