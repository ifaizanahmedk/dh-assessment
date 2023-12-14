import React from "react";
import PropTypes from "prop-types";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Checkbox,
  ForgotPassword,
  Form,
  FormItem,
  FormTitle,
  Input,
  StyledButton,
} from "./styled";
import { Paragraph } from "src/theme/typography";

const LoginForm = ({ onLogin }) => {
  // const success = () => {
  //   messageApi.open({
  //     type: "success",
  //     content: "Login Successful.",
  //   });
  // };

  // const error = () => {
  //   messageApi.open({
  //     type: "error",
  //     content: "Login Failed.",
  //   });
  // };

  const onFinish = (values) => {
    onLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormTitle>DH App</FormTitle>
      <Paragraph>Login to the Dashboard</Paragraph>
      <FormItem
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </FormItem>
      <FormItem
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </FormItem>
      <ForgotPassword>Forgot password?</ForgotPassword>
      <FormItem name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </FormItem>
      <StyledButton
        type="primary"
        htmlType="submit"
        className="login-form-button"
      >
        LOGIN
      </StyledButton>
    </Form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
