import React from "react";
import styled from "styled-components";
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
  height: 50px;
  width: 100px;
  border: none;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  background-color: ${(props) =>
    props.color === "yellow" ? theme.color.yellow : theme.color.sand};
  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
