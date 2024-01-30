import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  /* border: 1px solid red; */
  max-height: 100%;
  overflow: hidden;
  border-radius: 1px;
  /* height: 20%; */
`;
const HeroImage = styled.img`
  background-position: contain;
  /* max-width: 100%; */
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage src="/images/main.jpg" />
    </HeroContainer>
  );
};

export default Hero;
