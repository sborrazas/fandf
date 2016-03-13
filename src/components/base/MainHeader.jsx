import React, { Component } from "react";
import { useSheet } from "../../jss.js";
import domClasses from "../../utils/dom/classes.js";

class Header extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <header className={classes.base}>{this.props.children}</header>
    );
  }
};

Header = useSheet(Header, {
  base: {
    "background": "rgb(89, 100, 111)",
    "border-bottom": "1px solid rgb(63, 68, 84)",
    "height": "80px",
    "padding": "0 30px"
  }
});

class Title extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <h1 className={classes.base}>{this.props.children}</h1>
    );
  }
};

Title = useSheet(Title, {
  base: {
    "color": "rgb(252, 252, 252)",
    "float": "left",
    "font-size": "20px",
    "letter-spacing": "0.3em",
    "line-height": "80px",
    "text-transform": "uppercase"
  }
});

class Nav extends Component {
  render() {
    const { classes } = this.props.sheet;

    return (
      <nav className={classes.base}>{this.props.children}</nav>
    );
  }
};

Nav = useSheet(Nav, {
  base: {
    "float": "right"
  }
});

class NavItem extends Component {
  constructor(props) {
    super(props);

    this._click = this._click.bind(this);
  }
  render() {
    const { classes } = this.props.sheet;
    const className = domClasses.set({
      [classes.base]: true,
      [classes.link]: this.props.onClick,
      [classes.active]: this.props.active
    });

    if (this.props.onClick) {
      return (
        <span onClick={this._click} className={className}>
          {this.props.children}
        </span>
      );
    }
    else {
      return (
        <span className={className}>{this.props.children}</span>
      );
    }
  }
  _click(event) {
    if (this.props.onClick) {
      event.preventDefault();
      this.props.onClick();
    }
  }
};

NavItem = useSheet(NavItem, {
  base: {
    "float": "left",
    "line-height": "80px",
    "padding": "0 15px"
  },
  link: {
    "color": "rgba(252, 252, 252, 0.6)",
    "cursor": "pointer",
    "font-weight": "bold",
    "font-size": "12px",
    "text-decoration": "none",
    "text-transform": "uppercase",
    "transition": [
      "color 0.3s"
    ],
    "&:hover": {
      "color": "rgba(252, 252, 252, 1)"
    }
  },
  active: {
    "color": "rgba(252, 252, 252, 0.9)"
  }
});

export default Header;
export { Title, Nav, NavItem };
