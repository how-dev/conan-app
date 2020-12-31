import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { result } from "../../images";
import { Button } from "@material-ui/core"
import "./index.css";

export const CoverPage: React.FC = () => {
    const location = useLocation();
    const history = useHistory();
    const id: number = +location.pathname.replace("/cover/", "")
    const theCover = result.filter(cover => cover.id === id)[0];
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Button onClick={() => history.push("/")} style={{color: "darkred"}}>voltar</Button>
            <span style={{ margin: 10, padding: 20, fontSize: 30, color: "black", background: "radial-gradient(white, transparent)"}}>{theCover.title}</span>
            <img alt={theCover.title} src={theCover.cover} />
            <div className="completeDatas">
                <span style={{ fontSize: 30, color: "black"}}>Dados: </span>
                <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Número de páginas:</div> {theCover.totalPages}</div>
                <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Ano:</div> {theCover.year}</div>
                <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Editora:</div> {theCover.company}</div>
                <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Preço:</div> {theCover.coverPrice}</div>
                {theCover.finalArt.length !== 0 && <div style={{color: "darkred", fontWeight: 700}}>Arte final feita por: {theCover.finalArt.map((artist, index) => <li key={index} style={{color: "black", fontWeight: 700}}>{artist.name}</li>)}</div>}
                {theCover.history.length !== 0 && <div style={{color: "darkred", fontWeight: 700}}>História feita por: {theCover.history.map((artist, index) => <li key={index} style={{color: "black", fontWeight: 700}}>{artist.name}</li>)}</div>}
                <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Licenciador:</div> {theCover.licensor}</div>
                {theCover.originalPublisher.length !== 0 && <div style={{color: "darkred", fontWeight: 700}}>Editor Original: {theCover.originalPublisher.map((publisher, index) => <li key={index} style={{color: "black", fontWeight: 700}}>{publisher.name}</li>)}</div>}
                {theCover.persons.length !== 0 && <div style={{color: "darkred", fontWeight: 700}}>Personagens: {theCover.persons.map((person, index) => <li key={index} style={{color: "black", fontWeight: 700}}>{person.name}</li>)}</div>}
                {theCover.screenwriters.length !== 0 && <div style={{color: "darkred", fontWeight: 700}}>Roteiristas: {theCover.screenwriters.map((screenwriter, index) => <li key={index} style={{color: "black", fontWeight: 700}}>{screenwriter.name}</li>)}</div>}
                {theCover.status !== "" && <div style={{color: "black", fontWeight: 700, display: "flex"}}><div style={{color: "darkred", fontWeight: 700}}>Status:</div> {theCover.status}</div>}
                <p style={{color: "black", fontWeight: 700}}>{theCover.description}</p>
            </div>
        </div>
    )
}
