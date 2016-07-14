import React, { Component } from "react";
import {
  Link as RouterLink,
} from "react-router";
import styles from "./Link.less";
import { connectStyles } from "utils/styles.js";

class Link extends Component {
  render() {
    const { classes, external } = this.props;

    if (external) {
      return (
        <a className={classes.link()} href={this.props.to} target="_blank">
          {this.props.children}
        </a>
      );
    }
    else {
      return (
        <RouterLink className={classes.link()} to={this.props.to}>
          {this.props.children}
        </RouterLink>
      );
    }
  }
}

Link.propTypes = {
  external: React.PropTypes.bool,
};

Link = connectStyles(Link, styles);

export default Link;
