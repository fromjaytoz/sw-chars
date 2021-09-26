import React, { FC } from "react";
import { Button, Layout, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const { Header, Footer, Content } = Layout;
const { Item } = Form;

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
      <Content>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={() => alert("test")}
        >
          <Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Item>
          <Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Item>
          <Item>
            <Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Item>

          <Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Item>
        </Form>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default App;
