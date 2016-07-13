/* Base styles. TODO: Import them from somewhere else */
import "components/base/reset.less";
import "components/base/base.less";

import React, { Component } from "react";
import MainHeader, {
  Logo as MainHeaderLogo,
  Title as MainHeaderTitle,
  Nav as MainHeaderNav,
  NavItem as MainHeaderNavItem,
} from "components/base/MainHeader.jsx";
import MainFooter, {
  Title as MainFooterTitle,
  Nav as MainFooterNav,
  NavItem as MainFooterNavItem,
} from "components/base/MainFooter.jsx";
import Layout, {
  Header as LayoutHeader,
  Content as LayoutContent,
  Wrapper as LayoutWrapper,
  Footer as LayoutFooter,
} from "components/base/Layout.jsx";
import Link from "components/base/Link.jsx";
import Button from "components/base/Button.jsx";
import {
  NAME,
  TAGLINE,
  DESCRIPTION,
} from "config/settings.js";

class App extends Component {
  render() {
    return (
      <Layout>
        <LayoutHeader>
          <MainHeader>
            <LayoutWrapper>
              <MainHeaderLogo
                to="/"
                src="/images/logo-white.svg"
                alt="Form & Function logo" />
              <MainHeaderNav>
                <MainHeaderNavItem>
                  <Link to="google.com">hello@fandf.io</Link>
                </MainHeaderNavItem>
                <MainHeaderNavItem>
                  <Link to="google.com">Twitter</Link>
                </MainHeaderNavItem>
                <MainHeaderNavItem>
                  <Link to="google.com">Instagram</Link>
                </MainHeaderNavItem>
              </MainHeaderNav>
              <MainHeaderTitle>{TAGLINE}</MainHeaderTitle>
              <MainHeaderTitle secondary={true}>{DESCRIPTION}</MainHeaderTitle>
            </LayoutWrapper>
          </MainHeader>
        </LayoutHeader>
        <LayoutContent>{this.props.children}</LayoutContent>
        <LayoutFooter>
          <MainFooter>
            <LayoutWrapper>
              <MainFooterTitle>Want to work together? Say hi!</MainFooterTitle>
              <MainFooterNav>
                <MainFooterNavItem>
                  <Link to="google.com">hello@fandf.io</Link>
                </MainFooterNavItem>
                <MainFooterNavItem>
                  <Link to="google.com">Twitter</Link>
                </MainFooterNavItem>
                <MainFooterNavItem>
                  <Link to="google.com">Instagram</Link>
                </MainFooterNavItem>
              </MainFooterNav>
            </LayoutWrapper>
          </MainFooter>
        </LayoutFooter>
      </Layout>
    );
  }
};

export default App;
