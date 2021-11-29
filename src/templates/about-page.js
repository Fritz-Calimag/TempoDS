import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'



import bulmaCollapsible from '@creativebulma/bulma-collapsible';
import Cointelegraph from '../img/Media-logos/The-Cointelegraph.png'
import Entrepreneur from '../img/Media-logos/Entrepreneur.png'
import E27 from '../img/Media-logos/e27.png'
import Businessmirror from '../img/Media-logos/BusinessMirror.png'
import Incsoutheastasia from '../img/Media-logos/Inc-SoutheastAsia.png'
import CompanyOverviewimage from '../img/About-images/overview-image.png'
import VisionMissionimage from '../img/About-images/visionmission-image.png'
import Rayphoto from '../img/team-images/ray-image.png'
import Earvinphoto from '../img/team-images/earvin-image.png'
import Jessephoto from '../img/team-images/jesse-image.png'
import Innophoto from '../img/team-images/inno-image.png'
import Elrossphoto from '../img/team-images/elross-image.png'


export const AboutPageTemplate = ({ 
  title, 
  content, 
  contentComponent,
}) => {
  const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');

  // Loop into instances
  bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
  // Check if current state is collapsed or not
  console.log(bulmaCollapsibleInstance.collapsed());
  });
  const PageContent = contentComponent || Content
  return (
    
    <div className="about-page">
      <section className="hero is-medium hero-personal" >
        <div className="hero-body about-hero">
          <div className="container">
            <div className="columns">
              <div className="column is-10-desktop is-8-tablet">
                <div className="hero-caption">
                  <h1 className="title header has-text-weight-bold not-clickable is-spaced">
                    We are a <br/> 
                    Global Real Estate <br/> 
                    Solution Platform
                  </h1>
                  <h2 className="subtitle subheader is-spaced">
                    Expanding internationally is not easy. That is why we are here to <br/> 
                    help your real estate business connect with your potential clients <br/> 
                    by providing you the essential tools you will need.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gradient aliceblue-section companyoverview-section">
        <div className="companyoverview-container container">
          <div className="content ">
            <div className="companyoverview-spacing">

              <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
                <span className="header">
                  Company Overview
                </span>
              </h2>

              <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen not-clickable">
                <span className="subheader">
                  Leverage agile frameworks to provide a robust synopsis <br/> 
                  for high level overviews. Iterative approaches to <br/> 
                  corporate strategy foster collaborative thinking to <br/> 
                  further the overall value proposition. Organically grow <br/> 
                  the holistic world view of disruptive innovation via <br/> 
                  workplace diversity and empowerment.
                </span>
              </h3>

              <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen not-clickable">
                <span className="subheader">
                  Bring to the table win-win survival strategies to ensure <br/> 
                  proactive domination. At the end of the day, going <br/> 
                  forward, a new normal that has evolved from generation <br/>  
                  X is on the runway heading towards a streamlined cloud <br/> 
                  solution. User generated content in real-time will have <br/> 
                  multiple touchpoints for offshoring.
                </span>
              </h3>

            </div>

            <div className="container button-container is-flex">
              <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color hiring-btn">
                We're hiring!
              </button>
            </div>

            <img src={CompanyOverviewimage} alt="CompanyOverview-image"/>
            <span className="orange-circle"></span>

          </div>
        </div>
      </section>

      <section className="section section--gradient team-section">
        <div className="container team-container">
          <div className="content">
            <h2 className="title is-size-5-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                The AQWIRE Team
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-6-widescreen is-size-5-fullhd not-clickable">
              <span className="subheader text-qwikwire-gray">
                Capitalize on low hanging fruit to identify a ballpark value <br/> added activity to beta test.
              </span>
            </h3>
            <div className="container button-container">
              <button className=" button is-rounded join-btn">
                Join Our Team
              </button>
            </div>
            
            <div className="container columns teamphoto-container">

              <div className="column team-photo">

                <img src={Rayphoto} alt="Ray-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Ray Refundo
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CEO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Earvinphoto} alt="Earvin-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Earvin Ang
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CFO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Jessephoto} alt="Jesse-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Jesse Manalansan
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CTO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Innophoto} alt="Inno-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Inno Maog
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CMO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Elrossphoto} alt="Elross-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Elross Pangue
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CBO
                  </span>
                </h3>

              </div>
    
            </div>



            <div className="container columns teamphoto-container">

              <div className="column team-photo">

                <img src={Rayphoto} alt="Ray-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Ray Refundo
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CEO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Earvinphoto} alt="Earvin-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Earvin Ang
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CFO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Jessephoto} alt="Jesse-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Jesse Manalansan
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CTO
                  </span>
                </h3>

              </div>

              <div className="column team-photo">

                <img src={Innophoto} alt="Inno-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Inno Maog
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CMO
                  </span>
                </h3>

              </div>
              

              <div className="column team-photo">

                <img src={Elrossphoto} alt="Elross-Photo"/>

                <h2 className="title not-clickable">
                  <span className="photo-header">
                    Elross Pangue
                  </span>
                </h2>

                <h3 className="subtitle not-clickable">
                  <span className="photo-subheader text-qwikwire-gray">
                    CBO
                  </span>
                </h3>

              </div>
    
            </div>
            
          </div>
        </div>
      </section>

      <section className="section section--gradient aliceblue-section visionmission-section">
        <div className="visionmission-container container">

          <div className="vision-spacing">
            <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                Vision
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen not-clickable">
              <span className="subheader">
                Leverage agile frameworks to provide a <br/> 
                robust synopsis for high level overviews. <br/> 
                Iterative approaches to corporate strategy <br/> 
                foster collaborative thinking to further the <br/> 
                overall value proposition. Organically grow <br/> 
                the holistic world view of disruptive <br/> 
                innovation via workplace diversity and <br/> 
                empowerment.
              </span>
            </h3>
          </div>

          <div className="mission-spacing">
            <h2 className="title is-size-6-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                Mission
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-7-desktop is-size-6-widescreen not-clickable">
              <span className="subheader">
                Leverage agile frameworks to provide a <br/> 
                robust synopsis for high level overviews. <br/> 
                Iterative approaches to corporate strategy <br/> 
                foster collaborative thinking to further the <br/> 
                overall value proposition. Organically grow <br/> 
                the holistic world view of disruptive <br/> 
                innovation via workplace diversity and <br/> 
                empowerment.
              </span>
            </h3>
          </div>

          <img src={VisionMissionimage} alt="VisionMission-image"/>
          <span className="aqwireblue-circle"></span>

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
      </section>

      <section className="section section--gradient aliceblue-section careers-section">
        <div className="container careers-container">
          <div className="content">
            <h2 className="title is-size-5-mobile is-size-4-tablet is-size-3-desktop is-size-3-widescreen is-size-2-fullhd is-spaced has-text-weight-bold not-clickable">
              <span className="header">
                Careers
              </span>
            </h2>
            <h3 className="subtitle is-family-secondary has-text-weight-normal is-size-7-mobile is-size-6-tablet is-size-6-widescreen is-size-5-fullhd not-clickable">
              <span className="subheader text-qwikwire-gray">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
              </span>
            </h3>

          </div>


          <div id="accordion_second">
            <article className="message">

              <div className="message-header">
                <a className="collapsible-text" href="#collapsible-message-accordion-second-1" data-action="collapse" >Biz Dev</a>
              </div>

              <div id="collapsible-message-accordion-second-1" className="message-body is-collapsible" data-parent="accordion_second" data-allow-multiple="true">
                <div className="message-body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
                  placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                  <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                  sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.
                </div>
                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color applynow-btn">
                  Apply Now
                </button>
              </div>
            </article>

            <article className="message">

              <div className="message-header">
                <a className="collapsible-text" href="#collapsible-message-accordion-second-2" data-action="collapse" >Product Designers</a>
              </div>

              <div id="collapsible-message-accordion-second-2" className="message-body is-collapsible" data-parent="accordion_second" data-allow-multiple="true">
                <div className="message-body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
                  placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                  <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                  sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.
                </div>
                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color applynow-btn">
                  Apply Now
                </button>
              </div>
            </article>

            <article className="message">

              <div className="message-header">
                <a className="collapsible-text" href="#collapsible-message-accordion-second-3" data-action="collapse" >Dev Ops Engineer</a>
              </div>

              <div id="collapsible-message-accordion-second-3" className="message-body is-collapsible" data-parent="accordion_second" data-allow-multiple="true">
                <div className="message-body-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
                  placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
                  <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                  sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.
                </div>
                <button className="button is-size-6 is-size-6-mobile is-size-6-tablet is-size-6-desktop is-size-6-widescreen is-size-5-fullhd has-text-weight-semibold is-primary is-rounded button-color applynow-btn">
                  Apply Now
                </button>
              </div>
            </article>

          </div>
          
        </div>
      </section>


      

      <section className="section section--gradient qwikwireblue-section">
        <div className="section">
          <div className="content feedback-content">
            <div className="container">
              <div className="content">
                  <h1 className="title">
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


AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
