import React from "react";
import { Menu, Icon, Badge } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
interface Props {}

export const CustomMenu: React.FC<Props> = () => {
  const location = useLocation();
  const { computers, monitors } = useSelector((state: RootState) => state.cart);

  return (
    <Menu
      style={{ textAlign: "center" }}
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">Startpage</Link>
      </Menu.Item>
      <Menu.Item key="/shop">
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="/cart">
        <Link to="/cart">
          <Badge count={computers.length + monitors.length}>
            <Icon type="shopping-cart" />
          </Badge>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
