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
	let navLinks = nav.querySelectorAll(".nav-link");
	navLinks.forEach(function(link) {
		link.addEventListener("click", function() {
			let targetLink = link.textContent.toLowerCase();
			let currentContent = innerContainer.querySelector("[class$=\"__section\"]");
			let currentContentName = currentContent.getAttribute("class").split("__")[0];
			
			// if were clicking a link were already on, do nothing
			if(targetLink == currentContentName) {
				return;
			}

			currentContent.remove();
			switch(targetLink) {
				case "home": {
					innerContainer.appendChild(homeSection);
					break;
				}
				case "menu": {
					if(!menuSection) {
						menuSection = menu();
					}
					innerContainer.appendChild(menuSection);
					break;
				}
				case "locations": {
					if(!locationsSection) {
						locationsSection = locations();
					}
					innerContainer.appendChild(locationsSection);
					break;
				}
				case "contact": {
					if(!contactSection) {
						contactSection = contact();
					}
					innerContainer.appendChild(contactSection);
					break;
				}
			}
		});
	});
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