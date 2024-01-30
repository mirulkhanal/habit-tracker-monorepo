import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
const MenuContainer = styled.div`
  /* border: 1px solid red; */
  /* font-size: 1.2rem; */
  display: flex;
  flex: 0.5;
  & > * {
    margin: 0 1rem;
  }
`;

const MenuItem = styled(Link)`
  color: var(--primarygray);
  text-decoration: none;
  display: flex;
  align-items: center;

  & > svg {
    margin: 10px 0 0 1px;
    font-size: 0.7rem;
    transition: transform 0.5s ease-in-out;
  }

  &:hover svg {
    transform: rotate(-90deg);
  }
`;
const NavbarMenu = () => {
  return (
    <MenuContainer>
      <MenuItem to="/app">
        App <AiOutlineCaretDown />
      </MenuItem>
      <MenuItem to="/resources">
        Resources <AiOutlineCaretDown />
      </MenuItem>

      <MenuItem to="/">
        Pro+ <AiOutlineCaretDown />
      </MenuItem>

      <MenuItem to="/">
        Pricing <AiOutlineCaretDown />
      </MenuItem>
    </MenuContainer>
  );
};

export default NavbarMenu;
