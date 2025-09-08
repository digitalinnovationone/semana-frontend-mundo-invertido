// Função principal para alternar entre os temas
function switchTheme() {
  const body = document.querySelector('body');
  const button = document.getElementById('switch-theme-button');
  const audio = document.getElementById('music');

  console.log('Botão clicado!'); // Para debug

  // Verifica o tema atual e alterna
  if (body.classList.contains('dark-theme')) {
    // Mudando para tema claro (Mundo Normal)
    body.classList.remove('dark-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema light');
    button.textContent = 'Inverter Mundos';
    console.log('Mudou para tema claro');
    
    // Troca a música para mundo normal
    if (audio) {
      audio.innerHTML = '<source src="./src/musics/normal-world.mpeg" aria-details="Audio do site" />';
      audio.load();
      audio.play().catch(e => console.log('Autoplay bloqueado'));
    }
  } else {
    // Mudando para tema escuro (Mundo Invertido)
    body.classList.add('dark-theme');
    body.setAttribute('aria-label', 'O site está utilizando o tema dark');
    button.textContent = 'Voltar ao Mundo Normal';
    console.log('Mudou para tema escuro');
    
    // Troca a música para mundo invertido
    if (audio) {
      audio.innerHTML = '<source src="./src/musics/inverted-world.mpeg" aria-details="Audio do site" />';
      audio.load();
      audio.play().catch(e => console.log('Autoplay bloqueado'));
    }
  }
}

// Disponibiliza a função globalmente
window.switchTheme = switchTheme;

// Função para lidar com o formulário
function handleSubscription() {
  const name = document.getElementById('txtName').value;
  const email = document.getElementById('txtEmail').value;
  const level = document.getElementById('txtLevel').value;
  const character = document.getElementById('txtCharacter').value;

  // Validação básica
  if (!name || !email || !level || !character) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Validação de email simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, digite um email válido!');
    return;
  }

  // Simula inscrição bem-sucedida
  alert(`Bem-vindo ao Clube D&D, ${name}! Sua inscrição foi realizada com sucesso. Prepare-se para enfrentar o Mundo Invertido!`);
  
  // Limpa o formulário
  document.getElementById('txtName').value = '';
  document.getElementById('txtEmail').value = '';
  document.getElementById('txtLevel').value = '';
  document.getElementById('txtCharacter').value = '';
}

// Adiciona efeitos de hover e interatividade
function addInteractiveEffects() {
  // Efeito parallax no scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    
    if (header) {
      header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Efeito de hover nas imagens da galeria
  const galleryImages = document.querySelectorAll('.gallery-image');
  galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
      image.style.filter = 'brightness(1.3) contrast(1.2)';
    });
    
    image.addEventListener('mouseleave', () => {
      image.style.filter = 'brightness(1) contrast(1)';
    });
  });

  // Animação de entrada dos elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observa seções para animação de entrada
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado'); // Para debug
  
  // Adiciona event listener alternativo para o botão
  const switchButton = document.getElementById('switch-theme-button');
  if (switchButton) {
    // Remove o onclick anterior e adiciona novo event listener
    switchButton.removeAttribute('onclick');
    switchButton.addEventListener('click', switchTheme);
    console.log('Event listener adicionado ao botão');
  } else {
    console.log('Botão não encontrado!');
  }

  // Adiciona event listener para o botão de inscrição
  const subscribeButton = document.getElementById('btnSubscribe');
  if (subscribeButton) {
    subscribeButton.addEventListener('click', handleSubscription);
  }

  // Adiciona efeitos interativos
  addInteractiveEffects();

  // Configura o áudio inicial
  const audio = document.getElementById('music');
  if (audio) {
    audio.volume = 0.3; // Volume mais baixo
    audio.loop = true;
  }

  // Efeito de typing no texto principal
  const headerText = document.querySelector('.header-content p');
  if (headerText) {
    const originalText = headerText.textContent;
    headerText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        headerText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
});

// Efeito de partículas (opcional)
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '-1';
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = 'rgba(207, 15, 15, 0.5)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`;
    particlesContainer.appendChild(particle);
  }
}

// Adiciona CSS para animação das partículas
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-20px) rotate(180deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Cria partículas quando a página carrega
window.addEventListener('load', createParticles);