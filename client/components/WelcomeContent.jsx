import React from 'react'

const WelcomeContent = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Haere mai, Welcome to</h1>
          <h2 className="subtitle has-text-centered is-size-5">
            <strong>iGotU !</strong>
          </h2>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <button className="button is-primary is-outlined is-grouped">I am a parent</button>
          <br></br>
          <button className="button is-primary is-outlined is-grouped">I am a teacher</button>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-mobile">
            <div className="column">
              <figure className="image is-4by5">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div className="column"><figure className="image is-4by5">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure></div>
            <div className="column"><figure className="image is-4by5">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure></div>
            <div className="column"><figure className="image is-4by5">
              <img src="https://bulma.io/images/placeholders/128x128.png" />
            </figure></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WelcomeContent

