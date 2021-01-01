import React from "react";
import "./index.css";
import TheBag from "./bag.png";
import { useHistory } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

export const Bag: React.FC = () => {
    const history = useHistory();
    const FavList: [] = useSelector((state: {searcing: string, fav: []}) => state.fav);
    return (
        <div className="favBag">
            <div style={{width: "100%", position: "absolute"}}>
                <Badge style={{position: "relative", left: "80%"}} max={99} badgeContent={FavList.length} overlap="rectangle" color="secondary"/>
            </div>
            <img alt="theBag" src={TheBag} className="theBag" onClick={() => history.push("/favoritelist")}/>
            <span className="subBag">Mochila</span>
        </div>
    )
}