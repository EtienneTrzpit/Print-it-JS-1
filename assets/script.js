const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let numberSlide = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const banner = document.querySelector(".banner-img");
const text = document.querySelector(".banner-text");
arrowLeft.addEventListener("click", (e) => {
  console.log("left");
  //changement de la classe dot_selected
  const dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  const dot = dotSelected.previousElementSibling;
  if (dot) {
    dot.classList.add("dot_selected");
  } else {
    document.querySelector(".dot:last-child").classList.add("dot_selected");
  }

  //trouver la bonne slide
  if (numberSlide == 0) {
    numberSlide = 3;
  } else {
    numberSlide--;
  }
  //changement de slide
  changeSlide(numberSlide);
});
arrowRight.addEventListener("click", (e) => {
  console.log("right");
  //changement de la classe dot_selected
  const dotSelected = document.querySelector(".dot_selected");
  dotSelected.classList.remove("dot_selected");
  const dot = dotSelected.nextElementSibling;
  if (dot) {
    dot.classList.add("dot_selected");
  } else {
    document.querySelector(".dot:first-child").classList.add("dot_selected");
  }

  //trouver la bonne slide
  if (numberSlide == 3) {
    numberSlide = 0;
  } else {
    numberSlide++;
  }
  //changement de slide
  changeSlide(numberSlide);
});

// changement du HTML pour l'image et le texte
function changeSlide(numberSlide) {
  // changement image
  banner.src = "assets/images/slideshow/" + slides[numberSlide].image;

  //changement du texte
  text.innerHTML = slides[numberSlide].tagLine;
}
