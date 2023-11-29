import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../component/Spinner.jsx";

export const StarshipsDetails = () =>{
    const { store, actions } = useContext(Context);
    const params = useParams();
    const urlImage= 'https://starwars-visualguide.com/assets/img/starships/';

    const handleError = (event) =>{
        event.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    };

    useEffect(()=>{
       actions.getStarshipsDetails(params.idstarship); 
    }, []);

    return(
        <div className="d-flex">
            <img src={`${urlImage}${params.idstarship}.jpg`} onError={handleError} className="rounded d-block m-2" alt="..." />
            <div className="d-grid m-2 bg-dark rounded">
                <h1 className="text-light m-2">Starships details</h1>
                {!store.currentStarship.properties? (
                    <Spinner />
                ):(
                    <div>
                    <h3 className="text-warning m-2">Name: {store.currentStarship.properties.name} </h3>
                    <p className="text-light m-2">Length: {store.currentStarship.properties.length}</p>
                    <p className="text-light m-2">Cargo capacity: {store.currentStarship.properties.cargo_capacity}</p>
                    <p className="text-light m-2">Consumables: {store.currentStarship.properties.consumables}</p>
                    <p className="text-light m-2">Cost: {store.currentStarship.properties.cost_in_credits}</p>
                    <p className="text-light m-2">Crew: {store.currentStarship.properties.crew}</p>
                    <p className="text-light m-2">Hyperdrive rating: {store.currentStarship.properties.hyperdrive_rating}</p>
                    <p className="text-light m-2">Manufacterer: {store.currentStarship.properties.manufacturer}</p>
                    <p className="text-light m-2">Model: {store.currentStarship.properties.model}</p>
                    <p className="text-light m-2">Passengers: {store.currentStarship.properties.passengers}</p>
                    <p className="text-light m-2">Starship class: {store.currentStarship.properties.starship_class}</p>
                    <p className="text-warning m-2 fst-italic text-center">{store.currentStarship.description}</p>
                    </div>
                )}
                
                
                <Link to={"/starships"}>
                    <button type="button" className="btn btn-warning m-2 mt-3 btn-sm">Go back to starships</button>
                </Link>
            </div>
        </div>
    )
}