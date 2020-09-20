import React from 'react';
import { Link } from 'gatsby';
import Layout from "../../components/layout/layout"
import NewsSidebar from "../../components/layout/news/sidebar.js"
import SEO from "../../components/seo"
import moment from 'moment/moment'

const News = props => {
    const { title, content, newsContent } = props;
    const posts = props.nodes;
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
                        <div>
                            <ul style={{ listStyle: "none" }}>
                                {posts.map(post => {
                                    return (
                                        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
                                            <Link to={`/news/${post.slug}`} style={{textDecoration: "none"}} >
                                                <h1 style={{ marginBottom: 0 }} >{post.title}</h1>
                                                <p style={{ margin: 0, color: "grey" }}>Written by {post.author.node.name} on {moment(post.date).format(`MMMM D, YYYY`)}</p>
                                                <p dangerouslySetInnerHTML={{__html: post.excerpt}} />
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default News