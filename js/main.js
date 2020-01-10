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