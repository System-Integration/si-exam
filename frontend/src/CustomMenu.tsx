import React from "react";
import { Menu, Icon, Badge } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { toggleDrawerOn } from "./redux/slices/drawerSlice";
interface Props {}

export const CustomMenu: React.FC<Props> = () => {
  const location = useLocation();
  const { computers, monitors } = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  return (
    <Menu
      style={{ textAlign: "center" }}
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <Link to="/">Shop</Link>
      </Menu.Item>
      <Menu.Item key="/cart">
        <Link to="/cart">
          <Badge count={computers.length + monitors.length}>
            <Icon type="shopping-cart" />
          </Badge>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={() => dispatch(toggleDrawerOn())}>
        Let us hear your feedback!
      </Menu.Item>
    </Menu>
  );
};
