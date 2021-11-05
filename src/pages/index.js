import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"
import Img from "gatsby-image"

import TwitterIcon from "@material-ui/icons/Twitter"
import { Email, Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons"

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
          linkedin {
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
            <div className={styles.name_div}>
              <div className={styles.fordesktop}>
                {/* for desktop */}
                <div>施貽仁</div>
                <div>Ian Shih (Yi-Jen Shih)</div>
              </div>
              <div className={styles.formobile}>
                {/* for mobile */}
                <div>施貽仁</div>
                <div>Ian Shih</div>
                <div>(Yi-Jen Shih)</div>
              </div>
            

            </div>
            <div className={styles.outter_links_container}>
              <div className={styles.outter_links_div}>
                <a href={`mailto:${data.site.siteMetadata.email}`}>
                <Email />
                  <div>{data.site.siteMetadata.email}</div>
                </a>
              </div>
              <div className={styles.outter_links_div}>
              <a href={outter_links["linkedin"].url} target="_blank">
                <LinkedIn />
                  <div>{outter_links["linkedin"].title}</div>
                </a>
              </div>
              <div className={styles.outter_links_div}>
                <a href={outter_links["twitter"].url} target="_blank">
                <TwitterIcon />
                  <div>{outter_links["twitter"].title}</div>
                </a>
              </div>

              <div className={styles.outter_links_div}>
                <a href={outter_links["github"].url} target="_blank">
                <GitHub />
                  <div>{outter_links["github"].title}</div>
                </a>
              </div>
              <div className={styles.outter_links_div}>
              <a href={outter_links["facebook"].url} target="_blank">
                <Facebook />
                  <div>{outter_links["facebook"].title}</div>
                </a>
              </div>
              <div className={styles.outter_links_div}>
              <a href={outter_links["instagram"].url} target="_blank">
                <Instagram />
                  <div>{outter_links["instagram"].title}</div>
                </a>
              </div>

              <div className={styles.outter_links_div}>
                {/* <Icon className="fas fa-adjust" fontSize="small" /> */}
                <a href={outter_links["medium"].url} target="_blank">
                <FaMedium size="26px" />
                  <div>{outter_links["medium"].title}</div>
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
            
            <div className={styles.section_div} ><h3>Recent Projects</h3><Link to="/tags/project">more...</Link></div>
            <ul>
              {data.projects.nodes.map((n)=>{
                return <li key={n.id} className={styles.blog_li}>
                  <div><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.date}   ${n.frontmatter.title}`}</Link></div>
                  <div><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.title}`}</Link></div>
                  </li>

              })}
            </ul>
            <div className={styles.section_div} ><h3>Recent Blogs</h3><Link to="/blog">more...</Link></div>
            <ul>
              {data.blogs.nodes.map((n)=>{
                return <li key={n.id} className={styles.blog_li}>
                  <div><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.date}   ${n.frontmatter.title}`}</Link></div>
                  <div><Link to={`/blogs/${n.frontmatter.slug}`}>{`${n.frontmatter.title}`}</Link></div>
                  </li>
              })}
            </ul>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
