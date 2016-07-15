import React, { Component } from "react";
import { Link } from "react-router";
import { connectStyles } from "utils/styles.js";
import styles from "./MainHeader.less";
import {
  Wrapper as LayoutWrapper
} from "./Layout.jsx";

class MainHeader extends Component {
  render() {
    const { classes } = this.props;

    return (
      <header className={classes.mainHeader()}>
        <LayoutWrapper>
          {this.props.children}
        </LayoutWrapper>
      </header>
    );
  }
};

MainHeader = connectStyles(MainHeader, styles);

class Logo extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Link to={this.props.to}>
        <img
          src={this.props.src}
          className={classes.logo()}
          alt={this.props.alt} />
      </Link>
    );
  }
};

Logo.propTypes = {
  alt: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
};

Logo = connectStyles(Logo, styles);

class Title extends Component {
  render() {
    const { classes, secondary } = this.props;
    const className = classes.title({
      secondary: secondary,
    });

    if (secondary) {
      return (
        <h2 className={className}>{this.props.children}</h2>
      );
    }
    else {
      return (
        <h1 className={className}>{this.props.children}</h1>
      );
    }
  }
};

Title.propTypes = {
  secondary: React.PropTypes.bool,
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

export default MainHeader;
export { Logo, Title, Nav, NavItem };
