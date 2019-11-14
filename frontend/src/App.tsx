import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes } from "./components/Routes";
import { CustomMenu } from "./components/CustomMenu";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <CustomMenu />
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
