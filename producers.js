const producersData = [
  { image: "../assets/images/producers/producer1.png", alt: "eaier" },
  { image: "../assets/images/producers/producer2.png", alt: "foryard" },
  { image: "../assets/images/producers/producer3.png", alt: "fujicon" },
  {
    image: "../assets/images/producers/producer4.png",
    alt: "js artificial grass",
  },
  { image: "../assets/images/producers/producer5.png", alt: "marquis" },
];

const producersContainer = document.getElementById("producers-container");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

function renderCards() {
  producersContainer.innerHTML = "";

  producersData.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("producer-card");

    const img = document.createElement("img");
    img.classList.add("producer-img");
    img.src = data.image;
    img.alt = data.alt;

    card.appendChild(img);
    producersContainer.appendChild(card);

    setTimeout(() => {
      card.classList.add("visible");
    }, index * 100);
  });
}

function shiftCards(direction) {
  const cards = document.querySelectorAll(".producer-card");
  cards.forEach((card) => {
    card.classList.remove("visible");
  });

  if (direction === "left") {
    const first = producersData.shift();
    producersData.push(first);
  } else if (direction === "right") {
    const last = producersData.pop();
    producersData.unshift(last);
  }

  setTimeout(() => {
    renderCards();
  }, 500);
}

arrowLeft.addEventListener("click", () => shiftCards("left"));
arrowRight.addEventListener("click", () => shiftCards("right"));

renderCards();
