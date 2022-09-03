import "./faIcons.js";


window.addEventListener("scroll", () => {
  let pos = window.scrollY;

  if (pos > 200) {
    document.getElementById("bottom").classList.add("invisible");
  } else {
    document.getElementById("bottom").classList.remove("invisible");
  }
});


document.getElementById("year").innerText = new Date().getFullYear().toString();


function calculateAge(dob) {
  let now = new Date();

  let years = (now.getFullYear() - dob.getFullYear());

  if (now.getMonth() < dob.getMonth() || now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate()) {
    years--;
  }

  return years;
}

document.getElementById("my-age").innerText = calculateAge(new Date(2002, 4, 16));  // My real birthday is 2002/05/16, but JavaScript count months from 0...
