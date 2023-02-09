import React, { useEffect } from 'react'
import Footer from '../components/Footer'

const About = () => {
  useEffect(()=> {
    document.title = "Newzapp - About"
  }, [])
  return (
    <>
      <img src="https://shivgreenindia.com/assets/img/about-us.gif" alt="about_us" style={{ width: "100%" }} />
      <div className="container text-center ">
        <h1 className="display-2 my-3">Search worldwide news with code</h1>
        <p className='paragraph-font my-5'>U.S. News & World Report is a multifaceted digital media company dedicated to helping consumers, business leaders and policy officials make important decisions in their lives. We use world-class data and technology to publish independent reporting, rankings, journalism and advice that has earned the trust of our readers and users for nearly 90 years. Our platforms on usnews.com include Education, Health, Money, Travel, Cars, News and 360 Reviews.

          We reach more than 40 million people monthly during moments when they are most in need of expert advice and motivated to act on that advice directly on our platforms. Our signature franchises include our “Best” series of consumer guides on colleges, graduate schools, hospitals, diets, cars, financial services and more. These guides provide an easy-to-digest list for consumers to better understand and compare when making their decisions. We continue to publish annual guides of the authoritative Best Colleges and Best Hospitals rankings on our website and in print. And our U.S. News Live flagship conferences highlight important national conversations including Healthcare of Tomorrow and Healthiest Communities.

          We are proud to be one of the first legacy media brands to transform into a purely digital model nearly a dozen years ago. Our diversified business model engages consumers at every point in their decision-making journey and allows our corporate partners to use brand advertising, performance marketing, e-commerce, brand recognition and thought-leadership programs to achieve their business objectives.

          U.S. News is headquartered in Washington, D.C. with advertising, sales and corporate offices in New York and New Jersey. The company is privately owned by Mortimer B. Zuckerman. Our leadership team includes Eric Gertler serving as the Executive Chairman and Chief Executive Officer, William Holiber as the President & Vice Chairman, Kim Castro as the Editor & Chief Content Officer, and Neil Maheshwari as Chief Financial Officer and Chief Operating Officer. Learn more about our leadership.</p>
      </div>
      <div className="container">

          <Footer />
      </div>

    </>
  )
}

export default About
