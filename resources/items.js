const loadItems = () => {
	const itemList = document.querySelector("#items");
	for (let item of Object.values(items)) {
		let itemDiv = document.createElement("li");
		itemDiv.id = `${item.name.toLowerCase()}Pris`;
		itemDiv.innerHTML = `
            <img src="resources/images/upgrades/${item.image}" alt="${item.name}">
            <h2>${item.name} - Pris ${displayPrice(item.price)}</h2>
            <h3>Antal: ${item.count}</h3>
            <p>${item.description}</p>
        `;
		itemDiv.onclick = () => purchase(item);
		itemList.appendChild(itemDiv);
		item.priceTag = itemDiv;
	}
};

const purchase = (item) => {
	console.log("købt" + item.name);
	if (count >= item.price) {
		item.count++;
		count -= item.price;
		item.price = Math.floor(item.price * 1.25);
		item.priceTag.children[1].innerHTML = `${item.name} - Pris ${displayPrice(item.price)}`;
		item.priceTag.children[2].innerHTML = `Antal: ${item.count}`;
		addToInterval(item.value);
	}
};

const displayPrice = (value) => {
	let printvalue = Math.round(value * 100) / 100;
	return printvalue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const items = {
	rumhund: {
		name: "Rum hund",
		description: "Hyr en rum til at hjælpe dig med at udforske planeten",
		price: 10,
		value: 0.3,
		priceTag: null,
		count: 0,
		image: "spacedog.png",
	},
	astronaut: {
		name: "Astronaut",
		description: "Hyt en astronaut til at hjælpe dig med at samle sten",
		price: 50,
		value: 1,
		priceTag: null,
		count: 0,
		image: "astronaut.png",
	},
	bil: {
		name: "Bil",
		description: "Byg en bil så du kan komme hurtigere rundt",
		price: 1000,
		value: 10,
		priceTag: null,
		count: 0,
		image: "car.png",
	},
	lilleBase: {
		name: "Lille base",
		description: "Byg en lille base til at studere stenene du samler op",
		price: 5000,
		value: 50,
		priceTag: null,
		count: 0,
		image: "smallbase.png",
	},
	raket: {
		name: "Raket",
		description: "Send en raket afsted for at samle rumstøv",
		price: 10000,
		value: 125,
		priceTag: null,
		count: 0,
		image: "rocket.png",
	},
	satelit: {
		name: "Satelit",
		description: "Send en satelit afsted for at skabe bedre radiosignal",
		price: 50000,
		value: 200,
		priceTag: null,
		count: 0,
		image: "satelite.png",
	},
	mellemBase: {
		name: "Mellem base",
		description: "Byg en mellem base for at skabe bedre forhold for dine arbejdere",
		price: 200000,
		value: 750,
		priceTag: null,
		count: 0,
		image: "mediumbase.png",
	},
	microscope: {
		name: "Mikroskop",
		description: "Køb et mikroskop til at studere bakterier fundet på planeten",
		price: 1000000,
		value: 1500,
		priceTag: null,
		count: 0,
		image: "microscope.png",
	},
	alien: {
		name: "Alien",
		description: "Du har fundet en alien!",
		price: 5000000,
		value: 5000,
		priceTag: null,
		count: 0,
		image: "alien.png",
	},
};
