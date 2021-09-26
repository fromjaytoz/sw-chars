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
      <Title style={{ color: "white", margin: 2, whiteSpace: "nowrap" }}>
        Star Wars Characters
      </Title>
    </NavView>
  );
};

export default Navbar;
