import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment/moment'

const NewsSidebar = (props) => {
  const dates = [];
  const archive = [];

  props.posts.map(post => {
    return dates.push(moment(post.date).format('MMMM YYYY'))
  })
  const uniqueDates = new Set(dates);

  uniqueDates.forEach(date => {
    return archive.push(date);
  })

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
          {archive.map(date => {
            const slug = date.replace(' ', '-');
            return (
              <li><Link to={`/news/archive/${slug}`}>{date}</Link></li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default NewsSidebar