import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { deleteItemFromCart } from "../../redux/slices/cartSlice";
import { List, Button } from "antd";
import FetchFacade from "../../rest/FetchFacade";
import { CartResult } from "./CartResult";
import { OrderReponse } from "../../interfaces/types";

interface Props {}

export interface ResponseState extends OrderReponse {
  hasPurchased: boolean;
}

export const initialResponseState = {
  hasPurchased: false,
  message: "",
  resultId: 0,
  status: false
};

const Cart: React.FC<Props> = () => {
  const { computers, monitors } = useSelector((state: RootState) => state.cart);
  const [response, setResponse] = React.useState<ResponseState>(
    initialResponseState
  );
  const dispatch = useDispatch();

  return (
    <div style={{ margin: "auto" }}>
      {!response.hasPurchased ? (
        <>
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
                  FetchFacade.postOrder(computers, monitors).then(response => {
                    if (response.status) {
                      setResponse({
                        hasPurchased: true,
                        message: response.message,
                        resultId: response.resultId,
                        status: response.status
                      });
                    }
                  });
                }}
              >
                Create order
              </Button>
            </div>
          )}
        </>
      ) : (
        <CartResult response={response} setResponse={setResponse} />
      )}
    </div>
  );
};

export default Cart;
