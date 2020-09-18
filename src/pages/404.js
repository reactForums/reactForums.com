import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div id="intro">
      <div class="container">
        <section>
          <header>
            <h2>404: Not Found</h2>
          </header>
          <div class="content">
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <img src='/images/undraw_road_sign_mfpo.svg' alt='404: Not Found' />
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
