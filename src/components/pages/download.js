import React from 'react';
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

const Download = props => {
    const { title, content, downloadContent } = props;
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
                            <h2>{downloadContent.pageHeader}</h2>
                            <span className="byline">{downloadContent.versionNumber}</span>
                            <a 
                            href={`${downloadContent.downloadButtonLink}`} 
                            className="download"
                            >
                                {downloadContent.downloadButtonText}
                            </a>
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

export default Download