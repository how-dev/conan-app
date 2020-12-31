import React from "react";
import searchLogo from "./subinputImage.png"
import "./index.css"
import { useDispatch } from "react-redux";
import { SetSearchThunk } from "../../store/modules/search/thunk"

export const Search: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: {target: {value: string}}) => {
        dispatch(SetSearchThunk(e.target.value))
    }
    return (
        <div className="searchBox">
            <input onChange={handleSearch} className="search" placeholder="Pesquise aqui..."/>
            <img alt="search" src={searchLogo}  className="sword"/>
        </div>
    )
}
