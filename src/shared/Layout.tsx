import React, { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import theme from "../styles/Theme";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <StHeader>
        <span>Hyewon's To do List 📑</span>
        <span>TypeScript</span>
      </StHeader>
      <StLayout>{children}</StLayout>
      <StFooter>
        <span>Hyewon's To do List &copy; All right reserved</span>
      </StFooter>
    </>
  );
};

export default Layout;

const StHeader = styled.header`
  background-color: ${theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  height: 60px;
  & span {
    margin: 0px 20px;
  }
`;

const StFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
`;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 88vh;
`;
