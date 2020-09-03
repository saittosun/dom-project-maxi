// jshint esversion: 9
//  better approach because of performance
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;

// const backdrop = document.body.firstElementChild;
const backdrop = document.getElementById("backdrop");
const cancelMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName("input");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// you can define a function whichever way you want with the function keyword and the declaration approach, with the expression approach where you stored a function in a constant or with the expression approach where you use an arrow function.
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please enter valid values (rating between 1 and 5)");
  }

  // bu refactor edilmis hali
  // for (const el of userInputs) {
  //     if (el.value.trim() === "" || +el.value > 5 || +el.value < 1) {
  //       alert("warn");
  //     }
  // }
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
