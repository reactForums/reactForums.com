import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const About = props => {
    const { title, content, aboutContent } = props;
    return (
        <Layout>
            <SEO
            title={title}
            description={content}
            />
            <div id="main">
                <div class="container">
                    <div class="row">
                    <div id="content" class="col-12">
                        <article>
                        <header>
                            <h2>{aboutContent.aboutHeader}</h2>
                            <span class="byline">{aboutContent.aboutSubtitle}</span>
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: props.content }} />
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        <div id="tweets">
          <div class="container">
            <span class="pennant">
              <span class={`icon brands fa-${aboutContent.icon}`}></span>
            </span>
            <span class="tweet">{aboutContent.header}</span>
            <p dangerouslySetInnerHTML={{__html: aboutContent.text}} />
          </div>
        </div>
        </Layout>
    )
}

export default About