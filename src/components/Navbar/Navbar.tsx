import React from "react";
import { Button, Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

const NavView = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Navbar = () => {
  return (
    <NavView data-testid="navbar">
      <h1>Test</h1>
      <Button data-testid=" button">Test</Button>
    </NavView>
  );
};

export default Navbar;
