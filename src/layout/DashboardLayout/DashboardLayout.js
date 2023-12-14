import React from "react";
import { Breadcrumb, DatePicker, Layout, Menu, theme as AntTheme } from "antd";
import { getUserFromLocalStorage } from "src/utils/helper";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "src/utils/constants/routes";
import { SiteBrandName } from "./styled";
import Dashboard from "src/containers/Dashboard";

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const DashboardLayout = (props) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = AntTheme.useToken();

  const localUser = getUserFromLocalStorage();
  if (!localUser.isLoggedIn) {
    return navigate(LOGIN_ROUTE);
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <SiteBrandName className="demo-logo">DH APP</SiteBrandName>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "flex-end",
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>

        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Dashboard />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        DH Dashboard ©2023 Created by Faizan Ahmed
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
