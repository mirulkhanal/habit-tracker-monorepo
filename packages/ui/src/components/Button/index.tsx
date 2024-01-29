import React from 'react';
import { ButtonProps } from './_types';
import { css, styled } from 'styled-components';

const ButtonTypeStyles = {
  primary: css`
    background: #7ca982;
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    transition: background 0.4s ease-in-out; // Add transition property
    &:hover {
      background: #ecdfd4;
      color: #71767e;
    }
  `,
  secondary: css`
    background: #2a3d45;
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    transition: background 0.4s ease-in-out; // Add transition property
    &:hover {
      background: #ecdfd4;
      color: #71767e;
    }
  `,
  outline: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
  inverted: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${(props) => props.buttonType && ButtonTypeStyles[props.buttonType]}
`;

const Button: React.FC<ButtonProps> = ({
  buttonType = 'primary',
  children,
  ...props
}) => {
  return (
    <StyledButton {...props} buttonType={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;
