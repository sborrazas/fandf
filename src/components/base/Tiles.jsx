import React, { Component } from "react";
import styles from "./Tiles.less";
import { connectStyles } from "utils/styles.js";

class Tiles extends Component {
  render() {
    const { classes } = this.props;

    return (
      <ul className={classes.tiles()}>
        {this.props.children}
      </ul>
    );
  }
}

Tiles = connectStyles(Tiles, styles);

class Item extends Component {
  render() {
    const { classes, imgSrc, alt } = this.props;

    return (
      <li className={classes.item()} title={alt}>
        <img className={classes.itemImg()}src={imgSrc} alt={alt} />
      </li>
    );
  }
}

Item.propTypes = {
  alt: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
};

Item = connectStyles(Item, styles);

export default Tiles;
export { Item };
