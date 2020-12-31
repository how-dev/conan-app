import React from "react";
import { Switch, Route } from "react-router-dom";

import CoverList from "./components/gridList";
import { Title } from "./components/title/"
import { Search } from "./components/search"

import { CoverPage } from "./pages/coverPage"

import "./App.css"

const App: React.FC = () => {
  return (
    <div>
        <Title />
        <Switch>
            <Route exact path="/">
                <Search />
                <CoverList />
            </Route>
            <Route path="/cover/:ref">
                <CoverPage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
