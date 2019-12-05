const resetPassword = e => {
	e.preventDefault();
	alert("Reset email has been sent, please check your email. ");
	window.location = "index.html";
}

document.getElementById("resetForm").addEventListener("submit", resetPassword);