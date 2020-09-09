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

          <h1 className='has-text-primary-dark'>Parent Profile Form</h1>

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

            <label className="label">Family members</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. My spouse Geraldine and our daughter Mia" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Child age</label>

            <div className="control">

              <input className="input is-primary" type="tel" placeholder="e.g. Mia - 9months and Tāne - 2 yrs old" />

            </div>

          </div>

          <br />

          <label className="label">Child´s routine</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g. A 150ml bottle before morning nap at 9.30 ish" />

          </div>

          <br />

          <div className="field">

            <label className="label">Child´s current interests</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Loves music and our dog Pikachu" />

            </div>

          </div>

          <br />

          <label className="label">Parent´s expectations and aspiration for child</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g. I want my child to be happy and my mind at peace for me to focus with work" />

          </div>

          <br />

          <div className="field">

            <label className="label">How to include us in the child´s routine during working hours?</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Before Tim´s afternoon nap, I´ll come to give him a cuddle and a kiss. " />

            </div>

          </div>

          <br />

          <label className="label">Important information about our child</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g Allergies, special cuddly or morning ritual?" />

          </div>

          <br />

          <div className="field">

            <label className="label">Days and duration of contract</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Monday, Wednesday, Thursday, 9.00 am to 5.00pm" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">What we like to do as a family?</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Going to the park" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Family Values</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. Kindness, respect and sharing quality time together" />

            </div>

          </div>

          <br />

          <div className="field">

            <label className="label">Location</label>

            <div className="control">

              <input className="input is-primary" type="text" placeholder="e.g. New Lynn, Auckland, 0600" />

            </div>

          </div>

        </fieldset>

        <br />

        <div className="field">

          <label className="label">Contact Information</label>

          <div className="control">

            <input className="input is-primary" type="text" placeholder="e.g. email? phone number?" />

          </div>

        </div>

        <br />

        <div className="field is-grouped is-grouped-centered">

          <p className="control">

            <a className="button is-primary"><strong>Update Profile</strong></a>

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
