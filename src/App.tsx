import React from "react";
import CoverList from "./components/gridList";
import { Title } from "./components/title/"
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
        <Title />
        <CoverList />
    </div>
  );
}

export default App;
