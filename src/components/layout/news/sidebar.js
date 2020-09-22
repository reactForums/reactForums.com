import React from 'react';
import { Link } from 'gatsby';

const NewsSidebar = (props) => {
    return (
        <div id="sidebar" class="col-4 col-12-narrower">
              <section>
                <header>
                  <h2>News & Announcements</h2>
                </header>
                <ul class="alt">
                  {props.posts.map(post => {
                    return (
                      <li><Link to={`/news/${post.slug}`}>{post.title}</Link></li>
                    )
                  })}
                </ul>
              </section>
              <section>
                <header>
                  <h2>Archive</h2>
                </header>
                <ul class="alt">
                  <li><a href="/">May 2020</a></li>
                  <li><a href="/">June 2020</a></li>
                  <li><a href="/">July 2020</a></li>
                  <li><a href="/">August 2020</a></li>
                  <li><a href="/">September 2020</a></li>
                  <li><a href="/">October 2020</a></li>
                  <li><a href="/">November 2020</a></li>
                  <li><a href="/">December 2020</a></li>
                  <li><a href="/">January 2021</a></li>
                </ul>
              </section>
            </div>

    )
}

export default NewsSidebar