import React from 'react';
import Layout from "../../components/layout/layout"
import LeftSidebar from "../../components/layout/docs/leftSidebar"
import RightSidebar from "../../components/layout/docs/rightSidebar"
import SEO from "../../components/seo"

const Docs = props => {
    const { title, content, documentationContent } = props;
    return (
        <Layout>
            <SEO
            title={title}
            description={content}
            />
            <div id="main">
                <div class="container">
                    <div class="row">
                    <LeftSidebar />
                    <div id="content" class="col-6">
                        <article>
                        <header>
                            <h2 dangerouslySetInnerHTML={{__html: documentationContent.pageHeader}} />
                            <span class="byline">{documentationContent.pageSubtitle}</span>
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        </article>
                    </div>
                    <RightSidebar />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Docs