const navbar = () => {
	let nav = document.createElement("nav");
	let navBar = document.createElement("ul");
	let navText = ["Home", "Menu", "Locations", "Contact"];
	let navToggle = document.createElement("span");
	let navToggleIcon = document.createElement("i");
	let navItems = [];

	// nav toggle
	navToggleIcon.classList.add("fas");
	navToggleIcon.classList.add("fa-times");

	navToggle.classList.add("nav-toggle");
	navToggle.appendChild(navToggleIcon);

	let toggled = false;
	navToggle.addEventListener("click", function() {
		// this.classList.toggle("spin");

		if(!toggled) {
			this.style.animation = ".5s spinIn forwards";
		} else {
			this.style.animation = ".5s spinOut forwards";
		}
		toggled = !toggled;

		let delay = 0;
		navItems.forEach(function(navItem) {
			setTimeout(function() {
				navItem.classList.toggle("nav-item-in");
				console.log(delay + "s");
			}, delay);
			delay += 50;
		});

	});

	nav.appendChild(navToggle);

	navBar.classList.add("navbar");

	navText.forEach(function(text) {
		let navItem = document.createElement("li");
		let navLink = document.createElement("a");
		navLink.textContent = text;
		navLink.classList.add("nav-link");

		if(text == "Home") {
			navLink.classList.add("active");
		}

		navItem.classList.add("nav-item");

		// eventhandlers for nav clicks
		navItem.addEventListener("click", function() {

			navItems.forEach(function(otherNavItem) {
				if(otherNavItem.textContent != navItem.textContent) {
					otherNavItem.querySelector(".nav-link").classList.remove("active");
				} else {
					otherNavItem.querySelector(".nav-link").classList.add("active");
				}
			});
		});
		navItems.push(navItem);


		navItem.appendChild(navLink);
		navBar.appendChild(navItem);
	});

	nav.appendChild(navBar);

	return nav;
}

export default navbar;