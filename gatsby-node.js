/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const blogPostTemplate = path.resolve("src/templates/blog-details.js")
  const tagTemplate = path.resolve("src/templates/blog-tags.js")
  const { data } = await graphql(`
    {
      postsRemark: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  const posts = data.postsRemark.nodes
  posts.forEach(node => {
    actions.createPage({
      path: "/blogs/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/blog-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
  // Extract tag data from query
  const tags = data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
