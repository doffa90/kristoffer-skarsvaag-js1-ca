const form = document.querySelector("#contactForm");
form.addEventListener("submit", checkForm);

function checkForm(event) {
	const firstName = document.querySelector("#firstName");
	const lastName = document.querySelector("#lastName");
	const email = document.querySelector("#email");
	const message = document.querySelector("#message");

	const firstNameValue = firstName.value;
	const lastNameValue = lastName.value;
	const emailString = email.value;
	const messageString = message.value;

	event.preventDefault();
	console.log("The form was submitted");

	if (checkInput(firstNameValue) === true) {
		firstName.nextElementSibling.style.display = "none";
	} else {
		firstName.nextElementSibling.style.display = "block";
	}

	if (checkInput(lastNameValue) === true) {
		lastName.nextElementSibling.style.display = "none";
	} else {
		lastName.nextElementSibling.style.display = "block";
	}

	if (checkInput(emailString) === true) {
		email.nextElementSibling.style.display = "none";
		if (validateEmail(emailString) === true) {
			email.nextElementSibling.nextElementSibling.style.display = "none";
		} else {
			email.nextElementSibling.nextElementSibling.style.display = "block";
		}
	} else {
		email.nextElementSibling.style.display = "block";
		email.nextElementSibling.nextElementSibling.style.display = "none";
	}

	if (checkInputMsg(messageString) === true) {
		message.nextElementSibling.style.display = "none";
	} else {
		message.nextElementSibling.style.display = "block";
	}
}

function checkInput(input) {
	const trimmedInput = input.trim();

	if (trimmedInput.length > 0) {
		return true;
	} else {
		return false;
	}
}

function checkInputMsg(input) {
	const trimmedInput = input.trim();

	if (trimmedInput.length < 10) {
		return false;
	} else {
		return true;
	}
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	return regEx.test(email);
}
