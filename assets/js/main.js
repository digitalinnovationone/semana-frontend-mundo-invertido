function switchTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const music = document.getElementById("music");
  if (document.body.classList.contains("dark-theme")) {
    music.src = "assets/musics/inverted-world.mpeg";
  } else {
    music.src = "assets/musics/normal-world.mpeg";
  }

  music.play().catch((error) => {
    console.error("Erro ao reproduzir áudio:", error);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("music");

  if (document.body.classList.contains("dark-theme")) {
    music.src = "assets/musics/inverted-world.mpeg";
  } else {
    music.src = "assets/musics/normal-world.mpeg";
  }

  document.body.addEventListener("click", () => {
    music.play().catch((error) => {
      console.error("Erro ao reproduzir áudio:", error);
    });
  });
});
