const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const NewsTemplate = path.resolve("./src/templates/News.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const AdminTemplate = path.resolve("./src/templates/AdminDocs.js")
  const DevTemplate = path.resolve("./src/templates/DevDocs.js")
  const result = await graphql(`
    query postQuery {
        wpgraphql {
            posts {
                nodes {
                    id
                    slug
                }
            }
            pages {
                nodes {
                    id
                    slug
                }
            }
            developerDocs {
              nodes {
                id
                slug
              }
            }
            adminDocs {
              nodes {
                id
                slug
              }
            }
        }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const BlogPosts = result.data.wpgraphql.posts.nodes
  BlogPosts.forEach(post => {
    createPage({
      path: `/news/${post.slug}`,
      component: NewsTemplate,
      context: {
        id: post.id,
      },
    })
  })
  const Pages = result.data.wpgraphql.pages.nodes
    Pages.forEach(page => {
      createPage({
        path: `/${page.slug}`,
        component: PageTemplate,
        context: {
          id: page.id,
        },
      })
    })
  const AdminDocs = result.data.wpgraphql.adminDocs.nodes
    AdminDocs.forEach(doc => {
      createPage({
        path: `/how-to/${doc.slug}`,
        component: AdminTemplate,
        context: {
          id: doc.id,
        },
      })
    })
  const DevDocs = result.data.wpgraphql.developerDocs.nodes
    DevDocs.forEach(doc => {
      createPage({
        path: `/how-it-works/${doc.slug}`,
        component: DevTemplate,
        context: {
          id: doc.id,
        },
      })
    })
}