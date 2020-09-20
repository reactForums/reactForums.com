import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NewsTemplate = ({ data }) => {
  const { title, excerpt, date, content } = data.wpgraphql.post;
  return (
  <Layout>
    <SEO title={title} description={excerpt} />
    <h1>{title}</h1>
    <p>
      Written on {date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: content }} />
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
      }
    }
  }
`