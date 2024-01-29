import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  min-height: 3rem;
  position: absolute;
  padding: 0.5rem 0.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.data.color};
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
    background-color: #7ca982;
    padding: 0.5rem;
    border-radius: 12px;
  }

  & > span {
    font-family: 'Quicksand';
    font-size: 30px;
    font-weight: 700;
  }
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoContainer>
        <img src="/images/logo.png" />
        <span>POGO</span>
      </LogoContainer>
    </StyledNavbar>
  );
};

export default Navbar;
