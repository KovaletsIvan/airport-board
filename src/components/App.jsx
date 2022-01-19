import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchField from "./SearchField";
import Tab from "./Tab";

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Provider store={store}>
          <SearchField />
          <Tab />
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
