import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


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



import Enterprisehero from '../img/hero-images/enterprise-hero.png'
import DashboardTop from '../img/enterprise-images/Dashboard-section-images/first-image.png'
import DashboardBelow from '../img/enterprise-images/Dashboard-section-images/second-image.png'
import DevelopersTop from '../img/enterprise-images/Developers-section-images/first-image.png'
import DevelopersBelow from '../img/enterprise-images/Developers-section-images/second-image.png'
import CasestudiesBuilding from  '../img/enterprise-images/Casestudies-section-images/building-image.png'
import Paymentslogo from '../img/Enterprise-logos/payments.png'
import Homelogo from '../img/Enterprise-logos/home.png'
import Listingslogo from '../img/Enterprise-logos/listings.png'


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="enterprise-page">
    <section className="hero is-medium hero-personal" >
      <div className="hero-body enterprise-hero">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-8-tablet">
              <div className="hero-caption">
                <h1 className="title header has-text-weight-bold chop-chop is-size-3-mobile is-size-3-tablet">
                  {heading}
                </h1>
                <h2 className="subtitle subheader is-size-6-tablet is-size-6-widescreen">
                  {description}
                </h2>
              </div>
            </div>
          </div>
          <div className="container button-container is-flex">
            <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-6-fullhd has-text-weight-semibold is-rounded button-color schedulemeeting-btn">
              Schedule a Meeting
            </button>
          
          </div>

          
          <div className="box is-centered property-logos columns">
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

    <section className="section section--gradient aliceblue-section aqwirepayments-section">
      <div className="aqwirepayments-container container">
        <div class="content ">
          <h4 className="title is-size-4-mobile is-size-4-tablet is-size-4-widescreen is-size-3-fullhd is-spaced mb-6 not-clickable">
            All-in-One Platform {/* {mainpitch.title} */}
          </h4>
          <h5 className="subtitle is-size-4-mobile is-size-4-tablet is-size-4-fullhd is-spaced mb-5 is-family-secondary has-text-weight-normal not-clickable">
            <span className="aqwirepayments-span">
              AQWIRE Payments
            </span>
          </h5>
          <div className="aqwirepayments-spacing">
            <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                Customizable and various <br/> payment options for your <br/> valued customers {/* {mainpitch.description} */}
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen not-clickable">
              <span className="subheader">
                Capitalize on low hanging fruit to identify a ballpark<br/> value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h3>
          </div>
          <div className="container button-container is-flex">
            <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color learnmore-btn">
              Learn More
            </button>
            <p className="text-underline is-family-secondary is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd is-clickable ml-5 mt-3">
              View Demo
            </p>
          </div>
          <img src={AqwirePayments} alt="AqwirePayments" />
          {/* <span class="aqwirepayments-image is-image"></span> */}
          <span className="gold-circle"></span>
        </div>
        <div className="tabs m-0 aqwirepayments-tabs">
          <ul className="is-absolute tabs-position">
            <li class="is-active family-sans-serif has-text-weight-bold">
              <a class="">
                Credit/Debit Card
              </a>
            </li>
            <span className="">
              <li class="family-sans-serif has-text-weight-bold ">
                <a class="">
                  <span className="tabs-margin">
                    Paypal
                  </span>
                </a>
              </li>
            </span>
            <span className="">
              <li class="family-sans-serif has-text-weight-bold ">
                <a class="">
                  <span className="tabs-margin">
                    Alipay
                  </span>
                </a>
              </li>  
            </span>
            <span className="">
              <li class="family-sans-serif has-text-weight-bold ">
                <a class="">
                  <span className="tabs-margin">
                    GCash
                  </span>
                </a>
              </li>  
            </span>
            <span className="">
              <li class="family-sans-serif has-text-weight-bold ">
                <a class="">
                  <span className="tabs-margin">
                    Bank transfer
                  </span>
                </a>
              </li>  
            </span>
          </ul>
        </div>
      </div>
    </section>

    <section className="section section--gradient qwikwireblue-section dashboard-section">
      <div className="content dashboard-content">
        <div className="container">
          <div class="content dashboard-margin">
            <h6 className="subtitle is-size-7-mobile is-size-6-tablet is-size-5-fullhd is-spaced has-text-weight-normal has-text-white">
              <span className="mini-header">
                Enterprise Dashboard
              </span>
            </h6>
            <h1 className="title is-size-4-mobile is-size-3-tablet is-size-3-desktop is-size-2-fullhd is-spaced has-text-weight-bold has-text-white">
              <span className="header">
                Tracking of payment collection shouldn't be complicated. {/* {mainpitch.description} */}
              </span>
            </h1>
            <h2 className="subtitle is-family-secondary has-text-weight-normal is-size-6-widescreen is-size-5-fullhd not-clickable has-text-white">
              <span className="subheader">
                Capitalize on low hanging fruit to identify a ballpark <br/>value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h2>
            <button className="button is-rounded dashboard-btn">
              Learn More
            </button>
          </div>
          <div className="dashboardtop-image is-image">
            <img src={DashboardTop} alt="top-image"/>
          </div>
          <div className="dashboardbottom-image is-image">
            <img src={DashboardBelow} alt="bottom-image"/>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient aliceblue-section developers-section">
      <div className="content developers-content">
        <div className="container">
          <div class="content developers-margin">
            <h6 className="subtitle has-text-weight-bold not-clickable">
              <span className="mini-header">
                Developers
              </span>
            </h6>
            <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                Easy API integrations {/* {mainpitch.description} */}
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd not-clickable">
              <span className="subheader text-qwikwire-gray">
                Capitalize on low hanging fruit to identify a ballpark <br/>value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h3>
            
          </div>
          <div className="developerstop-image is-image">
            <img src={DevelopersTop} alt="top-image"/>
          </div>
          <div className="developersbottom-image is-image">
            <img src={DevelopersBelow} alt="bottom-image"/>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient violet-section tools-section">
      <div className="section">
        <div className="container">
          <div className="content centered-testament">
            <h1 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-2-fullhd is-spaced has-text-weight-bold">
              <span>
                Right tools, Boost revenue {/* {mainpitch.description} */}
              </span>
            </h1>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-5-fullhd not-clickable">
              <span className="text-qwikwire-gray">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h3>
          </div>
          <div className="content">
            <div className="columns testament-columns">
              <div className="column first-testament">

                <div className="payment-logo">
                  <img src={Paymentslogo} alt="payment-logo"/>
                </div>

                <h5 className="title has-text-weight-bold">
                  Payments   
                </h5>

                <h6 className="subtitle">
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.  On low hanging fruit to identify a ballpark value added activity to beta test.
                </h6>

                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color tools-btn">
                  Learn more
                </button>

              </div>

              <div className="column second-testament">

                <div className="home-logo">
                  <img src={Homelogo} alt="home-logo"/>
                </div>
            
                <h5 className="title has-text-weight-bold">
                  Home Loans
                </h5>

                <h6 className="subtitle">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.  On low hanging fruit to identify a ballpark value added activity to beta test.
                </h6>

                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color tools-btn">
                  Learn more
                </button>

              </div>

              <div className="column third-testament">

                <div className="listings-logo">
                  <img src={Listingslogo} alt="listings-logo"/>
                </div>
                
                <h5 className="title has-text-weight-bold">
                  Listings
                </h5>

                <h6 className="subtitle">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.  On low hanging fruit to identify a ballpark value added activity to beta test.
                </h6>

                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color tools-btn">
                  Learn more
                </button>

              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>

    <section className="section section--gradient aliceblue-section casestudies-section">
      <div className="viewcasestudies-container container">
        <div class="content ">
          <div className="aqwirepayments-spacing">
            <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
              We're solving pains in the <br/> Real-Estate Sector {/* {mainpitch.description} */}
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen not-clickable">
              <span className="subheader">
                Capitalize on low hanging fruit to identify a ballpark<br/> value added activity to beta test.{/*This is the variable that can be modified in the admin page-> {subheading} */}
              </span>
            </h3>
          </div>
          <div className="container button-container is-flex">
            <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color viewcasestudies-btn">
              View Case Studies
            </button>
          </div>
        </div>
        <div className="building-image is-image">
          <img src={CasestudiesBuilding} alt="buildings"/>
        </div>
      </div>
    </section>

    <section className="section section--gradient qwikwireblue-section">
      <div className="section">
        <div className="content secure-content">
          <div className="container">
            <div class="content secure-margin">
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
            <div class="content">
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
      </div> 
    </section>

    <section className="section section--gradient aliceblue-section testament-section">
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
          <div className="content">
            <div className="columns testament-columns">
              <div className="column first-testament">
                <div className="quote-logo">
                  <img src={Quote} alt="Quote"/>
                </div>
                <h5 className="subtitle has-text-weight-medium">
                  My client just selected a unit and within 5 minutes, it's all reserved because of AQWIRE! It's hassle-free, convenient with minimal transaction fees.   
                </h5>
                <h6 className="title">
                  Lelit Pino <br/>Property Specialist, HTLand Inc. 
                </h6>
              </div>

              <div className="column second-testament">
                <div className="quote-logo">
                  <img src={Quote} alt="Quote"/>
                </div>
                <h5 className="subtitle has-text-weight-medium">
                  AQWIRE is the solution to both clients and developers. We receive the remittance report in real-time, no need for tracing. They allow us to expand our market globally.  
                </h5>
                <h6 className="title">
                  Maria Cristina Carmen Zuluaga <br/>President/CEO, Landco Pacific Corporation
                </h6>
              </div>

              <div className="column third-testament">
                <div className="quote-logo">
                  <img src={Quote} alt="Quote"/>
                </div>
                <h5 className="subtitle has-text-weight-medium">
                  AQWIRE helps foreign investors, OFWs, loan business transactions, make transactions a lot easier, faster, and less problematic.   
                </h5>
                <h6 className="title">
                  Ed Totanes <br/>Int’l Property Specialist, Double Dragon Properties
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>

    <section className="section section--gradient media-section">
      <div className="content media-content">
        <div className="container">
          <div className="content">
            <h5 className="title">
              As seen on: {/* {mainpitch.description} */}
            </h5>
          </div>
        </div>
        <div className="content columns media-logos">
          <div class="thecointelegraph-logo column is-image">
            <img src={Cointelegraph} alt="Cointelegraph"/>
          </div>

          <div class="entrepreneur-logo column is-image">
            <img src={Entrepreneur} alt="Entrepreneur"/>
          </div>

          <div class="e27-logo column is-image">
            <img src={E27} alt="E27"/>
          </div>

          <div class="businessmirror-logo column is-image">
            <img src={Businessmirror} alt="Businessmirror"/>
          </div>

          <div class="incsoutheastasia-logo column is-image">
            <img src={Incsoutheastasia} alt="Incsoutheastasia"/>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--gradient qwikwireblue-section">
      <div className="section">
        <div className="content feedback-content">
          <div className="container">
            <div class="content">
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
            <div class="content">
                <span className="firstcircle-inquiry"></span>
                <span className="secondcircle-inquiry"></span>
            </div>
          </div>
        </div>
      </div> 
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
