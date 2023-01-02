import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* This is the children prop: */}
      <p>Hi there! I am the proud creator of this site, which I built with Gatsby.</p>
      <p>Here is some more text.</p>
      <StaticImage
        alt="Loen, summer, view over fjords"
        src="../images/norway_loen_small_1.jpg"
      />
    </Layout>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage


