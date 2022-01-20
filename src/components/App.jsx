import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import SearchField from "./SearchField";
import Tab from "./Tab";

const App = () => {
  return (
    <div className="page">
      <Provider store={store}>
        <SearchField />
        <Tab />
      </Provider>
    </div>
  );
};

export default App;
