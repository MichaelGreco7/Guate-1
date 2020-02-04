// select both Buttons
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// select with images with variable container
const container = document.querySelector(".images");

// The value
let counter = 0;

//Add event listner
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Changes slide
function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
  // For next slide we will always add 1 value
  if (counter === 11) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
}

// Changes slide
function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
  // For next slide we will always add 1 value
  if (counter === 0) {
    counter = 12;
  }
  counter--;
  container.style.backgroundImage = `url(img/bcg-${counter}.jpg`;
}
