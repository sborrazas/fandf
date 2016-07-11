import React, { Component } from "react";
import { connectStyles } from "utils/styles.js";
import styles from "./MainHeader.less";

class MainHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.mainHeader()}>{this.props.children}</header>
    );
  }
};

MainHeader = connectStyles(MainHeader, styles);

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
      <nav className={classes.nav()}>{this.props.children}</nav>
    );
  }
};

Nav = connectStyles(Nav, styles);

class NavItem extends Component {
  render() {
    const { classes } = this.props;

    return (<div>{this.props.children}</div>);
    // const className = domClasses.set({
    //   [classes.base]: true,
    //   [classes.link]: this.props.onClick,
    //   [classes.active]: this.props.active
    // });

    // if (this.props.onClick) {
    //   return (
    //     <span onClick={this._click} className={className}>
    //       {this.props.children}
    //     </span>
    //   );
    // }
    // else {
    //   return (
    //     <span className={className}>{this.props.children}</span>
    //   );
    // }
  }
};

NavItem = connectStyles(NavItem, styles);

export default MainHeader;
export { Title, Nav, NavItem };
