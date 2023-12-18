import React from "react";
import styled, { css } from "styled-components";
import theme from "../../styles/Theme";

type Props = {
  children: string;
  onClick?: () => void;
  color?: string;
};

const Button = ({ onClick, children, color }: Props) => {
  return (
    <StBtn onClick={onClick} color={color}>
      {children}
    </StBtn>
  );
};

export default Button;

const StBtn = styled.button`
  min-height: 40px;
  min-width: 80px;
  border: none;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  ${(props) => {
    switch (props.color) {
      case "sand":
        return css`
          background-color: ${theme.color.sand};
          color: black;
        `;
      default:
        return css`
          background-color: ${theme.color.grey};
          color: white;
        `;
    }
  }}

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
