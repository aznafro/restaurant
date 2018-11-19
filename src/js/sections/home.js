const home = () => {
	let homeContainer = document.createElement("section");

	let headerDiv = document.createElement("div");
	let homeHeader = document.createElement("h1");
	let headerSpan = document.createElement("span");

	let quoteDiv = document.createElement("div");
	let homeQuote = document.createElement("p");
	let quoteSpan = document.createElement("span");

	homeContainer.classList.add("home__section");

	// add header
	homeHeader.classList.add("home__header");

	headerSpan.classList.add("text");
	headerSpan.textContent = "Nook Worm";

	headerDiv.appendChild(homeHeader);
	homeHeader.appendChild(headerSpan);
	homeContainer.appendChild(headerDiv);

	// add quote
	homeQuote.classList.add("home__quote");

	quoteSpan.classList.add("text");
	quoteSpan.textContent = "\"Wholesome chit-chat with some noms to boot\"";

	quoteDiv.appendChild(homeQuote);
	homeQuote.appendChild(quoteSpan);
	homeContainer.appendChild(quoteDiv);

	return homeContainer;
}

export default home;