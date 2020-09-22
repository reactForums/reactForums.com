import React from 'react';
import { Link } from 'gatsby';

const RightSidebar = (props) => {
    const docs = props.docs.nodes;
    return (
    <div id="sidebar2" class="col-3 col-12-narrower">
      <section>
        <header>
          <h2>Developer Docs</h2>
        </header>
        <ul class="alt">
            {docs.map(doc => (
              <li key={doc.id}><Link to={`/how-it-works/${doc.slug}`}>{doc.name}</Link></li>
            ))}
        </ul>
      </section>
    </div>

    )
}

export default RightSidebar