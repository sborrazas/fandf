import React, { Component } from "react";
import { connectStyles } from "utils/styles.js";
import styles from "./Header.less";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.header()}>{this.props.children}</header>
    );
  }
};

Header = connectStyles(Header, styles);

class Title extends Component {
  render() {
    const { classes } = this.props;

    return (
      <h2 className={classes.title()}>{this.props.children}</h2>
    );
  }
};

Title = connectStyles(Title, styles);

export default Header;
export { Title, };
