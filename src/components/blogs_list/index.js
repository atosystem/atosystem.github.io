/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Card from "@material-ui/core/Card"
import { Chip, Typography } from "@material-ui/core"

import * as styles from "./styles/index.module.css"

// import * as styles from "../styles/navbar.module.css"

const BlogsList = ({ nodes }) => {
  return (
    <>
      <div className={styles.blog_item_card_container}>
        {nodes.map(p => {
          return (
            <div key={p.id} className={styles.blog_item_card}>
              <Link
                to={`/blogs/${p.frontmatter.slug}`}
                style={{ textDecorationLine: "none" }}
              >
                <Card style={{ backgroundColor: "rgba(255,255,255,.8)" }}>
                  {p.frontmatter.thumb ? (
                    <BackgroundImage
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      fluid={p.frontmatter.thumb.childImageSharp.fluid}
                    >
                      <div style={{ padding: 8 }}>
                        <div
                          style={{
                            backgroundColor: "rgba(255,255,255,1)",
                            boxShadow: "0 0 10px 10px #FFF",
                          }}
                        >
                          <Typography variant="h5">
                            {p.frontmatter.title}
                          </Typography>

                          {/* <Img fluid={p.frontmatter.thumb.childImageSharp.fluid} /> */}
                          <p>{p.excerpt}</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignContent: "center",
                          }}
                        >
                          <div>
                            {p.frontmatter.tags.map((t, ind) => {
                              return (
                                <span key={ind} style={{ margin: 2 }}>
                                  <Link
                                    to={`/tags/${t}`}
                                    style={{ textDecorationLine: "none" }}
                                  >
                                    <Chip
                                      style={{
                                        backgroundColor: "rgba(23,34,60,.9)",
                                      }}
                                      size="small"
                                      color="primary"
                                      label={t}
                                    />
                                  </Link>
                                </span>
                              )
                            })}
                          </div>
                          <div>{p.frontmatter.date}</div>
                        </div>
                      </div>
                    </BackgroundImage>
                  ) : null}
                </Card>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BlogsList

//  export const query = graphql``
