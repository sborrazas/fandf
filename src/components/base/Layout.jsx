import React, { Component } from "react";
import { useSheet } from "../../jss.js";

class Wrapper extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <div className={classes.base}>{this.props.children}</div>
    );
  }
};

Wrapper = useSheet(Wrapper, {
  base: {
    "max-width": "800px",
    "margin": "0 auto"
  }
});

class Layout extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <div className={classes.base}>{this.props.children}</div>
    );
  }
};

Layout = useSheet(Layout, {
  base: {
    "background": "yellow"
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <div className={classes.base}>
        {this.props.children}
      </div>
    );
  }
};

Header = useSheet(Header, {
  base: {}
});

class Content extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <main className={classes.base}>
        {this.props.children}
      </main>
    );
  }
};

Content = useSheet(Content, {
  base: {}
});

export default Layout;
export { Header, Content, Wrapper };
