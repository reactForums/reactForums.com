import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const DevTemplate = ({ data }) => {
    const { title, content } = data.wpgraphql.post;
  return (
  <Layout>
    <SEO
      title={title}
      description={content}
    />
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Layout>
)}
export default DevTemplate

// export const query = graphql`
//   query($id: ID!) {
//     wpgraphql {
//       post(id: $id) {
//         title
//         content
//       }
//     }
//   }
// `