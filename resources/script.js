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
	let printvalue = bigNumber(Math.floor(count));
	counter.innerHTML = printvalue;
};

// adds to the value that gets added every half second
button.onclick = addCount;

// Add to the value that will be added every half second
const addToInterval = (valueToAdd) => {
	prSecond += valueToAdd;
	let printvalue = bigNumber(Math.round(prSecond * 100) / 100);
	prSecondCounter.innerHTML = `+ ${printvalue} <wbr>hvert sekund`;
};

// loop every half second
const interval = () => {
	count += prSecond / 2;
	counter.innerHTML = bigNumber(Math.floor(count));
};
setInterval(interval, 500);

// addToInterval(0);
loadItems();
