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

const Navbar: React.FC = () => {
  return (
    <NavView data-testid="navbar">
      <Title style={{ color: "#ebdc1e", margin: 2 }}>
        SWAPI Characters, Infinite Scroll
      </Title>
    </NavView>
  );
};

export default Navbar;
