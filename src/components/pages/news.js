import React from 'react';
import Layout from "../../components/layout/layout"
import NewsSidebar from "../../components/layout/news/sidebar.js"
import SEO from "../../components/seo"

const News = props => {
    const { title, content } = props;
    return (
        <Layout>
            <SEO
            title={title}
            description={content}
            />
            <div id="main">
                <div class="container">
                    <div class="row">
                    <NewsSidebar />
                    <div id="content" class="col-8">
                        <article>
                        <header>
                            <h2>Test</h2>
                            {/* {(!byline ? "" : <span class="byline">{byline}</span>)} */}
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: props.content }} />
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default News