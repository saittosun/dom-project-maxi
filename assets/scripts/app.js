// jshint esversion: 9
//  better approach because of performance
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;



// you can define a function whichever way you want with the function keyword and the declaration approach, with the expression approach where you stored a function in a constant or with the expression approach where you use an arrow function.
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
