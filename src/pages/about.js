import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      {/* This is the children prop: */}
      <p>I am making this by following the Gatsby Tutorial.</p>
      <p>Refreshing Gatsby for a new site.</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage