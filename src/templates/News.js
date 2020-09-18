import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NewsTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wpgraphql.post.title} description={data.wpgraphql.post.excerpt} />
    <h1>{data.wpgraphql.post.title}</h1>
    <p>
      Written on {data.wpgraphql.post.date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: data.wpgraphql.post.content }} />
  </Layout>
)
export default NewsTemplate
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        excerpt
        date
      }
    }
  }
`