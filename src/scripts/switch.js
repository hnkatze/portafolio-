const switchButton = document.querySelector("#switch");
const skill = document.querySelector("#skills");
const favo = document.querySelector("#favo");
const allSkills = document.querySelector("#allSkills");
const allFavo = document.querySelector("#FavoriteSkills");

switchButton.addEventListener("click", () => {
  if (switchButton.checked) {
    // Mostrar habilidades y ocultar favoritos
    skill.classList.add("active");
    favo.classList.remove("active");
    allSkills.classList.add("activeContent");
    allSkills.classList.remove("hiddenContent");

    allFavo.classList.remove("activeContent");
    allFavo.classList.add("hiddenContent");
  } else {
    // Mostrar favoritos y ocultar habilidades
    favo.classList.add("active");
    skill.classList.remove("active");
    allFavo.classList.add("activeContent");
    allFavo.classList.remove("hiddenContent");

    allSkills.classList.remove("activeContent");
    allSkills.classList.add("hiddenContent");
  }
});
