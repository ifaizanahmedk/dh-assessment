import React from "react";

import { ReactComponent as DataExtractionImage } from "assets/images/data-extraction.svg";

import { LoginContainer, LoginBox, IllustrationWrapper } from "./styled";
import LoginForm from "./form";

const Login = ({ onLogin }) => {
  return (
    <LoginContainer>
      <LoginBox>
        <IllustrationWrapper>
          <DataExtractionImage />
        </IllustrationWrapper>
        <LoginForm onLogin={onLogin} />
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
