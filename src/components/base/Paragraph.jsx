import React, { Component } from "react";
import { connectStyles } from "utils/styles.js";
import styles from "./Paragraph.less";

class Paragraph extends Component {
  render() {
    const { classes } = this.props;

    return (
      <p className={classes.paragraph()}>{this.props.children}</p>
    );
  }
};

Paragraph = connectStyles(Paragraph, styles);

export default Paragraph;
