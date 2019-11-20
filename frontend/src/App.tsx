import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { CustomMenu } from "./CustomMenu";
import { fetchItems } from "./redux/slices/itemsSlice";
import { RootState } from "./redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { computers, monitors } = useSelector(
    (state: RootState) => state.items
  );

  React.useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

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
            <Routes />
          </React.Fragment>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
};

export default App;
