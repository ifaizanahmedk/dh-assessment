import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Login from "./containers/Login";
import DashboardLayout from "./layout/DashboardLayout";
import RootLayout from "./layout/RootLayout";
import {
  DASHBOARD_ROUTE,
  LOGIN_ROUTE,
  ROOT_ROUTE,
} from "./utils/constants/routes";
import { ThemeConfig } from "./theme";

import resetCSS from "src/assets/styles/reset.css";

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={ThemeConfig}>
        <Routes>
          <Route path={ROOT_ROUTE} exact element={<RootLayout />} />
          <Route path={DASHBOARD_ROUTE} exact element={<DashboardLayout />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
