import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { AiOutlineLogin } from 'react-icons/ai';
import NavbarMenu from './NavbarMenu';

const StyledNavbar = styled.div`
  min-height: 3rem;
  position: absolute;
  padding: 0.5rem 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.data.color};
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  width: 12%;

  & > img {
    width: 2.5rem;
    background-color: var(--primarygreen);
    padding: 0.5rem;
    border-radius: 12px;
  }

  & > span {
    font-family: 'Quicksand';
    font-size: 30px;
    font-weight: 700;
    color: var(--secondarygray);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoContainer>
        <img src="/images/logo.png" />
        <span>WAVES</span>
      </LogoContainer>
      <NavbarMenu />
      <ButtonContainer>
        <Button buttonType="outline">
          <AiOutlineLogin /> Login
        </Button>
        <Button buttonType="primary">
          Go To Dashboard <span>&rarr;</span>
        </Button>
      </ButtonContainer>
    </StyledNavbar>
  );
};

export default Navbar;
