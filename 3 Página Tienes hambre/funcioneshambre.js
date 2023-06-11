window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var btnScrollToTop = document.querySelector(".btnScrollToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToTop.classList.add("show");
  } else {
    btnScrollToTop.classList.remove("show");
  }
}

document.querySelector(".btnScrollToTop").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
