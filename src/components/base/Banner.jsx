import React, { Component } from "react";
import { connectStyles } from "utils/styles.js";
import styles from "./Banner.less";

class Banner extends Component {
  render() {
    const { classes, imgSrc, alt } = this.props;

    return (
      <section className={classes.banner()}>
        <div className={classes.imgWrapper()}>
          <img className={classes.img()} src={imgSrc} alt={alt} />
        </div>
        {this.props.children}
      </section>
    );
  }
};

Banner.propTypes = {
  alt: React.PropTypes.string.isRequired,
  imgSrc: React.PropTypes.string.isRequired,
};

Banner = connectStyles(Banner, styles);

class Title extends Component {
  render() {
    const { classes } = this.props;

    return (
      <h1 className={classes.title()}>{this.props.children}</h1>
    );
  }
};

Title = connectStyles(Title, styles);

class Nav extends Component {
  render() {
    const { classes } = this.props;

    return (
      <nav className={classes.nav()}>{this.props.children}</nav>
    );
  }
};

Nav = connectStyles(Nav, styles);

export default Banner;
export { Title, Nav, };
