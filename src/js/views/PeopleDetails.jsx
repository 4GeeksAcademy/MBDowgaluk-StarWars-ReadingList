import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const position = (params.idpeople) - 1;
    const peopleSelect = store.people[position];
    const urlImage = 'https://starwars-visualguide.com/assets/img/characters/';
    
    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return(
        <div className="d-flex">
            <img src={`${urlImage}${params.idpeople}.jpg`} onError={handleError} className="rounded d-block m-2" alt="..." />
            <div className="d-grid m-2 bg-dark rounded">
                <h1 className="text-light m-2">Characters details</h1>
                <h3 className="text-warning m-2">Name: {peopleSelect.name}</h3>
                <p className="text-light m-2">Gender: {peopleSelect.gender}</p>
                <p className="text-light m-2">Height: {peopleSelect.height}</p>
                <p className="text-light m-2">Mass: {peopleSelect.mass}</p>
                <p className="text-light m-2">Eye color: {peopleSelect.eye_color}</p>
                <p className="text-light m-2">Hair color: {peopleSelect.hair_color}</p>
                <p className="text-light m-2">Skin color: {peopleSelect.skin_color}</p>
                <Link to={"/people"}>
                    <button type="button" className="btn btn-warning m-2 mt-3 btn-sm">Go back to characters</button>
                </Link>
            </div>
        </div>
    )
}