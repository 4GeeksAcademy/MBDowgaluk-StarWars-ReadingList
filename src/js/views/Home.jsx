import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container-fluid mt-5 w-auto">
		<h1 className="text-light m-2 text-center ">STARWARS BLOG READING LIST</h1>
		<div className="row d-flex justify-content-evenly">
		<div class="card col-lg-3 col-sm-9 my-5 text-center">
  			<img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="rounded mx-auto d-block img-thumbnail mt-2" alt="..." />
  			<Link to="/people" class="card-body">
			  <button type="button" className="btn btn-warning m-4">Characters</button>
  			</Link>
		</div>
		<div class="card col-lg-3 col-sm-9 my-5 text-center">
  			<img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="rounded mx-auto d-block img-thumbnail mt-2" alt="..." />
  			<Link to="/planets" class="card-body">
    			<button type="button" className="btn btn-warning m-4">Planets</button>
  			</Link>
		</div>
		<div class="card col-lg-3 col-sm-9 my-5 text-center">
  			<img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="rounded mx-auto d-block img-thumbnail mt-2" alt="..." />
  			<Link to="/starships" class="card-body">
			  <button type="button" className="btn btn-warning m-4">Starships</button>
  			</Link>
		</div>
		</div>
	</div>
);
