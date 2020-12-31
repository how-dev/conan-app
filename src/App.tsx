import React from "react";
import CoverList from "./components/gridList";
import { Title } from "./components/title/"
import { Search } from "./components/search"
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
        <Title />
        <Search />
        <CoverList />
    </div>
  );
}

export default App;
