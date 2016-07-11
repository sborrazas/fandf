/* Base styles. TODO: Import them from somewhere else */
import "components/base/reset.less";
import "components/base/base.less";

import React, { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <Layout>
        <LayoutHeader>
          <MainHeader>
            <MainHeaderTitle>Shopping</MainHeaderTitle>
            <MainHeaderNav>
              <MainHeaderNavItem>
                <Button>
                  Buy now!
                </Button>
              </MainHeaderNavItem>
              <MainHeaderNavItem>
                Cart
              </MainHeaderNavItem>
              <MainHeaderNavItem>
                My account
              </MainHeaderNavItem>
            </MainHeaderNav>
          </MainHeader>
        </LayoutHeader>
        <LayoutContent>Content!</LayoutContent>
      </Layout>
    );
  }
};

export default App;
