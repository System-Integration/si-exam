import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./components/Routes";
import { CustomMenu } from "./components/CustomMenu";
import { Provider } from "react-redux";
import rootReducers from "./reducers/rootReducers";

const App: React.FC = () => {
  return (
    <Provider store={rootReducers}>
      <BrowserRouter>
        <React.Fragment>
          <CustomMenu />
          <Routes />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
