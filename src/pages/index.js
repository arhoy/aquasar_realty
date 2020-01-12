import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Layout from '../components/layouts/Layout';
import {
  Section,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';

import AboutUs from '../components/home/AboutUs';

import Catering from '../components/home/Catering';
import Contact from '../components/home/Contact';
import Slider from 'react-slick';
import SliderContainer2 from '../components/reusableStyles/slider/SliderContainer2';

import AboutOurFood from '../components/home/AboutOurFood';

const HerosContainer = styled.div`
  z-index: -1;

  display: flex;

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column;
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 92vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    height: 70vh;
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 60vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 40vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    height: 35vh;
  }
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Layout full={true}>
      <Slider {...settings}>
        <SliderContainer2>
          <HerosContainer>
            <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
              <HeroContentContainer>
                <HeroContent></HeroContent>
              </HeroContentContainer>
            </HeroBackgroundImage>
          </HerosContainer>
        </SliderContainer2>
      </Slider>

      <SectionGrey>
        <AboutUs />
      </SectionGrey>
      <Section>
        <AboutOurFood />
      </Section>
      <SectionGrey>
        <Catering />
      </SectionGrey>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
};

export default Home;
