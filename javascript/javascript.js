//  input
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearIn = document.getElementById("year");

// outputs
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

// form element
const form = document.querySelector("form");

// adding the submit eventlistenter to form
form.addEventListener("sjubmit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validate = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerHTML = "this field is required.";
      validate = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerHTML =
        "must be a valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerHTML = "this field is requried.";
      validator = false;
    } 
  });
}
