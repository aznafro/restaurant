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
	headerDiv.classList.add("home__header--box");
	homeHeader.classList.add("home__header");

	headerSpan.classList.add("text");
	headerSpan.textContent = "Nook Worm";

	homeHeader.appendChild(headerSpan);
	headerDiv.appendChild(homeHeader);
	homeContainer.appendChild(headerDiv);

	// add quote
	quoteDiv.classList.add("home__quote--box");
	homeQuote.classList.add("home__quote");

	quoteSpan.classList.add("text");
	quoteSpan.textContent = "\"Wholesome chit-chat with some noms to boot\"";

	homeQuote.appendChild(quoteSpan);
	quoteDiv.appendChild(homeQuote);
	homeContainer.appendChild(quoteDiv);

	return homeContainer;
}

export default home;