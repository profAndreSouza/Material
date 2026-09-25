/**
 * BANCO DE DADOS I — ENGINE DE NAVEGAÇÃO DOS SLIDES
 * Suporte a Teclado, Fullscreen, Visão Geral (Grid), Barra de Progresso e Touch
 */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const progressBar = document.getElementById('progress-bar');
  const slideCounter = document.getElementById('slide-counter');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const btnOverview = document.getElementById('btn-overview');
  const overviewModal = document.getElementById('overview-modal');
  const overviewGrid = document.getElementById('overview-grid');
  const btnCloseOverview = document.getElementById('btn-close-overview');

  let currentSlideIndex = 0;
  const totalSlides = slides.length;

  // Inicializa índice via Hash da URL se houver (ex: #slide-4)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const parsed = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
      currentSlideIndex = parsed - 1;
    }
  }

  // Gera os cartões no modal de visão geral (Overview)
  function buildOverviewGrid() {
    overviewGrid.innerHTML = '';
    slides.forEach((slide, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === currentSlideIndex ? 'current' : ''}`;
      
      const titleElem = slide.querySelector('.slide-title, .cover-title');
      const titleText = titleElem ? titleElem.innerText.replace(/\n/g, ' ') : `Slide ${idx + 1}`;
      
      const categoryElem = slide.querySelector('.category-tag');
      const catText = categoryElem ? categoryElem.innerText : 'Aula 01';

      card.innerHTML = `
        <div class="overview-num">${catText} • #${String(idx + 1).padStart(2, '0')}</div>
        <div class="overview-title">${titleText}</div>
      `;

      card.addEventListener('click', () => {
        goToSlide(idx);
        closeOverview();
      });

      overviewGrid.appendChild(card);
    });
  }

  function updateSlide(newIndex) {
    if (newIndex < 0 || newIndex >= totalSlides) return;

    // Desativa slide atual
    slides[currentSlideIndex].classList.remove('active');

    // Atualiza índice
    currentSlideIndex = newIndex;

    // Ativa novo slide
    slides[currentSlideIndex].classList.add('active');

    // Rola para o topo do slide caso tenha rolagem interna
    slides[currentSlideIndex].scrollTop = 0;

    // Atualiza Progresso e Contador
    const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    slideCounter.innerText = `${String(currentSlideIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;

    // Atualiza botões de navegação
    btnPrev.disabled = currentSlideIndex === 0;
    btnNext.disabled = currentSlideIndex === totalSlides - 1;

    // Atualiza URL hash de forma limpa
    history.replaceState(null, null, `#slide-${currentSlideIndex + 1}`);

    // Atualiza seleção no Overview se estiver aberto
    document.querySelectorAll('.overview-card').forEach((c, idx) => {
      if (idx === currentSlideIndex) c.classList.add('current');
      else c.classList.remove('current');
    });
  }

  function nextSlide() {
    if (currentSlideIndex < totalSlides - 1) {
      updateSlide(currentSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (currentSlideIndex > 0) {
      updateSlide(currentSlideIndex - 1);
    }
  }

  function goToSlide(index) {
    updateSlide(index);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Erro ao ativar tela cheia: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function openOverview() {
    buildOverviewGrid();
    overviewModal.classList.add('active');
  }

  function closeOverview() {
    overviewModal.classList.remove('active');
  }

  function toggleOverview() {
    if (overviewModal.classList.contains('active')) {
      closeOverview();
    } else {
      openOverview();
    }
  }

  // Event Listeners dos Botões
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);
  btnFullscreen.addEventListener('click', toggleFullscreen);
  btnOverview.addEventListener('click', toggleOverview);
  btnCloseOverview.addEventListener('click', closeOverview);

  // Navegação por Teclado
  document.addEventListener('keydown', (e) => {
    // Se o modal de overview estiver aberto, 'Escape' fecha
    if (overviewModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeOverview();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
      case 'l':
      case 'L':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
      case 'h':
      case 'H':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;

      case 'End':
        e.preventDefault();
        goToSlide(totalSlides - 1);
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        toggleFullscreen();
        break;

      case 'o':
      case 'O':
      case 'g':
      case 'G':
        e.preventDefault();
        toggleOverview();
        break;
    }
  });

  // Suporte a Touch / Swipe em dispositivos móveis
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide(); // Swipe para a esquerda -> Próximo
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide(); // Swipe para a direita -> Anterior
    }
  }

  // Inicializa o primeiro slide
  updateSlide(currentSlideIndex);
});
