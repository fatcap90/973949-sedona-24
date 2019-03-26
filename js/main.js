function FormOpenOrClose() {
	console.log("ФУНКЦИЯ РАБОТАЕТ");
	const element = document.getElementById("form");
	console.log(element);
	element.classList.toggle("form-hidden");
}