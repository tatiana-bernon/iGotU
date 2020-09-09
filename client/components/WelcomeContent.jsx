import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeContent = () => {
  return (

    <>

      <section className="section">

        <div className="container">

          <h1 className="title has-text-centered ">Haere mai, Welcome to</h1>

          <h2 className="has-text-centered content is-large "><strong>iGotU !</strong></h2>

        </div>

        <div className="subtitle has-text-centered content is-medium">

          <p>
            Start your journey with us by kindly selecting your prefered user profile option
          </p>

        </div>

      </section>

      <section className="section">

        <div className="field is-grouped is-grouped-centered">

          <p className="control">
            <Link to="/FormParent">
              <button className="button is-medium is-primary is-outlined"><strong>I am a parent</strong></button>
            </Link>
          </p>

          <p className="control">
            <Link to="/FormTeacher">
              <button className="button is-medium is-primary is-outlined"><strong>I am a teacher</strong></button>
            </Link>
          </p>

        </div>

      </section>

      <section className="section has-background-primary-light">

        <div className="container">

          <div className="columns is-mobile">

            <div className="column">

              <figure className="image is-4by3"><img src="../Images/image 1.jpeg" /></figure>

            </div>

            <div className="column">

              <figure className="image is-4by3"><img src="../Images/image 2.jpg" /></figure>

            </div>

            <div className="column">

              <figure className="image is-4by3"><img src="../Images/image 3.jpg" /></figure>

            </div>

            <div className="column">

              <figure className="image is-4by3"><img src="../Images/image 4.jpg" /></figure>

            </div>

          </div>

        </div>

      </section>

    </>

  )
}

export default WelcomeContent
