import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "Pages/MainPage";

import "Style/index.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="*" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
