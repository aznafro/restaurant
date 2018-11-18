import navbar from "./components/navbar.js";
import screen from "./components/screen";
import home from "./sections/home.js";
import menu from "./sections/menu.js";
import locations from "./sections/locations.js";
import contact from "./sections/contact.js";

(function() {
	let nav = navbar();
	let scrn = screen();
	let homeSection = home(), 
		menuSection, 
		locationsSection, 
		contactSection;
	let body = document.body;
	let content = document.createElement("div");
	let innerContainer = document.createElement("div");

	// add nav
	body.appendChild(nav);

	// add screen, this is used when the background gets blurred.
	// it blocks the user from interacting with the background
	body.appendChild(scrn);

	// init with the home content
	innerContainer.classList.add("inner-container");
	innerContainer.appendChild(homeSection);

	// add inner container where all the tab contents will go
	content.appendChild(innerContainer);

	content.classList.add("content");
	body.appendChild(content);
})();