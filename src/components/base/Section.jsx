import React, { Component } from "react";
import { connectStyles } from "utils/styles.js";
import styles from "./Section.less";

class Section extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.section()}>{this.props.children}</section>
    );
  }
};

Section = connectStyles(Section, styles);

class Item extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.item()}>{this.props.children}</div>
    );
  }
};

Item = connectStyles(Item, styles);

class ItemTitle extends Component {
  render() {
    const { classes } = this.props;

    return (
      <h2 className={classes.itemTitle()}>{this.props.children}</h2>
    );
  }
};

ItemTitle = connectStyles(ItemTitle, styles);

export default Section;
export { Item, ItemTitle, };
