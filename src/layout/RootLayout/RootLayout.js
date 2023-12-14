import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "src/utils/constants/routes";

import { Main } from "./styled";
import { getUserFromLocalStorage } from "src/utils/helper";

const RootLayout = () => {
  const localUser = getUserFromLocalStorage();

  // useEffect(() => {
  //   if (!localUser) {
  //     return <Navigate to={LOGIN_ROUTE} />;
  //   } else {
  //     return <Navigate to={DASHBOARD_ROUTE} />;
  //   }
  // }, [localUser]);

  return (
    <Main>
      {!localUser.isLoggedIn ? (
        <Navigate to={LOGIN_ROUTE} replace />
      ) : (
        <Navigate to={DASHBOARD_ROUTE} replace />
      )}
    </Main>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
