import React, { Component } from "react";
import Root from "components/Root.jsx";
import MainHeader, {
  Title as MainHeaderTitle,
  Nav as MainHeaderNav,
  NavItem as MainHeaderNavItem
} from "components/base/MainHeader.jsx";
import Layout, {
  Header as LayoutHeader,
  Content as LayoutContent,
  Wrapper as LayoutWrapper
} from "components/base/Layout.jsx";
import Button from "components/base/Button.jsx";

class Home extends Component {
  render() {
    return (
      <Root />
    );
  }
};

export default Home;
