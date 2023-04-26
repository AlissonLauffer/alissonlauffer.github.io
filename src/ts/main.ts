import "./faIcons.ts";


let bottom = document.getElementById("bottom");

let yearSpan = document.getElementById("year");
let ageSpan = document.getElementById("my-age");

window.addEventListener("scroll", () => {
  let pos = window.scrollY;

  if (pos > 200) {
    bottom.classList.add("invisible");
  } else {
    bottom.classList.remove("invisible");
  }
});


if (yearSpan) {
  yearSpan.innerText = new Date().getFullYear().toString();
}


function calculateAge(dob: Date) {
  let now = new Date();

  let years = (now.getFullYear() - dob.getFullYear());

  if (now.getMonth() < dob.getMonth() || now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate()) {
    years--;
  }

  return years;
}

if (ageSpan) {
  ageSpan.innerText = calculateAge(new Date(2002, 4, 16)).toString();  // My real birthday is 2002/05/16, but JavaScript count months from 0...
}
