import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "./styles/index.module.css"
import Img from "gatsby-image"

import Card from "@material-ui/core/Card"

const BlogDetails = ({ data }) => {
  //   const data = useStaticQuery(graphql`
  //     query BlogsPage($slug : String) {
  //         markdownRemark( frontmatter: {slug:{eq: $slug}}) {
  //             html
  //             frontmatter {
  //                 stack
  //                 title
  //                 featuredImg {
  //                     childImageSharp {
  //                         fluid {
  //                           ...GatsbyImageSharpFluid
  //                         }
  //                     }
  //                 }
  //             }
  //         }
  //     }

  //   `)
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  //    console.log(data)
  // const outter_links = data.site.siteMetadata.outter_links
  return (
    <Layout>
      <Seo title={`Blogs-${title}`} />

      <h2>{`Blogs-${title}`}</h2>
      <div>
        {/* <h2>{stack}</h2> */}
        <div>
          {featuredImg ? (
            <Img fluid={featuredImg.childImageSharp.fluid} />
          ) : null}
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default BlogDetails

export const query = graphql`
  query BlogsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
