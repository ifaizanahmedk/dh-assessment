import React, { useEffect } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

import { ReactComponent as DataExtractionImage } from "src/assets/images/data-extraction.svg";

import LoginForm from "./form";
import { LoginContainer, LoginBox, IllustrationWrapper } from "./styled";
import { DASHBOARD_ROUTE } from "src/utils/constants/routes";
import {
  getUserFromLocalStorage,
  setUserInLocalStorage,
} from "src/utils/helper";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const localUser = getUserFromLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (localUser?.isLoggedIn) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [localUser]);

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login Successful.",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Login Failed.",
    });
  };

  const handleLogin = (values) => {
    const { username, password } = values;
    if (username === "ifaizanahmedk" && password === "12345678") {
      success();
      setUserInLocalStorage({
        isLoggedIn: true,
      });
      navigate(DASHBOARD_ROUTE);
    } else {
      error();
    }
  };

  return (
    <>
      {contextHolder}
      <LoginContainer>
        <LoginBox>
          <IllustrationWrapper>
            <DataExtractionImage />
          </IllustrationWrapper>
          <LoginForm onLogin={handleLogin} />
        </LoginBox>
      </LoginContainer>
    </>
  );
};

export default Login;
