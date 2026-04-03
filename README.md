# 🌐 Mundo Invertido - Semana Front-end DIO

Desafio de projeto da [Digital Innovation One (DIO)](https://www.dio.me/) — Semana Front-end. Uma página temática inspirada na série Stranger Things, com alternância entre o mundo normal e o Mundo Invertido.

## 🚀 Sobre o Projeto

Uma jornada para quem não tem medo do desconhecido. O caminho para o Mundo Invertido é incerto, repleto de obstáculos e perigos. Porém, a recompensa é grande: salvar Hawkings e o mundo todo das garras de Vecna. Você está preparado(a)?

### Funcionalidades

- Alternância de tema (Mundo Normal / Mundo Invertido) com persistência via `localStorage`
- Música ambiente que muda conforme o tema ativo
- Formulário de inscrição no Clube D&D com validação
- Layout responsivo para desktop, tablet e mobile
- Animações e transições suaves na troca de tema

## 💻 Tecnologias

- HTML5
- CSS3 (Flexbox, CSS Variables, Media Queries, `clamp()`)
- JavaScript (DOM, localStorage)

## 📁 Estrutura do Projeto

```
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    ├── images/
    │   ├── backgrounds/
    │   ├── banner/
    │   ├── characters/
    │   ├── content/
    │   └── footer/
    └── musics/
        ├── inverted-world.mpeg
        └── normal-world.mpeg
```

## 💬 Assuntos abordados

- **HTML** — Estruturação semântica, acessibilidade, SEO
- **CSS** — Flexbox, pseudo-elementos, variáveis CSS, responsividade
- **JavaScript** — Manipulação do DOM, localStorage, validação de formulário

## 🎨 Variáveis do Tema CSS
```css
/*** VARIABLES & THEMES ***/

:root {
  --primary-color: #cf0f0f;
  --primary-color-contrast: #ffffff;
  --field-background-color: #000;
}

.light-theme {
  --page-background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 65%,
    rgba(255, 255, 255, 0.75) 100%
  );
  --header-background-color: #e3e3e3;
  --highlight-color: #000000;
  --featured-font-family: "Archivo", sans-serif;
  --character-top-image-src: url("../images/characters/kids-on-the-bike.svg");
  --character-top-image-color: #ffffff;
  --character-bottom-image-src: url("../images/characters/inverted-world-monster.svg");
  --character-bottom-image-color: #e5e5e5;
  --background-lamp-image: url("../images/backgrounds/lamps.png");
  --footer-background-color: #b5bbbf;
}

.dark-theme {
  --page-background: linear-gradient(
    180deg,
    #050000 0%,
    #130404 65%,
    rgba(19, 1, 1, 0.75) 100%
  );
  --header-background-color: #220f0f;
  --highlight-color: #ffffff;
  --featured-font-family: "Rubik Glitch", sans-serif;
  --character-bottom-image-src: url("../images/characters/kids-on-the-bike.svg");
  --character-bottom-image-color: rgba(255, 255, 255, 0.1);
  --character-top-image-src: url("../images/characters/inverted-world-monster.svg");
  --character-top-image-color: #000;
  --background-lamp-image: url("../images/backgrounds/lamps-inverted.png");
  --footer-background-color: #000;
}
```
## 🔗 Links auxiliares

- [DIO - Digital Innovation One](https://www.dio.me/)
- [Figma do Projeto](https://www.figma.com/file/I3Q42CcVUziRN3iMfTrbfb/Stranger-Things?node-id=0%3A1)
- [Demo Original](https://micheleambrosio.github.io/semana-frontend-mundo-invertido/)

## 🏆 Créditos

Projeto base desenvolvido pelos instrutores da DIO na Semana Front-end:

- **Diogo Mainardes** — [GitHub](https://github.com/diogomainardes) | [LinkedIn](https://www.linkedin.com/in/diogomainardes/)
- **Michele Ambrosio** — [GitHub](https://github.com/micheleambrosio) | [LinkedIn](https://www.linkedin.com/in/michele-ambrosio-a4899661/)
- **Renan Johannsen** — [GitHub](https://github.com/RenanJPaula) | [LinkedIn](https://www.linkedin.com/in/renanjpaula/)