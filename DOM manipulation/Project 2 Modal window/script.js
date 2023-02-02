"use strict";

const modalWindow = document.querySelector(".modal-window");

const overlay = document.querySelector(".overlay");

const btnCloseModalWIndow = document.querySelector(".close-modal-window");

const btnsShowModalWindow = document.querySelectorAll(".show-modal-window");
console.log(btnsShowModalWindow);

for (let i = 0; i < btnsShowModalWindow.length; i++) {
	console.log(btnsShowModalWindow[i].textContent);
}
