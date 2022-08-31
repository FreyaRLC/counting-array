"use strict";

const myArray = [];
let counter = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
  counter = myArray.length;
  myArray.unshift(counter++);
  console.log(myArray.slice(0, 9));
  setTimeout(init, 800);
}
