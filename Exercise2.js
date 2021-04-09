const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const draw = document.querySelector(".draw");
const playBtn = document.querySelector(".play-btn");

const openModal = function () {
	modal.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
};

const closeModal = function () {
	openModal();
	draw.textContent = 0;
	playBtn.style.backgroundColor = "#DCDCDC";
	playBtn.style.borderColor = "#808080";
};

playBtn.addEventListener("mousedown", function () {
	this.style.backgroundColor = "#6495ED";
	this.style.borderColor = "#2593be";
});

playBtn.addEventListener("mouseup", function () {
	this.style.backgroundColor = "#0FF";
	this.style.borderColor = "#2593be";
	let random;
	let timerID = setInterval(function () {
		random = Math.ceil(Math.random() * 100001);
		draw.textContent = random;
	}, 100);

	setTimeout(function () {
		clearInterval(timerID);
		document.querySelector(".result").textContent =
			random <= 1000 && random >= 1
				? "Awesome! You have won!"
				: "Too bad! You have lost!";
		openModal();
	}, 5000);
});
document.querySelector(".ok-button").addEventListener("mousedown", function () {
	this.style.borderColor = "#808080";
});
document.querySelector(".ok-button").addEventListener("click", closeModal);

document.querySelector(".x-button").addEventListener("click", closeModal);
