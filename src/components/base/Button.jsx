import React, { Component } from "react";
import { useSheet } from "../../jss.js";
import domClasses from "../../utils/dom/classes.js";

class Button extends Component {
  constructor(props) {
    super(props);
    this._click = this._click.bind(this);
  }
  render() {
    const { classes } = this.props.sheet;
    const className = domClasses.set({
      [classes.base]: true,
      [classes.active]: this.props.active,
      [classes.minimal]: this.props.minimal
    });

    return (
      <button className={className} onClick={this._click}>
        {this.props.children}
      </button>
    );
  }
  _click(event) {
    if (this.props.onClick) {
      event.preventDefault();
      this.props.onClick();
    }
  }
};

Button = useSheet(Button, {
  "base": {
    "background": "rgb(137, 149, 161)",
    "border": "2px solid rgba(255, 255, 255, 0.2)",
    "border-radius": "3px",
    "box-shadow": "0px 2px 0px rgba(0, 0, 0, 0.15)",
    "color": "rgb(252, 252, 252)",
    "cursor": "pointer",
    "display": "inline-block",
    "font-size": "14px",
    "font-weight": "bold",
    "line-height": "20px",
    "min-width": "120px",
    "outline": "none",
    "padding": "8px 16px",
    "position": "relative",
    "text-align": "center",
    "text-decoration": "none",
    "transition": [
      "background 0.3s"
    ],
    "white-space": "nowrap",
    "vertical-align": "middle",
    "&:hover, &:active": {
      "background": "rgba(137, 149, 161, 0.8)",
    },
    "&:active": {
      "top": "1px"
    }
  },
  "active": {
    "border-color": "rgb(255, 233, 124)",
    "box-shadow": "none"
  },
  "minimal": {
    "border-width": "4px",
    "box-shadow": "none",
    "min-width": "60px"
  }
});

export default Button;
