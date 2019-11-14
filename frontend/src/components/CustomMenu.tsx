import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
interface Props {}

export const CustomMenu: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <Menu
      style={{ textAlign: "center" }}
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">Startpage</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/computers">Computers</Link>
      </Menu.Item>
    </Menu>
  );
};
