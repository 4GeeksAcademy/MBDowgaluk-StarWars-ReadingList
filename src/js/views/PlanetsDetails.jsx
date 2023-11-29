import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const PlanetsDetails = () =>{
    const { store, actions } = useContext(Context);
    const params = useParams();
    const position = (params.idplanet) - 1;
    const planetSelect = store.planets[position];
    const urlImage = 'https://starwars-visualguide.com/assets/img/planets/';

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return(
        <div className="d-flex">
            <img src={`${urlImage}${params.idplanet}.jpg`} onError={handleError} className="rounded d-block m-2" alt="..." />
            <div className="d-grid m-2 bg-dark rounded">
                <h1 className="text-light m-2">Planets details</h1>
                <h3 className="text-warning m-2">Name: {planetSelect.name}</h3>
                <p className="text-light m-2">Population: {planetSelect.population}</p>
                <p className="text-light m-2">Climate: {planetSelect.climate}</p>
                <p className="text-light m-2">Diameter: {planetSelect.diameter}</p>
                <p className="text-light m-2">Gravity: {planetSelect.gravity}</p>
                <p className="text-light m-2">Orbital period: {planetSelect.orbital_period}</p>
                <p className="text-light m-2">Terrain: {planetSelect.terrain}</p>
                <p className="text-light m-2">Rotation period: {planetSelect.rotation_period}</p>
                <Link to={"/planets"}>
                    <button type="button" className="btn btn-warning m-2 mt-3 btn-sm">Go back to planets</button>
                </Link>
            </div>
        </div>
    )
}