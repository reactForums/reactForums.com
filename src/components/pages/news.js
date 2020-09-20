import React from 'react';
import Layout from "../../components/layout/layout"
import NewsSidebar from "../../components/layout/news/sidebar.js"
import SEO from "../../components/seo"

const News = props => {
    const { title, content, newsContent } = props;
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
                            <h2>{newsContent.pageHeader}</h2>
                            <span class="byline">{newsContent.pageSubtitle}</span>
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