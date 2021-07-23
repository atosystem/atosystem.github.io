import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Img from "gatsby-image"

import TwitterIcon from "@material-ui/icons/Twitter"
import { Email, Facebook, GitHub, Instagram } from "@material-ui/icons"

import { FaMedium } from "@react-icons/all-files/fa/FaMedium"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "head_crop.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        email
        outter_links {
          facebook {
            title
            url
          }
          instagram {
            title
            url
          }
          medium {
            title
            url
          }
          twitter {
            title
            url
          }
          github {
            title
            url
          }
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 5
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}, frontmatter: {tags: {in: "project"}}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          slug
        }
        id
      }
    }
    blogs: allMarkdownRemark(
      limit: 5
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {regex: "/blog/"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
          slug
        }
        id
      }
    }
  }
  
  
  
  `)
  // console.log(data)
  const outter_links = data.site.siteMetadata.outter_links
  return (
    <Layout>
      <Seo title="Home" />

      <div className={styles.profolio_container}>
        <div className={styles.profolio_left}>
          <div className={styles.profolio_left_content}>
            <div className={styles.head_image_cropper}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            <p>施貽仁</p>
            <p>Ian Shih (Yi-Jen Shih)</p>
            <div className={styles.outter_links_container}>
              <div className={styles.outter_links_div}>
                <Email />
                <a href={`mailto:${data.site.siteMetadata.email}`}>
                  {" "}
                  {data.site.siteMetadata.email}
                </a>
              </div>

              <div className={styles.outter_links_div}>
                <TwitterIcon />{" "}
                <a href={outter_links["twitter"].url} target="_blank">
                  {outter_links["twitter"].title}
                </a>
              </div>

              <div className={styles.outter_links_div}>
                <GitHub />{" "}
                <a href={outter_links["github"].url} target="_blank">
                  {outter_links["github"].title}
                </a>
              </div>
              <div className={styles.outter_links_div}>
                <Facebook />{" "}
                <a href={outter_links["facebook"].url} target="_blank">
                  {outter_links["facebook"].title}
                </a>
              </div>
              <div className={styles.outter_links_div}>
                <Instagram />{" "}
                <a href={outter_links["instagram"].url} target="_blank">
                  {outter_links["instagram"].title}
                </a>
              </div>

              <div className={styles.outter_links_div}>
                {/* <Icon className="fas fa-adjust" fontSize="small" /> */}
                <FaMedium size="26px" />{" "}
                <a href={outter_links["medium"].url} target="_blank">
                  {outter_links["medium"].title}
                </a>
              </div>

              {/* <div>
              <GitHub/> {outter_links["github"].title}
            </div> */}
            </div>
          </div>
        </div>
        <div className={styles.profolio_right}>
          <div className={styles.profolio_right_content}>
            <p>
              An undergraduate student studying in Electrical Engineering at
              National Taiwan University
            </p>
            <p>Passionate in music and technology</p>
            
            <div className={styles.section_div} ><h3>Recent Projects</h3>  <Link to="/tags/project">more...</Link></div>
            <ul>
              {data.projects.nodes.map((n)=>{
                return <li key={n.id}><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.date}   ${n.frontmatter.title}`}</Link></li>
              })}
            </ul>
            <div className={styles.section_div} ><h3>Recent Blogs</h3><Link to="/blog">more...</Link></div>
            <ul>
              {data.blogs.nodes.map((n)=>{
                return <li key={n.id}><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.date}   ${n.frontmatter.title}`}</Link></li>
              })}
            </ul>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
