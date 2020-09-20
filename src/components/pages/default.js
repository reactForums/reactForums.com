import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const Default = props => {
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
                    <div id="content" class="col-12">
                        <article>
                        <header>
                            <h2>{title}</h2>
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Default