import React from "react";
import { Switch, Route } from "react-router-dom";

import CoverList from "./components/gridList";
import { Title } from "./components/title/"
import { Search } from "./components/search"

import { CoverPage } from "./pages/coverPage"
import { FavoritePage } from "./pages/favoritePage";
import { Bag } from "./components/favoriteBag";

import "./App.css"

const App: React.FC = () => {
  return (
    <div>
        <Title />
        <Switch>
            <Route exact path="/">
                <Search />
                <Bag />
                <CoverList />
            </Route>
            <Route path="/cover/:id">
                <Bag />
                <CoverPage />
            </Route>
            <Route path="/favoritelist">
                <FavoritePage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
