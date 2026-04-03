const themeButton = document.getElementById("switch-theme-button");
const body = document.body;
const musicPlayer = document.getElementById("music");
const btnSubscribe = document.getElementById("btnSubscribe");

// --- Theme ---

function switchTheme() {
  const isDark = body.classList.contains("dark-theme");

  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  // Trocar música de acordo com o tema
  const source = musicPlayer.querySelector("source");
  source.src = isDark
    ? "assets/musics/normal-world.mpeg"
    : "assets/musics/inverted-world.mpeg";
  musicPlayer.load();
  musicPlayer.play().catch(() => {});

  // Salvar preferência
  localStorage.setItem("theme", isDark ? "light" : "dark");
}

function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    const source = musicPlayer.querySelector("source");
    source.src = "assets/musics/inverted-world.mpeg";
    musicPlayer.load();
  }
}

themeButton.addEventListener("click", switchTheme);
loadTheme();

// --- Formulário ---

btnSubscribe.addEventListener("click", function () {
  const name = document.getElementById("txtName");
  const email = document.getElementById("txtEmail");
  const level = document.getElementById("txtLevel");
  const character = document.getElementById("txtCharacter");

  const fields = [name, email, level, character];
  let valid = true;

  fields.forEach((field) => {
    if (!field.value.trim()) {
      field.style.borderColor = "#ff0";
      valid = false;
    } else {
      field.style.borderColor = "";
    }
  });

  if (!valid) {
    alert("Preencha todos os campos!");
    return;
  }

  // Validação simples de e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    email.style.borderColor = "#ff0";
    alert("Insira um e-mail válido!");
    return;
  }

  alert("Inscrição realizada com sucesso! Bem-vindo ao Clube D&D!");

  fields.forEach((field) => {
    field.value = "";
    field.style.borderColor = "";
  });
});
