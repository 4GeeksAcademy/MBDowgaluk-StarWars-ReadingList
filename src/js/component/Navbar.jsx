import React from "react";
import { Link } from "react-router-dom";
import { BtnFavorites } from "./BtnFavorites.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-dark mb-2">
			<div className="container-fluid">
			<Link to="/" className="nav-item">
				<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="img-fluid rounded m-1" alt="..." style={{width: "75px"}}/></span>
			</Link>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    		</button>
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<Link to={"/people"}>
					<button type="button" className="btn btn-light m-2 color-button">Characters</button>
				</Link>
				<Link to={"/planets"}>
					<button type="button" className="btn btn-light m-2 color-button" >Planets</button>
				</Link>
				<Link to={"/starships"}>
					<button type="button" className="btn btn-light m-2 color-button">Starships</button>
				</Link>
				<BtnFavorites />
			</div>
			</div>
		</nav>
	);
};
