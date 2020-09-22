import React from 'react';
import { Link } from 'gatsby';

const LeftSidebar = (props) => {
  const docs = props.docs.nodes;
    return (
      <div id="sidebar" class="col-3 col-12-narrower">
        <section>
          <header>
            <h2>Admin Docs</h2>
          </header>
          <ul class="alt">
            {docs.map(doc => (
              <li key={doc.id}><Link to={`/how-to/${doc.slug}`}>{doc.name}</Link></li>
            ))}
          </ul>
        </section>
      </div>

    )
}

export default LeftSidebar