import React, { Component } from "react";
import MainHeader, {
  Title as MainHeaderTitle,
  Nav as MainHeaderNav,
  NavItem as MainHeaderNavItem
} from "./base/MainHeader.jsx";
import Layout, {
  Header as LayoutHeader,
  Content as LayoutContent,
  Wrapper as LayoutWrapper
} from "./base/Layout.jsx";
import Button from "./base/Button.jsx";

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
