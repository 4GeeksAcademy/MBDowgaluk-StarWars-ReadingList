const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			starships: [],
			currentStarship: {},
			favorites: [],
			baseUrl: 'https://swapi.dev/api',
			baseUrl2: 'https://www.swapi.tech/api'
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: (item) =>{
				const favoritesArray = [...getStore().favorites, item];
				const favoritesArrayMap = favoritesArray.map((i) =>{
					return [i.name, i]
				});
				const newFavoritesArrayMap = new Map(favoritesArrayMap);
				const result = [...newFavoritesArrayMap.values()];
				setStore({favorites: result})
			 
			},
			removeFavorites: (item) =>{
				setStore({favorites: getStore().favorites.filter((i, id)=> {
					return i != item;
				})})
			},
			getPeople: async() =>{
				const url = getStore().baseUrl + '/people';
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					const peoples= data.results;
					setStore({people: peoples});
					localStorage.setItem('people', JSON.stringify(peoples))
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getStarships: async() =>{
				const url = getStore().baseUrl2 + '/starships';
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					const starships= data.results;
					setStore({starships: starships});
					localStorage.setItem('starships', JSON.stringify(starships))
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getStarshipsDetails: async(id) =>{
				const url = getStore().baseUrl2 + '/starships/' + id;
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					const starships= data.result;
					setStore({currentStarship: starships});
					
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			getPlanets: async() =>{
				const url = getStore().baseUrl + '/planets';
				const options = {
					method: 'GET'
				};
				const response = await fetch(url, options);
				if (response.ok){
					const data = await response.json();
					const planets= data.results
					setStore({planets: planets});
					localStorage.setItem('planets', JSON.stringify(planets))
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			}
		}
	};
};

export default getState;
