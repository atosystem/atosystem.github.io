import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import BlogsList from "../../components/blogs_list"
import * as styles from "./styles/index.module.css"

import { Chip, Typography, Badge } from "@material-ui/core"
import Search from "../../components/search"
import { SportsRugbySharp } from "@material-ui/icons"

const searchIndices = [{ name: `mywebsite`, title: `mywebsite` }]

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      alltags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
            stack
            title
            tags
            date(formatString: "YYYY-MM-DD")
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          excerpt(pruneLength: 100)
        }
      }
    }
  `)
  // console.log(data)
  // console.log(
  //   data.alltags.group.sort((t1, t2) => t2.totalCount - t1.totalCount)
  // )
  // const outter_links = data.site.siteMetadata.outter_links
  return (
    <Layout>
      <Seo title="Blogs" />
      <h1>Blog Posts </h1>
      <Search indices={searchIndices} />
      <div>
        <span>Popular Tags :</span>
        {data.alltags.group
          .sort((t1, t2) => t2.totalCount - t1.totalCount)
          .slice(0, 5)
          .map((t, ind) => {
            return (
              <span key={ind} style={{ margin: 10 }}>
                <Link
                  style={{ textDecorationLine: "none" }}
                  to={`/tags/${t.fieldValue}`}
                >
                  <Badge
                    badgeContent={t.totalCount > 1 ? t.totalCount : null}
                    color="secondary"
                  >
                    <Chip
                      variant="outlined"
                      size="small"
                      color="primary"
                      label={t.fieldValue}
                    />
                  </Badge>
                </Link>
              </span>
            )
          })}
      </div>
      <BlogsList nodes={data.allMarkdownRemark.nodes} />
    </Layout>
  )
}

export default IndexPage
