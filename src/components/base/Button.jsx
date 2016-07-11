import React, { Component } from "react";
import styles from "./Button.less";
import { connectStyles } from "utils/styles.js";

class Button extends Component {
  render() {
    const { classes } = this.props;

    return (
      <button className={classes.button()}>
        {this.props.children}
      </button>
    );
  }
}

Button = connectStyles(Button, styles);

export default Button;
