window.onscroll = function(){
  var pos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  if (pos > 200){
    $("#bottom").fadeOut()
  }
  else {
    $("#bottom").fadeIn()
  }
}

function scrolls() {
  $("html, body").animate({
    scrollTop: $("#second").offset().top
}, 1000);
}

function calculateAge(dob) {
  let now = new Date();

  var years = (now.getFullYear() - dob.getFullYear());

  if (now.getMonth() < dob.getMonth() || now.getMonth() == dob.getMonth() && now.getDate() < dob.getDate()) {
    years--;
  }

  return years;
}

document.getElementById("my-age").innerText = calculateAge(new Date(2002, 4, 16));  // My real birthday is 2002/05/16, but JavaScript count months from 0...
