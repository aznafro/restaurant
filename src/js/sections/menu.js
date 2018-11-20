let menuItems = [{
		name: "Pizzas",
		description: "Try one of our delicious pizzas made in our very own brick oven",
		imageURL: "images/pizza.jpg"
	}, {
		name: "Burgers",
		description: "Made with 100% Wagyu beef, we craft burgers that produces the juiciest bites",
		imageURL: "images/burger.jpg"
	}, {
		name: "Hotdogs",
		description: "Not your average hotdog, these babies are loaded with flavor",
		imageURL: "images/hotdog.jpg"
	}, {
		name: "Beer",
		description: "Choose from a huge selection of craft beer, imported and domestic",
		imageURL: "images/beer.jpg"
	}
];

function nextCard(cards, currentCard, index) {
	cards[currentCard].classList.add("fade");

	currentCard = currentCard += index;
	if(currentCard >= cards.length) {
		currentCard = 0;
	} else if(currentCard < 0) {
		currentCard = cards.length - 1;
	}

	cards[currentCard].classList.remove("fade");
	return currentCard;
}

const menu = smallWindow => {
	let cards = [];
	let currentCard = 0;
	let menuSection = document.createElement("section");
	let menuHeader = document.createElement("h1");
	let menuSpan = document.createElement("span");

	menuSection.classList.add("menu__section");
	menuHeader.classList.add("menu__header");
	menuSpan.classList.add("text");

	menuSpan.textContent = "Popular Dishes";
	menuHeader.appendChild(menuSpan);

	let slideshow = document.createElement("div");

	if(!smallWindow) {
		slideshow.classList.add("row");
	} else {
		slideshow.classList.add("slideshow");

		let leftArrow = document.createElement("a");
		let rightArrow = document.createElement("a");

		leftArrow.classList.add("arrow");
		leftArrow.classList.add("arrow-left");
		rightArrow.classList.add("arrow");
		rightArrow.classList.add("arrow-right");

		leftArrow.innerHTML = "&#10094;";
		rightArrow.innerHTML = "&#10095;";

		leftArrow.addEventListener("click", function() {
			currentCard = nextCard(cards, currentCard, -1);
		});
		rightArrow.addEventListener("click", function() {
			currentCard = nextCard(cards, currentCard, 1);
		});

		slideshow.appendChild(leftArrow);
		slideshow.appendChild(rightArrow);
	}

	let firstItem = true;
	menuItems.forEach(function(menuItem) {
		let card = document.createElement("div");
		let cardImg = document.createElement("div");
		let cardName = document.createElement("h2");
		let cardDesc = document.createElement("p");
		let overlay = document.createElement("div");

		card.classList.add("card");

		cardImg.classList.add("card__img");
		cardName.classList.add("card__name");
		cardDesc.classList.add("card__desc");
		overlay.classList.add("card__overlay");

		cardImg.style.backgroundImage = "linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%), url(" + menuItem.imageURL + ")";

		cardName.textContent = menuItem.name;
		cardDesc.textContent = menuItem.description;

		overlay.appendChild(cardName);
		overlay.appendChild(cardDesc);

		card.appendChild(cardImg);
		card.appendChild(overlay);

		cards.push(card);

		if(!smallWindow) {
			let col = document.createElement("div");
			col.classList.add("col-1-4");

			col.appendChild(card);
			slideshow.appendChild(col);
		} else {
			slideshow.appendChild(card);
		}
	});

	// keep the hiddenness of the cards in order
	if(smallWindow) {
		for(let i=0; i < cards.length; i++) {
			if(i != 0) {
				cards[i].classList.add("fade");
			}
		}
	}

	menuSection.appendChild(menuHeader);
	menuSection.appendChild(slideshow);

	return menuSection;
}

export default menu;