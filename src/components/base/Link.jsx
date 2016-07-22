import React, { Component } from "react";
import {
  Link as RouterLink,
} from "react-router";
import styles from "./Link.less";
import { connectStyles } from "utils/styles.js";

class Link extends Component {
  render() {
    const { classes, external, secondary } = this.props;
    const className = classes.link({
      secondary: secondary,
    });

    if (external) {
      return (
        <a className={className} href={this.props.to} target="_blank">
          {this.props.children}
        </a>
      );
    }
    else {
      return (
        <RouterLink className={className} to={this.props.to}>
          {this.props.children}
        </RouterLink>
      );
    }
  }
}

Link.propTypes = {
  external: React.PropTypes.bool,
  secondary: React.PropTypes.bool,
};

Link = connectStyles(Link, styles);

export default Link;
