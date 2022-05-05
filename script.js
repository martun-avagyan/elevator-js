// Sorting algorithm: bubble sort

// Elevator written with promises that will be used to simulate an elevator system.
// The elevator will be able to move up and down, and will be able to stop at floors.
// The elevator will be able to be controlled by a user.
// Whenever a button is pressed, the elevator will move to that floor.
// If multiple buttons are pressed, the elevator will move to the first pressed floor.
// if the elevator is going up and the user presses a button, the elevator will stop at the floor.

const firstFloor = document.querySelector(".elevator-floor-1");
const secondFloor = document.querySelector(".elevator-floor-2");
const thirdFloor = document.querySelector(".elevator-floor-3");
const fourthFloor = document.querySelector(".elevator-floor-4");
const fifthFloor = document.querySelector(".elevator-floor-5");
const allFloors = document.querySelectorAll(".elevator-floor");

const floors = [firstFloor, secondFloor, thirdFloor, fourthFloor, fifthFloor];
const activeFloor = floors.filter((e) =>
  e.classList.contains("elevator-active")
)[0];
function makeActive(floor) {
  allFloors.forEach((el) => el.classList.remove("elevator-active"));
  floor.target.classList.add("elevator-active");
}

floors.forEach((e) => e.addEventListener("click", makeActive));

console.log(activeFloor.classList);
