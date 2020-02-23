const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let ID;

if (params.has("id")) {
	ID = params.get("id");
} else {
	document.location.href = "index.html";
}

const newBaseUrl = `https://rickandmortyapi.com/api/character/${ID}`;

fetch(newBaseUrl)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		replaceValues(json);
	})
	.catch(function(error) {
		document.location.href = "error.html";
	});

function replaceValues(result) {
	const imgClass = document.querySelector(".details-image");
	imgClass.src = result.image;
	imgClass.alt = result.name;

	const characterName = document.querySelector("h1");
	characterName.innerHTML = result.name;

	const statusValue = document.querySelector("#status");
	statusValue.innerHTML = result.status;

	const speciesValue = document.querySelector("#species");
	speciesValue.innerHTML = result.species;

	const originValue = document.querySelector("#origin");
	originValue.innerHTML = result.origin.name;

	const locationValue = document.querySelector("#location");
	locationValue.innerHTML = result.location.name;

	document.title = result.name;
}
