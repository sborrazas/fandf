import React, { Component } from "react";
import styles from "./Layout.less";
import { connectStyles } from "utils/styles.js";

class Layout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.layout()}>{this.props.children}</div>
    );
  }
};

Layout = connectStyles(Layout, styles);

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.header()}>
        {this.props.children}
      </div>
    );
  }
};

Header = connectStyles(Header, styles);

class Content extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content()}>
        {this.props.children}
      </main>
    );
  }
};

Content = connectStyles(Content, styles);

export default Layout;
export { Header, Content, };
