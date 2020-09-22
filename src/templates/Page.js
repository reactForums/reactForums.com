import React from "react"
import { graphql } from "gatsby"
import About from '../components/pages/about'
import Docs from '../components/pages/docs'
import News from '../components/pages/news'
import Download from '../components/pages/download'
import Default from '../components/pages/default'

const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page;
    const blog = data.wpgraphql.posts;
    const { developerDocs } = data.wpgraphql;
    const { adminDocs } = data.wpgraphql;
    const { title } = data.wpgraphql.page;
    switch (title) {
        case 'About':
          return <About {...page} />
        case 'Docs':
          return <Docs {...page} {...developerDocs} {...adminDocs} />
        case 'News':
          return <News {...page} {...blog}/>
        case 'Download':
          return <Download {...page} />
        default:
          return <Default {...page} />
      }
}
export default PageTemplate

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      posts {
        nodes {
          title
          slug
          excerpt
          date
          author {
            node {
              name
            }
          }
        }
      }
      developerDocs {
        edges {
          node {
            id
            slug
          }
        }
      }
      adminDocs {
        edges {
          node {
            id
            slug
          }
        }
      }
      page(id: $id) {
        title
        content
        aboutContent {
          aboutHeader
          aboutSubtitle
          header
          text
          icon
        }
        documentationContent {
          pageHeader
          pageSubtitle
        }
        downloadContent {
          pageHeader
          versionNumber
          downloadButtonText
          downloadButtonLink
        }
        newsContent {
          pageHeader
          pageSubtitle
        }
      }
    }
  }
`