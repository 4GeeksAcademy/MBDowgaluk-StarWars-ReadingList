import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardStarships } from "./CardStarships.jsx";

export const StarshipsList = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div>
            <h1 className="text-light text-center">Starships</h1>
            <div className="container-fluid m-2 me-0 pe-0 ps-0 w-auto">
             <div className="row d-flex justify-content-around me-0 pe-0 w-auto">
                {store.starships.map((item, id)=>{
                    const urlImage = 'https://starwars-visualguide.com/assets/img/starships/';
                    const position = id + 1;
                    return <CardStarships name={item.name} url={`${urlImage}${item.uid}.jpg`} positionUrl={position} id={item.uid}/>
                })}
                </div>
            </div>
        </div>
)}