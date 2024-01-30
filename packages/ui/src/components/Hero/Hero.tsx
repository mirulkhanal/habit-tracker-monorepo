import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const HeroContainer = styled.div`
  /* border: 1px solid red; */
  max-height: 100%;
  overflow: hidden;
  border-radius: 1px;
  height: 75%;
  position: relative;
`;
const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  object-fit: fill;
  filter: drop-shadow(7px 10px 15px #000000);
  transform: scale(-1, -1);
  bottom: 0;
`;
const WavesContainer = styled.div`
  & :last-child {
    transform: rotate(0deg);
    transition: transform 1.5s ease-in-out;
  }
  & :last-child:hover {
    cursor: pointer;
    transform: rotate(270deg);
  }
`;

const HeroTitle = styled.h1`
  /* border: 1px solid black; */
  width: fit-content;
  color: var(--secondarygray);
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  margin-top: 7.5rem;
  font-size: 3rem;

  & .gradient_box {
    padding: 0 10px;
    color: white;
    background: var(--primaryred);
  }
  & .hero_title {
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
      margin: 0px 10px 0 0;
      font-size: 2rem;
    }
  }
`;
const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        <span className="hero_title">
          <Button buttonType="secondary"> JOIN &rarr;</Button>
          the Wave
        </span>
        <span>
          Build better <span className="gradient_box">habits</span>
        </span>
      </HeroTitle>
      <WavesContainer>
        <HeroImage src="/vectors/wave.svg" style={{ zIndex: 4 }} />
        <HeroImage
          src="/vectors/grey_wave_box.svg
      "
          style={{ zIndex: 3 }}
        />
        <HeroImage src="/vectors/dark_green_wave.svg" style={{ zIndex: 1 }} />
        <HeroImage
          src="/vectors/red_wave_sharp.svg
      "
          style={{ zIndex: 2 }}
        />
        <HeroImage
          src="/images/sun-hd.png"
          style={{
            zIndex: 0,
            width: '20%',
            right: '300px',
            bottom: '100px',
          }}
        />
      </WavesContainer>
    </HeroContainer>
  );
};

export default Hero;
