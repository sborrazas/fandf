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
import Tiles, {
  Item as TilesItem,
} from "components/base/Tiles.jsx";
import Section, {
  Item as SectionItem,
  ItemTitle as SectionItemTitle,
} from "components/base/Section.jsx";
import Button from "components/base/Button.jsx";

class Home extends Component {
  render() {
    return (
      <Root>
        <Header><HeaderTitle>Selected work</HeaderTitle></Header>
        <Banner imgSrc="/images/gallery/roam.png">
          <BannerTitle>Roam App</BannerTitle>
          Your favorite place to discover and collect the best travel
          destinations.
          <BannerNav>
            <Button disabled={true}>Coming soon</Button>
          </BannerNav>
        </Banner>
        <Banner imgSrc="/images/gallery/world-news.png">
          <BannerTitle>WorldNews</BannerTitle>
          Enjoy the most popular news of the day curated by the Reddit
          community.
          <BannerNav>
            <Button to="http://news.fandf.io" external={true}>
              Visit site
            </Button>
          </BannerNav>
        </Banner>
        <Banner imgSrc="/images/gallery/pet-finder.png">
          <BannerTitle>PetFinder</BannerTitle>
          Find your lost pet, help lost pet find their owner and help pets
          find a home.
          <BannerNav>
            <Button to="http://petfinder.fandf.io" external={true}>
              Visit site
            </Button>
          </BannerNav>
        </Banner>
        <Header><HeaderTitle>Recent work</HeaderTitle></Header>
        <Tiles>
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
          <TilesItem
            imgSrc="/images/portfolio/shipit.png"
            alt="Ship.it — Crowdsourced Delivery" />
        </Tiles>
        <Section>
          <SectionItem>
            <SectionItemTitle>The way we work</SectionItemTitle>
            Our team is proficient in an array of services that can help elevate
            and empower your company or organization. We work with you to build
            comprehensive, identities and experiences.
          </SectionItem>
          <SectionItem>
            <SectionItemTitle>What we do</SectionItemTitle>
            Branding, Information Architecture, Interface Design, User
            Experience Design, Visual Design, Responsive Design, Development
            Consulting, Front-end Development, iOS Development.
          </SectionItem>
        </Section>
      </Root>
    );
  }
};

export default Home;
