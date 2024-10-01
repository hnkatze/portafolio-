import { submitFormData } from "../lib/config";
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

function openModal() {
  dialog.showModal();
}

function closeModal() {
  dialog.close();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  const formData = {
    name: name,
    email: email,
    message: message,
  };
  await submitFormData(formData);
  closeModal();
});

document.getElementById("openModalButton").addEventListener("click", openModal);
