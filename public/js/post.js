const postBuilder = async (event) => {
	event.preventDefault();

	const postText = document.querySelector("#postText").value.trim();
	const user = document.querySelector("#username").value.trim();
	if (postText && user) {
		const response = await fetch("/api/posts/post", {
			method: "POST",
			body: JSON.stringify({ postText, user }),
			headers: { "Content-Type": "application/json" },
		});
		console.log(response);

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("Post Error");
		}
	}
};

document.querySelector(".form-post").addEventListener("submit", postBuilder);
