import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { deleteItemFromCart } from "../redux/slices/cartSlice";
import useConnectToRMQ from "../hooks/useConnectToRMQ";
import { List, Button } from "antd";
import CustomModal from "./CustomModal";

interface Props {}

const Cart: React.FC<Props> = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { computers, monitors } = cart;
  const [toggle, setToggle] = React.useState(false);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "auto" }}>
      <List
        header={<div>Computers</div>}
        dataSource={computers}
        renderItem={(item, index) => (
          <List.Item
            onClick={() =>
              dispatch(
                deleteItemFromCart({
                  id: "computers",
                  content: item,
                  index: index
                })
              )
            }
          >
            {item.computerName}, {item.cpu}, {item.gpu}, {item.price}
          </List.Item>
        )}
      />
      <List
        header={<div>Monitors</div>}
        dataSource={monitors}
        renderItem={(item, index) => (
          <List.Item
            onClick={() =>
              dispatch(
                deleteItemFromCart({
                  id: "monitors",
                  content: item,
                  index: index
                })
              )
            }
          >
            {item.monitorName}, {item.screenSize}, {item.resolution},
            {item.price}
          </List.Item>
        )}
      />
      {computers.length + monitors.length !== 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setToggle(true);
            }}
          >
            Create order
          </Button>
        </div>
      )}
      <CustomModal toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Cart;
