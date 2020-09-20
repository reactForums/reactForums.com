import React from 'react';

const LeftSidebar = () => {
    return (
      <div id="sidebar" class="col-3 col-12-narrower">
        <section>
          <header>
            <h2>Admin Docs</h2>
          </header>
          <ul class="alt">
            <li><a href="/">01. Getting Started</a></li>
            <li><a href="/">02. Administration</a></li>
            <li><a href="/">03. Users</a></li>
            <li><a href="/">04. Forum</a></li>
            <li><a href="/">05. Moderation</a></li>
            <li><a href="/">06. Timeline</a></li>
            <li><a href="/">07. Theming</a></li>
            <li><a href="/">08. Security</a></li>
          </ul>
        </section>
      </div>

    )
}

export default LeftSidebar