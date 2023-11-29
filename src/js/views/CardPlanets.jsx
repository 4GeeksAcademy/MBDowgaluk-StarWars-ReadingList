import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPlanets = (props) => {
    const { store, actions } = useContext(Context);

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    return(
        <div className="card m-1 mt-3 col-sm-4 col-md-3 col-lg-2 bg-light">
            <img src={props.url} onError={handleError} className="rounded d-block mt-2" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Diameter: {props.diameter}</li>
                <li className="list-group-item">Population: {props.population}</li>
                <li className="list-group-item">Terrain: {props.terrain}</li>
            </ul>
            <div className="d-flex justify-content-between">
                <Link to={`/planets/${props.id}`} type="button" className="btn btn-warning m-2 btn-sm">More details</Link>
                <button type="button" className="btn btn-warning m-2 btn-sm" onClick={() => {actions.addFavorites({name: props.name, id: props.id, type: 'Planet', path: 'planets'})}}><i class="far fa-heart"></i></button>
            </div>
        </div>
    )
}