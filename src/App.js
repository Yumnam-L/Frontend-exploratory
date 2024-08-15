import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Events from "./components/Events";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme}>
      <Header />
      <Gallery />
      <Events />
    </div>
  );
}

export default App;
