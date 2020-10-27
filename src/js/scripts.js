function TopscrollTo() {
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 300);
      TopscrollTo();
    }, 20);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const firstBlockHeight = 600;
  const goToUp = document.querySelector(".GoToUp");
  const headerNode = document.querySelector(".Header-Outer");

  fixedHeader(headerNode);
  goToUpButton(goToUp, firstBlockHeight);

  window.addEventListener("scroll", function() {
    fixedHeader(headerNode);
    goToUpButton(goToUp, firstBlockHeight);
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("LandingNav-Link")) {
      e.preventDefault();
      let blockForScroll = document.getElementById(e.target.dataset.toBlockId);
      blockForScroll.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
});

function fixedHeader(h) {
  if (pageYOffset > 10) {
    h.classList.add("Header_Fixed");
  } else {
    h.classList.remove("Header_Fixed");
  }
}

function goToUpButton(gtu, fbh) {
  if (pageYOffset > fbh) {
    gtu.classList.add("GoToUp_Show");
  } else {
    gtu.classList.remove("GoToUp_Show");
  }
}