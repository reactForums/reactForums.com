import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import NewsSidebar from "../components/layout/news/sidebar.js"
import moment from 'moment/moment'

const NewsTemplate = ({ data }) => {
  const { title, excerpt, date, content, author } = data.wpgraphql.post;
  const posts = data.wpgraphql.posts.nodes;
  return (
  <Layout>
    <SEO title={title} description={excerpt} />
    <div id="main">
      <div class="container">
        <div class="row">
          <NewsSidebar posts={posts} />
          <div id="content" class="col-8">
            <article>
              <header>
                <h2>{title}</h2>
                <span class="byline">Written by {author.node.name} on {moment(date).format('MMMM D, YYYY')}.</span>
              </header>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </article>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}
export default NewsTemplate

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        excerpt
        date
        author {
          node {
            name
          }
        }
      }
      posts {
        nodes {
          title
          slug
          date
        }
      }
    }
  }
`