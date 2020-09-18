import React from 'react';

const Footer = ({ siteTitle }) => {
    return (
        <section id="footer">
          <div className="container">
              <div className="copyright">
                &copy;2020 <a href="/">{siteTitle}</a>
              </div>
          </div>
        </section>
    )
}

export default Footer