import React, { FC } from "react";
import { Layout } from "antd";

import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const { Header, Footer, Content } = Layout;

const HeaderView = styled(Header)`
  display: flex;
  flex-direction: row;
`;
const App: FC = () => (
  <div className="App">
    <Layout>
      <HeaderView>
        <Navbar />
      </HeaderView>
      <Content></Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
