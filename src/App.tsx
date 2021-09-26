import React, { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import styled from "styled-components";
import Home from "./pages/Home/Home";

//components
import Navbar from "./components/Navbar/Navbar";

const { Header, Footer, Content } = Layout;

const HeaderView = styled(Header)`
  display: flex;
  flex-direction: row;
  background: black;
  height: auto;
`;

const ContentView = styled(Content)`
  background: black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const App: FC = () => (
  <div className="App">
    <Layout>
      <HeaderView>
        <Navbar />
      </HeaderView>
      <ContentView>
        <Home />
      </ContentView>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
