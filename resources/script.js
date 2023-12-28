// Toggle the menu on mobile
const toggleButton = document.querySelector("#toggle");

const toggleMenu = () => {
	const upgrades = document.querySelector(".upgrades");
	upgrades.classList.toggle("hidden");
};

toggleButton.onclick = toggleMenu;

let count = 0; // how much the user has
let prSecond = 0; // how much gets added every half second
let toAdd = 1; // what gets added every click

const counter = document.querySelector("#counter");
const prSecondCounter = document.querySelector("#perSecond");
const button = document.querySelector("#clicker");

// Adds to count when user clicks the button
const addCount = () => {
	console.log("click");
	count += toAdd;
	let printvalue = Math.floor(count);
	counter.innerHTML = printvalue;
};

button.onclick = addCount;

// Add to the value that will be added every half second
const addToInterval = (valueToAdd) => {
	prSecond += valueToAdd;
	let printvalue = Math.round(prSecond * 100) / 100;
	prSecondCounter.innerHTML = `+ ${printvalue} hvert sekund`;
};

// loop every half second
const interval = () => {
	count += prSecond / 2;
	counter.innerHTML = count.toFixed(0);
};
setInterval(interval, 500);

// addToInterval(0);
loadItems();
