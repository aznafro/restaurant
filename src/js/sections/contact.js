const contact = () => {
	let contactSection = document.createElement("section");
	contactSection.classList.add("contact__section");
	
	// add header
	let contactHeader = document.createElement("h1");
	let headerSpan = document.createElement("span");
	
	contactHeader.classList.add("contact__header");
	headerSpan.classList.add("text");

	headerSpan.textContent = "Contact Us";

	contactHeader.appendChild(headerSpan);
	contactSection.appendChild(contactHeader);

	let row = document.createElement("div");
	let descBox = document.createElement("div");
	let formBox = document.createElement("div");

	row.classList.add("row");
	descBox.classList.add("col-md-1-2");
	formBox.classList.add("col-md-1-2");

	// description box
	let desc = document.createElement("div");
	let descText = document.createElement("p");

	desc.classList.add("contact__desc");
	descText.classList.add("contact__desc--text");

	descText.textContent = "We'd love to hear from you. If you'd like to leave any feedback, comments, or suggestions please send us an email with a little information about yourself!";

	desc.appendChild(descText);	

	// form box
	let form = document.createElement("form");
	let emailInput = document.createElement("input");
	let comment = document.createElement("textarea");
	let send = document.createElement("button");

	form.classList.add("contact__form");

	send.classList.add("contact__form--button");
	send.textContent = "Send";

	emailInput.classList.add("contact__form--input");
	comment.classList.add("contact__form--textarea")

	// set input types
	let emailType = document.createAttribute("type");
	emailType.value = "email";
	emailInput.setAttributeNode(emailType);

	// set input placeholders
	let emailPlaceholder = document.createAttribute("placeholder");
	let commentPlaceholder = document.createAttribute("placeholder");

	emailPlaceholder.value = "Email";
	commentPlaceholder.value = "Comment";

	emailInput.setAttributeNode(emailPlaceholder);
	comment.setAttributeNode(commentPlaceholder);

	// set required
	let emailRequired = document.createAttribute("required");
	let commentRequired = document.createAttribute("required");

	emailRequired.value = true;
	commentRequired.value = true;

	emailInput.setAttributeNode(emailRequired);
	comment.setAttributeNode(commentRequired);

	form.appendChild(emailInput);
	form.appendChild(comment);
	form.appendChild(send);

	descBox.appendChild(desc);
	formBox.appendChild(form);

	row.appendChild(descBox);
	row.appendChild(formBox);

	contactSection.appendChild(row);

	return contactSection;
}

export default contact;