const cards = [
  { number: 1 },
  { number: 1 },
  { number: 2 },
  { number: 2 },
  { number: 3 },
  { number: 3 },
  { number: 4 },
  { number: 4 },
  { number: 5 },
  { number: 5 },
  { number: 6 },
  { number: 6 },
  { number: 7 },
  { number: 7 },
  { number: 8 },
  { number: 8 },
];
let flippedCards = [];
let matchedPairs = 0;
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}



function tayyorla() {
  const doska = document.getElementById("doska");
  const raqamlar = shuffle(cards);
  raqamlar.map((e) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
     <div class="card-inner">
                    <div class="front"></div>
                    <div class="back">${e.number}</div>
                </div>
    `;
    doska.appendChild(div);
    div.addEventListener("click", aylan);
  });
}
tayyorla();

function aylan() {
  if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
    this.classList.toggle("flipped");
    flippedCards.push(this);
    if (flippedCards.length==2) {
      tekshir();
    }
  }
}

function tekshir() {
  const [card1, card2] = flippedCards;
  if (
    card1.querySelector(".back").textContent ==
    card2.querySelector(".back").textContent
  ) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === cards.length / 2) {
      xabarChiqar("Siz yutdingiz!");
    }
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
      xabarChiqar("Yana xarakat qilib ko'ring!!");
    }, 1000);
  }
}

function xabarChiqar(message) {
  const p = document.getElementById("result");
  p.textContent = message;
  setTimeout(() => {
    p.textContent = "";
  }, 2000);
}



const restart=document.getElementById("restart");
restart.addEventListener('click',()=>{
  location.reload();
})
