/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import * as styles from "../styles/navbar.module.css"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          siteMetadata {
            navbar_links {
              title
              path
            }
            title
          }
        }
      }
    }
  `)
  const site_links = data.allSite.nodes[0].siteMetadata.navbar_links
  const website_title = data.allSite.nodes[0].siteMetadata.title
  // console.log("test data")
  // console.log(data.allSite.nodes[0].siteMetadata.navbar_links)
  // console.log(site_links)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div className={styles.nav_container}>
        <div className={styles.nav_title_container}>
          <Link style={{ textDecorationLine: "none", color: "black" }} to="/">
            {website_title}
          </Link>{" "}
        </div>
        <div className={styles.nav_links_container}>
          {site_links.map(x => {
            return (
              <div>
                <Link className={styles.nav_links} key={x.path} to={x.path}>
                  {x.title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Navbar

//  export const query = graphql``
