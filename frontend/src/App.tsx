import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { CustomMenu } from "./CustomMenu";
import { fetchItems } from "./redux/slices/itemsSlice";
import { RootState } from "./redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Col } from "antd";
import { PurchaseHistory } from "./components/PurchaseHistory";
import useConnectToRMQ from "./hooks/useConnectToRMQ";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { computers, monitors } = useSelector(
    (state: RootState) => state.items
  );

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useConnectToRMQ();

  return (
    <React.Fragment>
      {computers.length === 0 && monitors.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </div>
      ) : (
        <BrowserRouter>
          <React.Fragment>
            <CustomMenu />
            <Col span={16}>
              <Routes />
            </Col>
            <Col span={8}>
              <PurchaseHistory />
            </Col>
          </React.Fragment>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
};

export default App;
