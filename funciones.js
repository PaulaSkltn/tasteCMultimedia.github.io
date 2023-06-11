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

document.addEventListener('DOMContentLoaded', function() {
  var cookieBanner = document.getElementById('cookie-banner');
  var acceptButton = document.getElementById('accept-cookies');

  var cookieAccepted = getCookie('cookiesAccepted');
  if (!cookieAccepted) {
    cookieBanner.classList.remove('hidden');
  }

  
  acceptButton.addEventListener('click', function() {
    
    document.cookie = 'cookiesAccepted=true; expires=' + new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString();
    cookieBanner.classList.add('hidden');
  });

  
  function getCookie(name) {
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split('=');
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
});


