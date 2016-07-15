import React, { Component } from "react";
import { Link } from "react-router";
import { connectStyles } from "utils/styles.js";
import styles from "./MainFooter.less";
import {
  Wrapper as LayoutWrapper
} from "./Layout.jsx";

class MainFooter extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.mainFooter()}>
        <LayoutWrapper>
          <div className={classes.inner()}>{this.props.children}</div>
        </LayoutWrapper>
      </footer>
    );
  }
};

MainFooter = connectStyles(MainFooter, styles);

class Title extends Component {
  render() {
    const { classes } = this.props;

    return (
      <h1 className={classes.title()}>{this.props.children}</h1>
    );
  }
};

Title = connectStyles(Title, styles);

class Nav extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav()}><ul>{this.props.children}</ul></nav>
    );
  }
};

Nav = connectStyles(Nav, styles);

class NavItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <li className={classes.navItem()}>
        {this.props.children}
      </li>
    );
  }
};

NavItem = connectStyles(NavItem, styles);

export default MainFooter;
export { Title, Nav, NavItem };
