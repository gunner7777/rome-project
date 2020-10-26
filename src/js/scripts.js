document.addEventListener("DOMContentLoaded", function () {
  const firstBlock = document.querySelector(".MainBlock");
  const firstBlockHeight = firstBlock.clientHeight;
  const headerNode = document.querySelector(".Header-Outer");

  fixedHeader(headerNode, firstBlockHeight);

  window.addEventListener("scroll", function() {
    fixedHeader(headerNode, firstBlockHeight);
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("LandingNav-Link")) {
      e.preventDefault();
      let blockForScroll = document.getElementById(e.target.dataset.toBlockId);
      blockForScroll.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
});

function fixedHeader(h, fbh) {
  if (pageYOffset > fbh - h.clientHeight) {
    h.classList.add("Header_Fixed");
  } else {
    h.classList.remove("Header_Fixed");
  }
}