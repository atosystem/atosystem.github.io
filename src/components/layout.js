/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "../styles/layout.css"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import BackgroundImage from "gatsby-background-image"

// for codeblock formatting
deckDeckGoHighlightElement()

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      bg_img: file(
        relativePath: { eq: "sun_moon_lake.jpeg" }
        sourceInstanceName: { eq: "images" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      <BackgroundImage
        style={{
          // position: "unset"
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
        fluid={data.bg_img.childImageSharp.fluid}
      >
        <Navbar />
        <div
          style={{
            paddingTop: "80px",
            position: "fixed",
            overflowY: "scroll",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <div
            className="body_container"
            // style={{
            //   // margin: `0 auto`,
            //   maxWidth: 960,
            //   padding: `0 1.0875rem 1.45rem`,
            // }}
          >
            <main>{children}</main>
            <footer
              style={{
                marginTop: `2rem`,
                textAlign: "center",
              }}
            >
              © {new Date().getFullYear()},
              {/* Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a> */}
              By Ian Shih
            </footer>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
