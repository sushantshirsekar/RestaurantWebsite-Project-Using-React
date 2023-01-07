import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Summary />
    </React.Fragment>
  );
}

export default App;
