const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");

let isChickenVisible;

let people = [
	{
		photo:
			'url("https://img.freepik.com/free-photo/portrait-serious-smiling-modern-indian-man-near-office-building_496169-2890.jpg?w=996&t=st=1660296729~exp=1660297329~hmac=78fe4f91b1a3c96d79ebff81fdfb048e2a6cdb044b4425bbe9856acc1657c295")',
		name: "Amalesh",
		profession: "Web Developer",
		description:
			"Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
	},

	{
		photo:
			"url('https://img.freepik.com/free-photo/businessman-young-elegant-businessman-with-cup-hands_259150-58620.jpg?size=626&ext=jpg&uid=R76408775&ga=GA1.2.297755401.1654855810')",
		name: "Akil Prasad",
		profession: "Model",
		description:
			"I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
	},

	{
		photo:
			"url('https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&uid=R76408775&ga=GA1.2.297755401.1654855810')",
		name: "Justin",
		profession: "Business Man",
		description:
			"Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
	},

	{
		photo:
			"url('https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=900&t=st=1660297048~exp=1660297648~hmac=a179cdc972460453891c3d33b1d7d5761744ffada3b46466357756170a8e481a')",
		name: "Hanna",
		profession: "Proffessional Worker",
		description:
			"Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

// surpriseMeBtn.addEventListener("click", () => {
// 	if (chicken.style.opacity === "0") {
// 		chicken.style.opacity = "1";
// 		imgDiv.classList.add("move-head");
// 		surpriseMeBtn.innerText = "Remove the chicken";
// 		surpriseMeBtn.classList.remove("surprise-me-btn");
// 		surpriseMeBtn.classList.add("hide-chicken-btn");
// 		isChickenVisible = true;
// 	} else if (chicken.style.opacity === "1") {
// 		chicken.style.opacity = "0";
// 		imgDiv.classList.remove("move-head");
// 		surpriseMeBtn.innerText = "Surprise me";
// 		surpriseMeBtn.classList.add("surprise-me-btn");
// 		surpriseMeBtn.classList.remove("hide-chicken-btn");
// 		isChickenVisible = false;
// 	}
// });

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
