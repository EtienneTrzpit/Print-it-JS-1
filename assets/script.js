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

const banner = document.querySelector(".banner-img");
const text = document.querySelector(".banner-text");

let numberSlide = 0;

// changement du HTML pour l'image et le texte
function changeSlide(numberSlide) {
  // changement image
  banner.src = "assets/images/slideshow/" + slides[numberSlide].image;

  //changement du texte
  text.innerHTML = slides[numberSlide].tagLine;
}

document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    //changement de la classe dot_selected
    let dotSelected = document.querySelector(".dot_selected");
    dotSelected.classList.remove("dot_selected");
    let dotNext = dotSelected.nextElementSibling;
    let dotPrev = dotSelected.previousElementSibling;
    if (dotNext && arrow.classList.contains("arrow_right")) {
      dotNext.classList.add("dot_selected");
    } else if (dotPrev && arrow.classList.contains("arrow_left")) {
      dotPrev.classList.add("dot_selected");
    } else if (!dotNext && arrow.classList.contains("arrow_right")) {
      document.querySelector(".dot:first-child").classList.add("dot_selected");
    } else if (!dotPrev && arrow.classList.contains("arrow_left")) {
      document.querySelector(".dot:last-child").classList.add("dot_selected");
    }

    //trouver la bonne slide
    if (numberSlide == 3 && arrow.classList.contains("arrow_right")) {
      numberSlide = 0;
    } else if (numberSlide == 0 && arrow.classList.contains("arrow_left")) {
      numberSlide = 3;
    } else if (arrow.classList.contains("arrow_right")) {
      numberSlide++;
    } else if (arrow.classList.contains("arrow_left")) {
      numberSlide--;
    }

    //changement de slide
    changeSlide(numberSlide);
  });
});
