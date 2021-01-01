import React from "react";
import "./index.css";
import TheBag from "./bag.png";
import { useHistory } from "react-router-dom";

export const Bag: React.FC = () => {
    const history = useHistory();

    return (
        <div className="favBag">
            <img alt="theBag" src={TheBag} className="theBag" onClick={() => history.push("/favoritelist")}/>
            <span className="subBag">Mochila</span>
        </div>
    )
}