const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const modeButton = document.querySelector(".material-symbols-outlined");
const body = document.querySelector("body");
const h1 = document.querySelector("h1")

// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();

// Ham Icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// darkmode
modeButton.addEventListener('click', () => {
	// modeButton.textContent = 'sunny'
	if (modeButton.textContent.includes('dark_mode')) {
		body.style.background = "#212121";
		body.style.color = "#fff";
		h1.style.color = "#fff";
		body.style.transition = '2s';
		modeButton.textContent = 'sunny';
	}else {
		body.style.background = '#f7f7f8';
		body.style.color = '#212121';
		body.style.h1 = "#212121";
		modeButton.textContent = 'dark_mode';
		h1.style.color = "#212121";
		body.style.transition = '2s';
	}
})

// coutner

// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
	// Check if the counter value is stored in localStorage
	if (localStorage.counter) {
	  // If the value exists, update the counter element with its value
	  document.getElementById("counter").textContent = localStorage.counter;
	} else {
	  // If the value doesn't exist, initialize the counter in localStorage with 0
	  localStorage.counter = 0;
	}

	// Increment the counter value and update the counter element
	function incrementCounter() {
	  localStorage.counter++;
	  document.getElementById("counter").textContent = localStorage.counter;
	}

	// Call the incrementCounter function whenever the page is visited
	incrementCounter();
  } else {
	// If localStorage is not supported, display an error message
	document.getElementById("counter").textContent = "localStorage is not supported.";
  }