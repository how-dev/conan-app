import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CompleteCard } from "../../components/card";
import { Conan } from "../../images";
import {Button} from "@material-ui/core";
import "./index.css";

export const FavoritePage: React.FC = () => {
    const history = useHistory();
    let FavList: Conan[] = useSelector((state: { searching: string; fav: [] }) => state.fav);
    console.log(FavList);

    return (
        <div className="favBox">
            <Button onClick={() => history.push("/")} style={{color: "darkred"}}>voltar</Button>
            <span style={{fontSize: 40, margin: 10, textShadow: "2px 2px 5px black"}}>Favoritos: </span>
            {FavList.length > 0 ? FavList.map((data: Conan) => (
                <CompleteCard
                    title={data.title}
                    cover={data.cover}
                    description={data.description}
                    year={data.year}
                    persons={data.persons}
                    totalPages={data.totalPages}
                    coverPrice={data.coverPrice}
                    company={data.company}
                    id={data.id}
                />
            )) : (
                <span style={{fontSize: 40, margin: 10, color: "darkorange", textShadow: "2px 2px 5px black"}}>Não há nada aqui.</span>
            )}
        </div>
    );
}
