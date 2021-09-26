import React from "react";
import styled from "styled-components";
import { Input, Checkbox, Button, Form as AForm } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const FormView = styled.div``;
const { Item } = AForm;

const Form = () => {
  return (
    <FormView data-testid="form">
      <AForm
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
      </AForm>
    </FormView>
  );
};

export default Form;
