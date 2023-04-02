"use strict";
//Selecting all input fields

const nameField = document.querySelector("#name");
const numField = document.querySelector("#number");
const monthField = document.querySelector("#mm");
const yearField = document.querySelector("#yy");
const cvcField = document.querySelector("#cvc");

//Selecting update fields

//Number Span selectors for card numbers
const span1_4 = document.querySelector("#thisone");
const span5_8 = document.querySelector("#thistwo");
const span9_12 = document.querySelector("#thisthree");
const span13_16 = document.querySelector("#thisfour");

//Selector for name on card
const nameUpdate = document.querySelector(".cardname");

//Selector for Exp date on card
const expDate = document.querySelector(".cardexp");

//Selector for Security Number at back
const backCVC = document.querySelector("#sec-text");

//Selector for Submit Button
const submitEntry = document.querySelector("#submit");

//Selector for Active State Section
const activePanel = document.querySelector("form");

//Selector for Complete State Section
const completePanel = document.querySelector(".complete");
// EVENT LISTENERS ON INPUT FIELDS

nameField.addEventListener("input", updateName);
numField.addEventListener("input", updateNum);
monthField.addEventListener("input", updateMM);
yearField.addEventListener("input", updateMM);
cvcField.addEventListener("input", updateCVC);

// Event Listener on Submit Button
submitEntry.addEventListener("click", toggleState);

function toggleState(e) {
  e.preventDefault();
  if (
    nameField.value == "" ||
    numField.value == "" ||
    monthField.value == "" ||
    yearField.value == "" ||
    cvcField.value == ""
  ) {
    alert("Please enter card details before submitting");
  } else {
    activePanel.classList.toggle("hide");
    completePanel.style.display = "block";
    completePanel.classList.toggle("show");
  }
}

//Event Listener on Continue Button
const continueBtn = document.getElementById("continue");

continueBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //Reset Fields
  nameField.value = "";
  numField.value = "";
  monthField.value = "";
  yearField.value = "";
  cvcField.value = "";

  //Reset card values
  span1_4.textContent = "0000";
  span5_8.textContent = "0000";
  span9_12.textContent = "0000";
  span13_16.textContent = "0000";
  nameUpdate.textContent = "JANE APPLESEED";
  expDate.textContent = "00/00";
  backCVC.textContent = "000";

  //Apply Class and style
  completePanel.style.display = "none";
  completePanel.classList.toggle("show");
  activePanel.classList.toggle("hide");
  activePanel.classList.toggle("show");
});

//Other functions begin here

function updateNum() {
  let txt = numField.value.padEnd(16, "0");
  span1_4.textContent = txt.slice(0, 4);
  span5_8.textContent = txt.slice(4, 8);
  span9_12.textContent = txt.slice(8, 12);
  span13_16.textContent = txt.slice(12, 16);
}

function updateName() {
  let txt = nameField.value;
  nameUpdate.textContent = txt;
}

function getFieldMMYY() {
  let txt1 = monthField.value.padStart(2, 0);
  let txt2 = yearField.value.padStart(2, 0);
  return [txt1, txt2];
}
function updateMM() {
  let [txt1, txt2] = getFieldMMYY();
  expDate.textContent = `${txt1}/${txt2}`;
}

function updateCVC() {
  let txt = cvcField.value;
  backCVC.textContent = txt;
}
