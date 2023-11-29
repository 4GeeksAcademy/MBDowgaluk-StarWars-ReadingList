import React, { useContext } from "react";
import { CardPeople } from "./CardPeople.jsx";
import { Context } from "../store/appContext.js";

export const PeopleList = () => {
    const { store, actions } = useContext(Context);
    
    return (
        <div>
            <h1 className="text-light text-center">Characters</h1>
            <div className="container-fluid m-2 me-0 pe-0 ps-0 w-auto">
                <div className="row d-flex justify-content-around me-0 pe-0 w-auto">
                {store.people.map((item, id)=>{
                    const urlImage = 'https://starwars-visualguide.com/assets/img/characters/';
                    const position = id + 1;
                    return <CardPeople name={item.name} gender={item.gender} height={item.height} mass={item.mass} url={`${urlImage}${position}.jpg`} id={position}/>
                })}
                </div>
            </div>
        </div>
    )
}