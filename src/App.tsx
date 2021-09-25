import React, { FC } from "react";
import { Button, Layout } from "antd";
import styled from "styled-components";
import "./App.css";

const { Header, Footer, Content } = Layout;

const HeaderView = styled(Header)``;
const App: FC = () => (
  <div className="App">
    <Layout>
      <HeaderView>
        Header <Button>Test</Button>
      </HeaderView>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
