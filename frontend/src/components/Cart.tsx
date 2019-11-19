import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { deleteItemFromCart } from "../redux/slices/cartSlice";
import useConnectToRMQ from "../hooks/useConnectToRMQ";
import { List, Typography, Col, Button } from "antd";

interface Props {}

const Cart: React.FC<Props> = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { computers, monitors } = cart;
  const [toggle, setToggle] = React.useState(false);
  const dispatch = useDispatch();

  useConnectToRMQ(
    "aggregator",
    "aggregatorResult",
    JSON.stringify(cart),
    toggle,
    setToggle
  );

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => setToggle(true)}>Create order</Button>
      </div>
    </div>
  );
};

export default Cart;
