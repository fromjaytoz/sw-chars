import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
const { Title } = Typography;

const NavView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Navbar: React.FC = () => {
  return (
    <NavView data-testid="navbar">
      <Title style={{ color: "#ebdc1e", margin: 48 }}>
        Star Wars Character Data w/ Infinite Scroll
      </Title>
    </NavView>
  );
};

export default Navbar;
