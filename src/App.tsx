import React, { FC } from "react";
import "./App.css";
import { Layout } from "antd";
import styled from "styled-components";

//components
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

const { Header, Footer, Content } = Layout;

const HeaderView = styled(Header)`
  display: flex;
  flex-direction: row;
`;

const ContentView = styled(Content)`
  background: red;
  padding: 20px;
  display: flex;
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
        <Form />
      </ContentView>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
