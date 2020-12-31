import React from "react";
import searchLogo from "./subinputImage.png"
import "./index.css"

export const Search: React.FC = () => {
    return (
        <div className="searchBox">
            <input className="search" placeholder="Pesquise aqui..."/>
            <img alt="search" src={searchLogo}  className="sword"/>
        </div>

    )
}
