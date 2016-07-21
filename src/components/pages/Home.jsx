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
import Banner, {
  Title as BannerTitle,
  Nav as BannerNav,
} from "components/base/Banner.jsx";
import Header, {
  Title as HeaderTitle,
} from "components/base/Header.jsx";
import Paragraph from "components/base/Paragraph.jsx";
import Button from "components/base/Button.jsx";

class Home extends Component {
  render() {
    return (
      <Root>
        <Header><HeaderTitle>Selected work</HeaderTitle></Header>
        <Banner
          imgSrc="/images/portfolio/roam.png"
          alt="Roam">

          <BannerTitle>Roam App</BannerTitle>
          Your favorite place to discover and collect the best travel
          destinations.
          <BannerNav>
            <Button disabled={true}>Coming soon</Button>
          </BannerNav>
        </Banner>
        <Banner
          imgSrc="/images/portfolio/worldnews.png"
          alt="WorldNews">

          <BannerTitle>WorldNews</BannerTitle>
          Enjoy the most popular news of the day curated by the Reddit
          community.
          <BannerNav>
            <Button to="http://news.fandf.io" external={true}>
              Visit site
            </Button>
          </BannerNav>
        </Banner>
        <Banner
          imgSrc="/images/portfolio/petfinder.png"
          alt="Petfinder">

          <BannerTitle>PetFinder</BannerTitle>
          Find your lost pet, help lost pet find their owner and help pets
          find a home.
          <BannerNav>
            <Button to="http://petfinder.fandf.io" external={true}>
              Visit site
            </Button>
          </BannerNav>
        </Banner>
        <Header><HeaderTitle>The way we work</HeaderTitle></Header>
        <Paragraph>
          Our team is proficient in an array of services that can help elevate
          and empower your company or organization. We work with you to build
          comprehensive, identities and experiences.
        </Paragraph>
        <Header><HeaderTitle>What we do</HeaderTitle></Header>
        <Paragraph>
          Branding, Information Architecture, Interface Design, User
          Experience Design, Visual Design, Responsive Design, Development
          Consulting, Front-end Development, iOS Development.
        </Paragraph>
      </Root>
    );
  }
};

export default Home;
