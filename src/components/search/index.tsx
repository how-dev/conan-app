import React from "react";
import searchLogo from "./subinputImage.png"
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import { SetSearchThunk } from "../../store/modules/search/thunk"
export const Search: React.FC = () => {
    const input = useSelector((state: {searching: string}) => state.searching)
    const dispatch = useDispatch();

    const handleSearch = (e: {target: {value: string}}) => {
        dispatch(SetSearchThunk(e.target.value))
        console.log(input)
    }
    return (
        <div className="searchBox">
            <input onChange={handleSearch}className="search" placeholder="Pesquise aqui..."/>
            <img alt="search" src={searchLogo}  className="sword"/>
        </div>
    )
}
