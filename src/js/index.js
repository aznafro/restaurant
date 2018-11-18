import navbar from "./components/navbar.js";
import home from "./sections/home.js";
import menu from "./sections/menu.js";
import locations from "./sections/locations.js";
import contact from "./sections/contact.js";

(function() {
	let nav = navbar();
	let homeSection = home(), 
		menuSection, 
		locationsSection, 
		contactSection;

	let content = document.querySelector(".content");
	let innerContainer = document.createElement("div");

	// add nav
	content.appendChild(nav);

	// add inner container where all the tab contents will go
	innerContainer.classList.add("inner-container");
	content.appendChild(innerContainer);
	
	// init with the home content
	innerContainer.appendChild(homeSection);
})();