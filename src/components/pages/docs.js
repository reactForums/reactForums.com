import React from 'react';
import Layout from "../../components/layout/layout"
import LeftSidebar from "../../components/layout/docs/leftSidebar"
import RightSidebar from "../../components/layout/docs/rightSidebar"
import SEO from "../../components/seo"

const Docs = props => {
    // const { pageTitle, byline } = props.bylineAbout;
    return (
        <Layout>
            <SEO
            // title={pageTitle}
            description={props.content}
            />
            <div id="main">
                <div class="container">
                    <div class="row">
                    <LeftSidebar />
                    <div id="content" class="col-6">
                        <article>
                        <header>
                            <h2>Test</h2>
                            {/* {(!byline ? "" : <span class="byline">{byline}</span>)} */}
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: props.content }} />
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