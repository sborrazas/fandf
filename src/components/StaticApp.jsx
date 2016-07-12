import React, { Component } from "react";
import _ from "lodash";
import {
  RouterContext,
} from "react-router";
import {
  NAME,
  TAGLINE,
  DESCRIPTION,
  KEYWORDS,
  AUTHORS,
} from "config/settings.js";

const ANALYTICS_CODE = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80717786-1', 'auto');
  ga('send', 'pageview');
`;

class StaticApp extends Component {
  render() {
    const { locals: { stylesheets } } = this.props;
    const routerProps = _.omit(this.props, ["locals"]);

    return (
      <html>
        <head>
          <title>{NAME} — {TAGLINE}</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content={AUTHORS} />
          <meta name="keywords" content={KEYWORDS} />
          <meta name="description" content={DESCRIPTION} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-32x32.png"
            sizes="32x32" />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon-16x16.png"
            sizes="16x16" />
          <link
            rel="mask-icon"
            href="/images/favicon/safari-pinned-tab.svg"
            color="#5bbad5" />

          <meta name="theme-color" content="#ffffff" />

          {
            stylesheets.map((stylesheetPath) => {
              return (
                <link
                  key={stylesheetPath}
                  href={stylesheetPath}
                  rel="stylesheet" />
              );
            })
          }
        </head>
        <body>
          <RouterContext {...routerProps} />
          <script dangerouslySetInnerHTML={{ __html: ANALYTICS_CODE }} />
        </body>
      </html>
    );
  }
}

export default StaticApp;
