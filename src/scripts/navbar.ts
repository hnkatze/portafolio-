window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar") as HTMLElement;

  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
