let toggleBtn = document.querySelector(".toggle-menu");
let ulLinks = document.querySelector("nav ul");

toggleBtn.onclick = function (e) {
  e.stopPropagation();

  this.classList.toggle("menu-active");
  ulLinks.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== ulLinks) {
    if (ulLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      ulLinks.classList.toggle("open");
    }
  }
});

ulLinks.onclick = function (e) {
  e.stopPropagation();
}
