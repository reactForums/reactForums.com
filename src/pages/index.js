import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
	const features = data.wpgraphql.page.homeContent.features;
  const { 
    featureCtaText, 
    featureCtaLink,
    heroHeader,
    heroText,
    header,
    icon,
    text, } = data.wpgraphql.page.homeContent;
	return (
		<Layout>
			<SEO
			title={data.wpgraphql.page.title}
			description={data.wpgraphql.page.content}
			/>
      <div id="intro">
        <div class="container">
          <section>
            <header>
              <h2>{heroHeader}</h2>
            </header>
            <div class="content">
              <p>{heroText}</p>
            </div>
          </section>
        </div>
      </div>
			<div id="main">
				<div className="container">
					<ul className="featured">
						{features.map(feat => (
						<li key={feat.featureName}>
							<span className="pennant"><span className={feat.featureIcon}></span></span>
							<h3>{feat.featureName}</h3>
							<p>{feat.featureText}</p>
						</li>
						))}
					</ul>
					<ul className="actions special">
						<li>
							<a href={`${featureCtaLink}`} className="button alt">{featureCtaText}</a>
						</li>
					</ul>
				</div>
			</div>
        <div id="tweets">
          <div class="container">
            <span class="pennant">
              <span class={`icon brands fa-${icon}`}></span>
            </span>
            <span class="tweet">{header}</span>
            <p dangerouslySetInnerHTML={{__html: text}} />
          </div>
        </div>
		</Layout>)
}
export default IndexPage

export const query = graphql`
  query {
    wpgraphql {
      page(id: "cG9zdDoxNQ==") {
        id
        title
        content
        homeContent {
          heroHeader
          heroText
          features {
            featureIcon
            featureName
            featureText
          }
          featureCtaText
          featureCtaLink
          header
          icon
          text
        }
      }
    }
  }
  
`