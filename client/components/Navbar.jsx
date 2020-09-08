import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#" />
          <img src="../Images/iGotU.png" width="112" height="28"/>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
      </a>

            <a className="navbar-item">
              About Us
      </a>

            {/* <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  More
        </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    About
          </a>
                  <a class="navbar-item">
                    Jobs
          </a>
                  <a class="navbar-item">
                    Contact
          </a>
                  <hr class="navbar-divider">
                    <a class="navbar-item">
                      Report an issue
          </a>
        </div> */}
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
              <strong>Log in</strong>
          </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar