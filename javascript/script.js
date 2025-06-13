document.addEventListener("DOMContentLoaded", () => {
  // Simula envio de formulário de criação de conta
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email")?.value;
      const password = document.getElementById("password")?.value;
      if (email && password) {
        alert("Conta criada com sucesso! Bem-vindo(a) " + email);
        window.location.href = "home.html";
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }

  const saveButton = document.querySelector("button.btn");
  if (saveButton && saveButton.textContent.trim().toLowerCase() === "save") {
    saveButton.addEventListener("click", () => {
      alert("Seu look foi salvo com sucesso!");
    });
  }

  const dragZone = document.querySelector(".drag-zone");
  if (dragZone) {
    dragZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragZone.style.borderColor = "#000";
    });

    dragZone.addEventListener("dragleave", () => {
      dragZone.style.borderColor = "#ccc";
    });

    dragZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dragZone.innerHTML = "<p>Item adicionado!</p>";
      dragZone.style.borderColor = "#ccc";
    });
  }
});
