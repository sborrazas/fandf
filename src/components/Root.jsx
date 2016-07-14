/* Base styles. TODO: Import them from somewhere else */
import "components/base/reset.less";
import "components/base/base.less";

import React, { Component } from "react";
import htmlEncoder from "utils/htmlEncoder.js";
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
  SOCIAL,
} from "config/settings.js";

const { TWITTER, INSTAGRAM, EMAIL, } = SOCIAL;
const ENCODED_EMAIL = htmlEncoder(EMAIL);

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
                  <Link to={`mailto:${ENCODED_EMAIL}`} external={true}>
                    {ENCODED_EMAIL}
                  </Link>
                </MainHeaderNavItem>
                <MainHeaderNavItem>
                  <Link to={TWITTER} external={true}>Twitter</Link>
                </MainHeaderNavItem>
                <MainHeaderNavItem>
                  <Link to={INSTAGRAM} external={true}>Instagram</Link>
                </MainHeaderNavItem>
              </MainHeaderNav>
              <MainHeaderTitle>{TAGLINE}</MainHeaderTitle>
              <MainHeaderTitle secondary={true}>{DESCRIPTION}</MainHeaderTitle>
            </LayoutWrapper>
          </MainHeader>
        </LayoutHeader>
        <LayoutContent>
          <LayoutWrapper>
            {this.props.children}
          </LayoutWrapper>
        </LayoutContent>
        <LayoutFooter>
          <MainFooter>
            <LayoutWrapper>
              <MainFooterTitle>Want to work together? Say hi!</MainFooterTitle>
              <MainFooterNav>
                <MainFooterNavItem>
                  <Link to={`mailto:${ENCODED_EMAIL}`} external={true}>
                    {ENCODED_EMAIL}
                  </Link>
                </MainFooterNavItem>
                <MainFooterNavItem>
                  <Link to={TWITTER} external={true}>Twitter</Link>
                </MainFooterNavItem>
                <MainFooterNavItem>
                  <Link to={INSTAGRAM} external={true}>Instagram</Link>
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
