import React, { Component } from "react";
import {
  Link as RouterLink,
} from "react-router";
import styles from "./Button.less";
import { connectStyles } from "utils/styles.js";

class Button extends Component {
  render() {
    const { classes, disabled, to, external } = this.props;
    const className = classes.button({
      disabled: disabled,
    });

    if (to) {
      if (external) {
        return (
          <a href={to} target="_blank" className={className}>
            {this.props.children}
          </a>
        );
      }
      else {
        return (
          <RouterLink to={to} className={className}>
            {this.props.children}
          </RouterLink>
        );
      }
    }
    else {
      return (
        <button className={className}>
          {this.props.children}
        </button>
      );
    }
  }
}

Button.propTypes = {
  disabled: React.PropTypes.bool,
  external: React.PropTypes.bool,
  to: React.PropTypes.string,
};

Button = connectStyles(Button, styles);

export default Button;
