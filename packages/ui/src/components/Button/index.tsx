import React from 'react';
import { ButtonProps } from './_types';
import { css, styled } from 'styled-components';
// Gray: #71767e
const ButtonTypeStyles = {
  primary: css`
    background: var(--primarygreen);
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 1px;
    font-size: 1.1rem;
    color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    transition: background 0.4s ease-in-out; // Add transition property
    &:hover {
      background: var(--creamwhite);
      color: var(--primarygray);
    }
  `,
  secondary: css`
    background: var(--secondarygray);
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    border-radius: 1px;
    font-size: 1.1rem;
    color: white;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    transition: background 0.4s ease-in-out; // Add transition property
    &:hover {
      background: var(--creamwhite);
      color: var(--primarygray);
    }
  `,
  outline: css`
    color: #000;
    padding: 0.5rem 1.5rem;
    background: transparent;
    outline: none;
    border: 1px solid var(--primarygray);
    border-radius: 1px;
    font-size: 1.1rem;
    color: var(--primarygray);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
    transition: all 0.4s ease-in-out; // Add transition property
    &:hover {
      border: 1px solid transparent;
      border-right-color: var(--creamwhite);
      color: white;
      background-color: var(--primarygreen);
    }
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
