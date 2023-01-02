import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      {/* This is the children prop: */}
      <p>I am making this by following the Gatsby Tutorial.</p>
      <p>Refreshing Gatsby for a new site.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About me" />

export default AboutPage