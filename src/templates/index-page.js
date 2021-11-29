import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import AyalaLand from '../img/property-logos/ayala-land.png'
import AboitizLand from '../img/property-logos/aboitizland.png'
import DoubleDragon from '../img/property-logos/double-dragon.png'
import CenturyProperties from '../img/property-logos/century-properties.png'
import Avida from '../img/property-logos/avida.png'
import Alveo from '../img/property-logos/alveo.png'
import AqwirePayments from '../img/body-images/Aqwire-payments.png'
import AqwireLoans from '../img/body-images/Aqwire-loans.png'
import AqwireListings from '../img/body-images/aqwire-listings.png'
import Quote from '../img/body-images/quote.png'
import Bdo from '../img/Bank-logos/BDO-logo.png'
import Bpi from '../img/Bank-logos/BPI-logo.png'
import Chinabank from '../img/Bank-logos/chinabank-logo.png'
import Eastwest from '../img/Bank-logos/eastwest-logo.png'
import Rcbc from '../img/Bank-logos/RCBC-logo.png'
import Securitybank from '../img/Bank-logos/securitybank-logo.png'
import Ucpb from '../img/Bank-logos/UCPB-logo.png'
import Unionbank from '../img/Bank-logos/Unionbank-logo.png'
import Bangkosentral from '../img/secure-section-logos/Bangkosentral-logo.png'
import Visa from '../img/secure-section-logos/Visa-logo.png'
import Pci from '../img/secure-section-logos/pci-logo.png'
import Mastercard from '../img/secure-section-logos/Mastercard-logo.png'
import Cointelegraph from '../img/Media-logos/The-Cointelegraph.png'
import Entrepreneur from '../img/Media-logos/Entrepreneur.png'
import E27 from '../img/Media-logos/e27.png'
import Businessmirror from '../img/Media-logos/BusinessMirror.png'
import Incsoutheastasia from '../img/Media-logos/Inc-SoutheastAsia.png'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => { 

  const [activeTab, setTab] = useState("PayBills");
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // Initialize all elements with carousel className.
    bulmaCarousel.attach('.carousel', {
      initialSlide: 0,
      slidesToScroll: 1,
      slidesToShow: 1,
      wrapperWidth: 1500,
      infinite: true,
      breakpoints: [{ changePoint: 480, 
                      slidesToShow: 1, 
                      slidesToScroll: 1 
                    }, 
                    { changePoint: 640, 
                      slidesToShow: 2, 
                      slidesToScroll: 2 
                    }, 
                    { changePoint: 768, 
                      slidesToShow: 3, 
                      slidesToScroll: 3 
                    }]
    });

  });




  return (
    <div>
      <section className="hero hero-personal" 
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`
        }}>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-5 is-8-tablet">
                <div className="hero-caption">
                  <h1 className="title">
                    {heading}
                  </h1>
                  <h2 className="subtitle">
                    {subheading}
                  </h2>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-7-widescreen is-9-mobile is-10-tablet">
                <div className="choose-service">

                  <div className="tabs is-boxed is-large" id="tabs">
                    <ul>
                      <li className={activeTab == "PayBills" ? "tabs is-active" : "tabs"}  data-tab="1" onClick={() => setTab("PayBills")}>
                        <a className="first-tab first-option">
                          Pay Bills
                        </a>
                      </li>
                      <li className={activeTab == "Loans" ? "tabs is-active" : "tabs"}  data-tab="2" onClick={() => setTab("Loans")}>
                        <a className="second-tab second-option">
                          Apply for a loan
                        </a>
                      </li>  
                    </ul>
                  </div>

                  <div id="tab-content" className="box" >
                    <div className={activeTab == "PayBills" ? "field is-grouped is-active" : "field is-grouped"} data-content="1">
                      <p className="control is-expanded">
                        <input className="input is-rounded is-large input is-rounded is-hovered is-size-6-tablet searchinput-style" type="text" placeholder="Enter property developer name here" />
                      </p>
                      <p className="control">
                        <a className="button is-inf is-large is-rounded button is-size-6-tablet has-text-weight-semibold is-primary button-color chosefeature-btn ">
                          Go
                        </a>
                      </p>
                    </div>
                    <div className={activeTab == "Loans" ? "field is-grouped is-active" : "field is-grouped"} data-content="2">
                      <p className="control is-expanded">
                        <input className="input is-rounded is-large input is-rounded is-hovered is-size-6-tablet searchinput-style" type="text" placeholder="Enter amount of the loan" />
                      </p>
                      <p className="control">
                        <a className="button is-inf is-large is-rounded button is-size-6-tablet has-text-weight-semibold is-primary button-color chosefeature-btn ">
                          Loan
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box property-logos columns">
              <div class="column is-image ayalaland-image">
                <img src={AyalaLand} alt="AyalaLand" />
              </div>
              <div class="column is-image aboitizland-image">
                <img src={AboitizLand} alt="Aboitizland" />
              </div>
              <div class="column is-image avida-image">
                <img src={Avida} alt="Avida" />
              </div>
              <div class="column is-image doubledragon-image">
                <img src={DoubleDragon} alt="DoubleDragon" />
              </div>
              <div class="column is-image centuryproperties-image">
                <img src={CenturyProperties} alt="CenturyProperties" />
              </div>
              <div class="column is-image alveo-image">
                <img src={Alveo} alt="Alveo" />
              </div>
            </div>
          </div>        
        </div>
    </section>

    <section className="product-intro aqwire-payments-section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h4 className="intro-title">
              Introducing
            </h4>
            <div className="aqwirepayments-spacing">
              <p className="pre-title">AQWIRE Payments</p>
              <h2 className="title">Pay your property <br/>dues, hassle free.</h2>
              <p className="subtitle">Use a wide range of payment options to settle your property dues back home.</p>
            </div>
            <div className="buttons">
              <button className="button is-primary is-rounded">
                Pay Dues
              </button>
              <a href="#" className="button text-underline learn-more is-transparent is-rounded">
                Learn More
              </a>
            </div>
          </div>
          <div className="column is-7 is-offset-1">
            <div class="tabs is-fullwidth">
              <ul>
                <li class="is-active"><a>Credit/Debit Card</a></li>
                <li><a>Paypal</a></li>
                <li><a>Alipay</a></li>
                <li><a>GCash</a></li>
                <li><a>Bank transfer</a></li>
              </ul>
            </div>
            <img src={AqwirePayments} alt="Aqwire Payment Preview" />
          </div>
        </div>
      </div>
    </section>

    <section className="product-intro aqwire-loans-section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="aqwireloans-image is-image">
              <img src={AqwireLoans} alt="AqwireLoans"/>
            </div>
            <span className="orange-circle"></span>
            <span className="violet-circle"></span>
          </div>

          <div className="column is-5 is-offset-1">
            <div className="aqwirepayments-spacing">
              <p className="pre-title">AQWIRE Loans</p>
              <h2 className="title">Applying for a home loan <br/>shouldn't be that hard</h2>
              <p className="subtitle"> Combining both technology and great customer service, <br /> we'll get your home loan applications in no time at no extra cost.</p>
            </div>
            <div className="buttons">
              <button className="button is-primary is-rounded">
                Apply Now
              </button>
              <a href="#" className="button text-underline learn-more is-transparent is-rounded">
                Learn More
              </a>
            </div>
            
            <div className="container columns logo-container">
              {/* bpi */}
              <div className="bpi-logo column is-3 is-image">
                <img src={Bpi} alt="Bpi"/>
              </div>

              {/* unionbank */}
              <div className="unionbank-logo column is-3 is-image">
                <img src={Unionbank} alt="Unionbank"/>
              </div>

              {/* rcbc */}
              <div className="rcbc-logo column is-3 is-image">
                <img src={Rcbc} alt="Rcbc"/>
              </div>

              {/* bdo */}
              <div className="bdo-logo column is-3 is-image">
                <img src={Bdo} alt="Bdo"/>
              </div>
    
            </div>
            
            <div className="container columns logo-container">
              {/* chinabank */}
              <div className="chinabank-logo column is-3 is-image">
                <img src={Chinabank} alt="Chinabank"/>
              </div>

              {/* security bank */}
              <div className="securitybank-logo column is-3 is-image">
                <img src={Securitybank} alt="Securitybank"/>
              </div>

              {/* eastwest */}
              <div className="eastwest-logo column is-3 is-image">
                <img src={Eastwest} alt="Eastwest"/>
              </div>

              {/* upcb */}
              <div className="ucpb-logo column is-3 is-image">
                <img src={Ucpb} alt="Upcb"/>
              </div>

            </div>
          </div>
        </div>
      </div> 
    </section>

    <section className="product-intro aqwire-listing-section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <p className="pre-title">AQWIRE Listing</p>
            <h2 className="title">Find a new home, <br /> Internationally</h2>
            <p className="subtitle"> Dreaming of owning a home abroad? <br /> Get the best international deals at your finger tips.</p>
            <button className=" button is-size-7-mobile is-size-6-tablet is-size-5-fullhd has-text-weight-semibold comingsoon-btn is-primary button-color mr-4 not-clickable" disabled>
              Coming Very Soon!
            </button>
          </div>
          <div className="column is-7 is-offset-1">
            <div className="aqwirelistings-image is-image">
              <img src={AqwireListings} alt="Aqwirelistings"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient qwikwireblue-section">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h6 className="subtitle is-size-7-mobile is-size-6-tablet is-size-5-fullhd is-spaced has-text-weight-normal has-text-white">
              <span className="secure-section-h6">
                You're in good hands
              </span>
            </h6>
            <h1 className="title is-size-4-mobile is-size-3-tablet is-size-3-desktop is-size-2-fullhd is-spaced has-text-weight-bold has-text-white">
              <span className="header">
                Your payments, safe <br/>and secure {/* {mainpitch.description} */}
              </span>
            </h1>
            <h2 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen is-size-5-fullhd not-clickable has-text-white">
              <span className="subheader">
                Capitalize on low hanging fruit to identify a ballpark <br/>value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h2>
          </div>
          <div className="column is-7 is-offset-1">
            <div className="bangkosentral-circle">
              <img src={Bangkosentral} alt="Bangkosentral"/>
            </div>
            <div className="visa-circle">
              <img src={Visa} alt="Visa"/>
            </div>
            <div className="pci-circle">
              <img src={Pci} alt="Pci"/>
            </div>
            <div className="mastercard-circle">
              <img src={Mastercard} alt="Mastercard"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient whispergrey-section testament-section">
      <div className="section">
        <div className="container">
          <div className="content centered-testament">
            <h1 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-2-fullhd is-spaced has-text-weight-bold">
              <span>
                What our customers are saying {/* {mainpitch.description} */}
              </span>
            </h1>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-5-fullhd not-clickable">
              <span className="text-qwikwire-gray">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h3>
          </div>
          
        </div>
      </div> 
    </section>

    <section className="carousel-section whispergrey-section section">
      <div className="container">
        
        <div id="carousel-demo" className="carousel">

          <div id="my-element" className="item-1 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              My client just selected a unit and within 5 minutes, <br/>it's all reserved because of AQWIRE!<br/> It's hassle-free, convenient with minimal transaction fees.   
            </h5>
            <h6 className="title">
              Lelit Pino <br/>Property Specialist, HTLand Inc. 
            </h6>
          </div>

          <div id="my-element" className="item-2 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              AQWIRE is the solution to both clients and developers. <br/>We receive the remittance report in real-time, no need for tracing. <br/>They allow us to expand our market globally.  
            </h5>
            <h6 className="title">
              Maria Cristina Carmen Zuluaga <br/>President/CEO, Landco Pacific Corporation
            </h6>
          </div>
          
          <div id="my-element" className="item-3 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              AQWIRE helps foreign investors, <br/>OFWs, loan business transactions, make transactions a lot easier,<br/> faster, and less problematic.   
            </h5>
            <h6 className="title">
              Ed Totanes <br/>Int’l Property Specialist, Double Dragon Properties
            </h6>
          </div>

          
          <div id="my-element" className="item-4 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              My client just selected a unit and within 5 minutes, <br/>it's all reserved because of AQWIRE!<br/> It's hassle-free, convenient with minimal transaction fees.   
            </h5>
            <h6 className="title">
              Lelit Pino <br/>Property Specialist, HTLand Inc. 
            </h6>
            
          </div>

          <div id="my-element" className="item-5 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              AQWIRE is the solution to both clients and developers. <br/>We receive the remittance report in real-time, no need for tracing. <br/>They allow us to expand our market globally.  
            </h5>
            <h6 className="title">
              Maria Cristina Carmen Zuluaga <br/>President/CEO, Landco Pacific Corporation
            </h6>
          </div>

          <div id="my-element" className="item-6 item-content">
            <img src={Quote} alt="Quote"/>
            <h5 className="subtitle has-text-weight-medium">
              AQWIRE helps foreign investors, <br/>OFWs, loan business transactions, make transactions a lot easier,<br/> faster, and less problematic.   
            </h5>
            <h6 className="title">
              Ed Totanes <br/>Int’l Property Specialist, Double Dragon Properties
            </h6>
          </div>

        </div>
      </div>
    </section>

    <section className="section section--gradient media-section">
      <div className="container">
        <div className="columns">
          <div className="column is-12">
            <h5 className="title">
              As seen on: {/* {mainpitch.description} */}
            </h5>
          </div>
          <div className="box property-logos columns">
            <div className="thecointelegraph-logo column is-image">
              <img src={Cointelegraph} alt="Cointelegraph"/>
            </div>

            <div className="entrepreneur-logo column is-image">
              <img src={Entrepreneur} alt="Entrepreneur"/>
            </div>

            <div className="e27-logo column is-image">
              <img src={E27} alt="E27"/>
            </div>

            <div className="businessmirror-logo column is-image">
              <img src={Businessmirror} alt="Businessmirror"/>
            </div>

            <div className="incsoutheastasia-logo column is-image">
              <img src={Incsoutheastasia} alt="Incsoutheastasia"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient qwikwireblue-section">
      <div className="section">
        <div className="content feedback-content">
          <div className="container">
            <div className="content">
                <h1 className="title is-spaced">
                  <span className="header">
                    Got inquiries or <br/>feedback? {/* {mainpitch.description} */}
                  </span>
                </h1>
                <h3 className="subtitle">
                  <span className="subheader">
                    Capitalize on low hanging fruit to identify a ballpark value <br/>added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
                  </span>
                </h3>
                <button className="button is-rounded contactus-btn">
                  Contact us here
                </button>
            </div>
            <div className="content">
                <span className="firstcircle-inquiry"></span>
                <span className="secondcircle-inquiry"></span>
            </div>
          </div>
        </div>
      </div> 
    </section>
  </div>
  )
}


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`