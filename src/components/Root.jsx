/* Base styles. TODO: Import them from somewhere else */
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
            <MainHeaderLogo
              to="/"
              src="/images/logo-black.svg"
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
          </MainHeader>
        </LayoutHeader>
        <LayoutContent>
          {this.props.children}
        </LayoutContent>
        <LayoutFooter>
          <MainFooter>
            <MainFooterTitle>Want to work together?</MainFooterTitle>
            Send us an email to
            {" "}<Link
              to={`mailto:${ENCODED_EMAIL}`}
              external={true}
              secondary={true}>

              {ENCODED_EMAIL}
            </Link>
            {" "}or reach us in
            {" "}<Link
              to={TWITTER}
              external={true}
              secondary={true}>

              Twitter
            </Link>
            {" "}or
            {" "}<Link
              to={INSTAGRAM}
              external={true}
              secondary={true}>

              Instagram
            </Link>.
            We'd love to chat.
          </MainFooter>
        </LayoutFooter>
      </Layout>
    );
  }
};

export default App;
