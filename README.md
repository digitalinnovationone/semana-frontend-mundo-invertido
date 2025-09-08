# 🎮 Mundo Invertido - Stranger Things

> **Projeto desenvolvido durante o curso "Ri Happy - Front-end do Zero #2" da DIO**

Uma experiência web imersiva inspirada na série Stranger Things, onde os usuários podem alternar entre o mundo normal e o mundo invertido, explorando diferentes visuais, sons e interações.

## 🚀 Demonstração

[🔗 Ver projeto ao vivo](https://devalex-full.github.io/semana-frontend-mundo-invertido/) <!-- Substitua pelo link do seu GitHub Pages -->

## ✨ Funcionalidades

- **🌗 Alternância de Temas**: Troca dinâmica entre tema claro (Mundo Normal) e tema escuro (Mundo Invertido)
- **🎵 Áudio Ambiente**: Música tema que muda conforme o mundo selecionado
- **🖼️ Galeria Interativa**: Imagens com efeitos hover e animações
- **📱 Design Responsivo**: Totalmente adaptado para dispositivos móveis
- **🎬 Trailer Integrado**: Vídeo do YouTube incorporado
- **📝 Formulário de Inscrição**: Sistema para ingressar no "Clube D&D"
- **⚡ Animações**: Efeitos de transição suaves e partículas flutuantes
- **♿ Acessibilidade**: Implementação de ARIA labels e roles

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com:
  - CSS Grid e Flexbox
  - CSS Variables para temas
  - Animações e transições
  - Media queries para responsividade
  - Backdrop-filter e box-shadow
- **JavaScript (ES6+)**: Funcionalidades interativas:
  - Manipulação do DOM
  - Event listeners
  - Intersection Observer API
  - Validação de formulários

### Recursos Externos
- **Google Fonts**: Tipografias personalizadas (Archivo, Libre Baskerville, Rubik Glitch)
- **YouTube API**: Incorporação de vídeo

## 📁 Estrutura do Projeto

```
mundo-invertido/
├── index.html              # Página principal
├── src/
│   ├── css/
│   │   ├── reset.css       # Reset de estilos
│   │   └── main.css        # Estilos principais
│   ├── js/
│   │   └── main.js         # Lógica JavaScript
│   ├── images/
│   │   ├── banner/         # Imagens do cabeçalho
│   │   ├── characters/     # Personagens
│   │   ├── content/        # Conteúdo das seções
│   │   └── footer/         # Imagens do rodapé
│   └── musics/
│       ├── normal-world.mpeg    # Música tema normal
│       └── inverted-world.mpeg  # Música tema invertido
└── README.md
```

## 🎯 Principais Características

### Sistema de Temas Dinâmicos
```javascript
function switchTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-theme');
  // Lógica de alternância de tema, música e elementos visuais
}
```

### CSS Variables para Consistência
```css
:root {
  --primary-color: #cf0f0f;
  --primary-color-contrast: #000000;
  --field-background-color: #ffffff;
}

.dark-theme {
  --primary-color: #cf0f0f;
  --primary-color-contrast: #ffffff;
  --field-background-color: #000000;
}
```

### Animações e Efeitos Visuais
- Elementos com `filter: invert()` para alternância visual
- Animações CSS com `@keyframes`
- Efeitos de hover interativos
- Sistema de partículas em JavaScript
- Parallax scroll no header

## 🚀 Como Executar

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/mundo-invertido.git
cd mundo-invertido
```

2. **Abra o projeto**
```bash
# Usando Live Server (recomendado)
# Ou simplesmente abra o index.html no navegador
open index.html
```

3. **Explore as funcionalidades**
   - Clique em "Inverter Mundos" para alternar temas
   - Navegue pelas seções e interaja com os elementos
   - Teste o formulário de inscrição

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first** e inclui:

- **Desktop**: Layout completo com sidebar e efeitos visuais
- **Tablet**: Adaptação para telas médias
- **Mobile**: Interface otimizada para telas pequenas

Breakpoints utilizados:
- `768px` para tablets
- `480px` para smartphones

## 🎨 Paleta de Cores

### Tema Claro (Mundo Normal)
- **Primária**: `#cf0f0f` (Vermelho Stranger Things)
- **Texto**: `#000000` (Preto)
- **Background**: `#ffffff` (Branco)
- **Gradiente**: `#f0f0f0` → `#d0d0d0`

### Tema Escuro (Mundo Invertido)
- **Primária**: `#cf0f0f` (Vermelho)
- **Texto**: `#ffffff` (Branco)
- **Background**: `#000000` (Preto)
- **Gradiente**: `#0c0c0c` → `#2e2e2e`

## 🔧 Funcionalidades Implementadas

### Core Features
- [x] Alternância de temas com JavaScript
- [x] Reprodução de áudio ambiente
- [x] Formulário funcional com validação
- [x] Galeria de imagens interativa
- [x] Vídeo incorporado do YouTube

### Melhorias Adicionais
- [x] Sistema de partículas
- [x] Efeito parallax
- [x] Animações de entrada (Intersection Observer)
- [x] Validação de email
- [x] Feedback visual nos formulários
- [x] Efeitos de hover avançados

## 🎓 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos de:

- **HTML Semântico**: Uso correto de tags e atributos de acessibilidade
- **CSS Avançado**: Flexbox, Grid, animações, pseudo-elementos
- **JavaScript Moderno**: ES6+, DOM manipulation, APIs nativas
- **Design Responsivo**: Mobile-first, media queries
- **UX/UI**: Transições suaves, feedback visual, interatividade
- **Acessibilidade**: ARIA labels, roles, navegação por teclado

## 🌟 Destaques Técnicos

1. **Performance**: Uso de `will-change` e `transform` para animações otimizadas
2. **Acessibilidade**: Implementação de ARIA e roles semânticos
3. **Modularidade**: CSS bem estruturado com variáveis
4. **Interatividade**: JavaScript vanilla sem dependências externas
5. **Visual**: Efeitos modernos com backdrop-filter e box-shadow

## 🚧 Melhorias Futuras

- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar mais personagens e easter eggs
- [ ] Sistema de pontuação para o clube D&D
- [ ] Integração com APIs externas
- [ ] Modo de alto contraste
- [ ] Suporte a temas personalizados

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais durante o curso da DIO.

## 🎖️ Agradecimentos

- [Digital Innovation One (DIO)](https://dio.me) pela oportunidade de aprendizado
- **Ri Happy** pelo patrocínio do curso
- Comunidade **Stranger Things** pela inspiração
- Instrutores e colegas de turma pelo suporte
