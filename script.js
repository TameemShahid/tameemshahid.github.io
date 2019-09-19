var submitButton = document.getElementById("submitButton");

submitButton.onclick = function() {
	var thankyouMessage = document.getElementById("thankyouDiv");
	thankyouMessage.classList.toggle("changeDisplay");
}