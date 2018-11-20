const locations = () => {
	let locationsSection = document.createElement("section");
	locationsSection.classList.add("locations__section");

	// add header
	let locHeader = document.createElement("h1");
	let headerSpan = document.createElement("span");
	
	locHeader.classList.add("location__header");
	headerSpan.classList.add("text");

	headerSpan.textContent = "Location";

	locHeader.appendChild(headerSpan);
	locationsSection.appendChild(locHeader);

	// add location and map
	let locBox = document.createElement("div");
	let addressBox = document.createElement("div");
	let mapBox = document.createElement("div");

	locBox.classList.add("row");
	locBox.classList.add("loc__row")
	addressBox.classList.add("col-md-1-2");
	mapBox.classList.add("col-md-1-2");

	// address
	let address = document.createElement("div");
	let addName = document.createElement("h2");
	let addSt = document.createElement("p");
	let addCity = document.createElement("p");

	address.classList.add("address");
	addName.classList.add("address__name");
	addSt.classList.add("address__add");
	addCity.classList.add("address__add");

	addName.textContent = "Nook Worm";
	addSt.textContent = "567 Bulwark Way";
	addCity.textContent = "Costa Mesa, CA 90212";

	address.appendChild(addName);
	address.appendChild(addSt);
	address.appendChild(addCity);

	addressBox.appendChild(address);

	// map
	let map = document.createElement("iframe");
	let mapSrc = document.createAttribute("src");
	let frameBorder = document.createAttribute("frameborder");

	map.classList.add("map");

	mapSrc.value = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6643.719949213464!2d-117.91841189603863!3d33.634872502228795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83262048d96b7bfe!2sGreenleaf+Gourmet+Chopshop!5e0!3m2!1sen!2sus!4v1542690706148";
	map.setAttributeNode(mapSrc);

	frameBorder.value = 0;
	map.setAttributeNode(frameBorder);

	mapBox.appendChild(map);

	// append elements
	locBox.appendChild(mapBox);
	locBox.appendChild(addressBox);
	locationsSection.appendChild(locBox);

	return locationsSection;
}

export default locations;