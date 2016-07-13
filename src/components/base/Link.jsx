import React, { Component } from "react";
import {
  Link as RouterLink
} from "react-router";
import styles from "./Link.less";
import { connectStyles } from "utils/styles.js";

class Link extends Component {
  render() {
    const { classes } = this.props;

    return (
      <RouterLink className={classes.link()} to={this.props.to}>
        {this.props.children}
      </RouterLink>
    );
  }
}

Link = connectStyles(Link, styles);

export default Link;
