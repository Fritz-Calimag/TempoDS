import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-white.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="navbar-overlay"> 
        <nav
          className="navbar is-transparent my-3"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand navbar-margin">
              <Link to="/" className="navbar-item">
                <img src={logo} alt="Aqwire" style={{ width: '120px' }} />
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered container">
                <Link className="navbar-item navbar-margin has-text-weight-bold" to="/">
                  Personal
                </Link>
                <Link className="navbar-item navbar-margin has-text-weight-bold" to="/enterprise">
                  Enterprise
                </Link>
                <Link className="navbar-item navbar-space navbar-margin has-text-weight-bold" to="/blog">
                  Products
                </Link>
                <Link className="navbar-item navbar-margin has-text-weight-bold" to="/about">
                  About Us
                </Link>
                <Link className="navbar-item navbar-margin has-text-weight-bold" to="/help">
                  Help
                </Link>
                <Link className="navbar-item has-text-weight-bold" to="/contact">
                  Contact Us
                </Link>
              </div>
              {/* <div className="navbar-end has-text-centered">
                <a
                  className="navbar-item"
                  href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={github} alt="Github" />
                  </span> 
                </a>
              </div> */}
            </div>
          
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
