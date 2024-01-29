import React from 'react';
import styled from 'styled-components';
import { PageContainerProps } from './_types';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  padding-top: 3.5rem;
  background-color: ${(props) => props.theme.data.backgroundColor};
  background-image: ${(props) => props.theme.data.backgroundImage};
`;

const PageContainer = ({ children }: PageContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default PageContainer;
