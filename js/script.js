const baseURL = "https://rickandmortyapi.com/api/character/";

fetch(baseURL)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		showResults(json);
	})
	.catch(function(error) {
		document.location.href = "error.html";
	});

function showResults(json) {
	const results = json.results;

	const resultsContainer = document.querySelector(".row.results");

	let typeValue = "";

	let html = "";

	results.forEach((result) => {
		if (result.type) {
			typeValue = result.type;
		} else {
			typeValue = "Unknown";
		}

		html += `          
      <div class="col-sm-6 col-md-4 col-lg-3">                
          <div class="card">
         
              <img class="image" src="${result.image}" alt="${result.name}">
              <div class="details">
                  <h4 class="name">${result.name}</h4>
                  <p>Type: ${typeValue}</p>    
                  <p>Episode count: ${result.episode.length}</p>                                       
                  <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
              </div>
          </div>
      </div>`;
	});

	resultsContainer.innerHTML = html;
}
