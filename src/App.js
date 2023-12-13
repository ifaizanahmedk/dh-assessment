import React, { useState } from "react";
import { message } from "antd";

import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

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
      setLoggedIn(true);
    } else {
      error();
    }
  };

  return (
    <div className="App">
      {contextHolder}
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
