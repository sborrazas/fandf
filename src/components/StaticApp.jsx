import React, { Component } from "react";
import _ from "lodash";
import {
  RouterContext,
} from "react-router";

class StaticApp extends Component {
  render() {
    const { locals: { stylesheets } } = this.props;
    const routerProps = _.omit(this.props, ["locals"]);

    return (
      <html>
        <head>
          <title>Form & Function — We design. We build. Together.</title>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Sebastian Borrazas, Santiago Alonso" />
          <meta
            name="keywords"
            content="montevideo, uruguay, apps, software, development, design, ux, studio, agency" />
          <meta
            name="description"
            content="We are a small team of creative professionals that are passionate about partnering with purpose-driven businesses and startups to craft unique product solutions." />
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
          { /* TODO: Analytics */ }
        </body>
      </html>
    );
  }
}

export default StaticApp;
