function updateText() {
	let paragraphs = document.querySelectorAll("p");
	let h1 = document.querySelector("h1");

	let placeHolderTexth1 = h1.innerText;
	placeHolderTexth1 = placeHolderTexth1
		.replace(/The /g, "Replaced ")
		.replace(/the /g, "replaced ");
	h1.innerText = placeHolderTexth1;

	paragraphs.forEach((text) => {
		let placeHolderText = text.innerText;
		placeHolderText = placeHolderText
			.replace(/the /g, "replaced ")
			.replace(/The /g, "Replaced ");
		text.innerText = placeHolderText;
	});
}

setTimeout(updateText, 4000);
