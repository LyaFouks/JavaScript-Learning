"use strict";

const modalWindow = document.querySelector(".modal-window");

const overlay = document.querySelector(".overlay");

const btnCloseModalWIndow = document.querySelector(".close-modal-window");

const btnsShowModalWindow = document.querySelectorAll(".show-modal-window");

const showModalWindow = function () {
	modalWindow.classList.remove("hidden");
	// modalWindow.style.display = "block";
	overlay.classList.remove("hidden");
};

const closeModalWindow = function () {
	modalWindow.classList.add("hidden");
	overlay.classList.add("hidden");
};

// Show modal window
for (let i = 0; i < btnsShowModalWindow.length; i++) {
	btnsShowModalWindow[i].addEventListener("click", showModalWindow);
}

// Close modal window

btnCloseModalWIndow.addEventListener("click", closeModalWindow);

overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
	console.log(e.key);

	if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
		closeModalWindow();
	}
});
