const signupFormHandler = async (event) => {
	event.preventDefault();

	const username = document.querySelector("#username").value.trim();
	const email = document.querySelector("#inputEmail").value.trim();
	const password = document.querySelector("#inputpassword1").value.trim();
	const password2 = document.querySelector("#inputpassword2").value.trim();

	if (password !== password2) {
		alert("Passwords do not match.");
		return;
	}

	if (username && email && password) {
		const response = await fetch("/api/users/create", {
			method: "POST",
			body: JSON.stringify({ username, email, password }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("Create Account Error");
		}
	}
};

document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
