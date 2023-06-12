var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("arrow").style.opacity = "1"; // Mostra la freccia
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("arrow").style.opacity = "0"; // Nascondi la freccia
  }
  prevScrollpos = currentScrollPos;
};

// Codice per lo scroll verso l'alto
document.getElementById("arrow").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
