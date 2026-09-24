/* ==============================================================================
   ISI022 - AULA 02 SLIDE DECK INTERACTION CONTROLLER
   Navegação por Teclado, Touch, Modal de Visão Geral e Simuladores ao Vivo
   ============================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Elementos da UI
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const counterEl = document.getElementById("slideCounter");
  const progressBar = document.getElementById("progressBar");
  const overviewBtn = document.getElementById("overviewBtn");
  const overviewModal = document.getElementById("overviewModal");
  const closeOverviewBtn = document.getElementById("closeOverviewBtn");
  const overviewGrid = document.getElementById("overviewGrid");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const shortcutsBtn = document.getElementById("shortcutsBtn");
  const shortcutsModal = document.getElementById("shortcutsModal");
  const closeShortcutsBtn = document.getElementById("closeShortcutsBtn");

  // 1. Inicializar do Hash da URL ou localStorage
  function getInitialSlide() {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#slide-")) {
      const num = parseInt(hash.replace("#slide-", ""), 10);
      if (!isNaN(num) && num >= 1 && num <= totalSlides) {
        return num - 1;
      }
    }
    return 0;
  }

  // 2. Atualizar Estado Visual do Slide Deck
  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("active", "prev");
      if (index === currentSlide) {
        slide.classList.add("active");
        // Rolar o topo do slide ativo
        slide.scrollTop = 0;
      } else if (index < currentSlide) {
        slide.classList.add("prev");
      }
    });

    // Atualizar Contador
    const currentNum = String(currentSlide + 1).padStart(2, "0");
    const totalNum = String(totalSlides).padStart(2, "0");
    counterEl.textContent = `${currentNum} / ${totalNum}`;

    // Atualizar Botões
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;

    // Atualizar Barra de Progresso
    const progressPercent = (currentSlide / (totalSlides - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Atualizar Hash na URL
    window.history.replaceState(null, "", `#slide-${currentSlide + 1}`);

    // Atualizar destaque no Overview Grid
    const overviewItems = document.querySelectorAll(".overview-item");
    overviewItems.forEach((item, idx) => {
      item.classList.toggle("current", idx === currentSlide);
    });
  }

  // Navegação
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlides();
    }
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  }

  function goToSlide(index) {
    if (index >= 0 && index < totalSlides) {
      currentSlide = index;
      updateSlides();
    }
  }

  // Listeners dos Botões Principais
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // 3. Navegação por Teclado
  document.addEventListener("keydown", (e) => {
    // Ignorar teclas se foco estiver em input ou slider
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      return;
    }

    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " " || e.key === "PageDown") {
      e.preventDefault();
      nextSlide();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
      e.preventDefault();
      prevSlide();
    } else if (e.key === "Home") {
      e.preventDefault();
      goToSlide(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goToSlide(totalSlides - 1);
    } else if (e.key.toLowerCase() === "f") {
      toggleFullscreen();
    } else if (e.key.toLowerCase() === "o" || e.key.toLowerCase() === "g") {
      toggleOverview();
    } else if (e.key === "?" || e.key === "/") {
      toggleShortcuts();
    } else if (e.key === "Escape") {
      overviewModal.classList.remove("open");
      shortcutsModal.classList.remove("open");
    }
  });

  // 4. Suporte a Gestos Touch (Mobile / Tablet)
  let touchStartX = 0;
  let touchEndX = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  // 5. Tela Cheia (Fullscreen)
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Erro ao ativar tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }
  fullscreenBtn.addEventListener("click", toggleFullscreen);

  // 6. Modal de Visão Geral (Overview Grid)
  function toggleOverview() {
    overviewModal.classList.toggle("open");
  }
  overviewBtn.addEventListener("click", toggleOverview);
  closeOverviewBtn.addEventListener("click", () => overviewModal.classList.remove("open"));

  // Construir itens do Overview dinamicamente
  function buildOverviewGrid() {
    overviewGrid.innerHTML = "";
    slides.forEach((slide, idx) => {
      const titleEl = slide.querySelector(".slide-title");
      const categoryEl = slide.querySelector(".slide-category");
      const titleText = titleEl ? titleEl.textContent : `Slide ${idx + 1}`;
      const catText = categoryEl ? categoryEl.textContent : "Conteúdo";

      const item = document.createElement("div");
      item.className = `overview-item ${idx === currentSlide ? "current" : ""}`;
      item.innerHTML = `
        <span class="overview-item-num">Slide ${String(idx + 1).padStart(2, "0")} · ${catText}</span>
        <span class="overview-item-title">${titleText}</span>
      `;
      item.addEventListener("click", () => {
        goToSlide(idx);
        overviewModal.classList.remove("open");
      });
      overviewGrid.appendChild(item);
    });
  }

  // 7. Modal de Atalhos
  function toggleShortcuts() {
    shortcutsModal.classList.toggle("open");
  }
  shortcutsBtn.addEventListener("click", toggleShortcuts);
  closeShortcutsBtn.addEventListener("click", () => shortcutsModal.classList.remove("open"));

  // Fechar modais ao clicar no backdrop
  [overviewModal, shortcutsModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  });

  // Inicializar estado
  currentSlide = getInitialSlide();
  buildOverviewGrid();
  updateSlides();

  // ==============================================================================
  // WIDGETS INTERATIVOS AO VIVO NOS SLIDES
  // ==============================================================================

  // Widget 1: Simulador PoW
  const powBtn = document.getElementById("btnRunPoW");
  const powScreen = document.getElementById("powScreen");
  if (powBtn && powScreen) {
    powBtn.addEventListener("click", () => {
      powBtn.disabled = true;
      powScreen.innerHTML = `<span style="color:#eab308;">⛏️ Minerando bloco #102 com dificuldade = 4 zeros...</span><br>`;
      
      let nonce = 0;
      const target = "0000";
      const startTime = performance.now();
      
      const interval = setInterval(() => {
        nonce += Math.floor(Math.random() * 2500) + 1200;
        powScreen.innerHTML = `⛏️ Testando força bruta...<br>Nonce atual: <strong>${nonce.toLocaleString()}</strong><br>Hash candidata: <span style="color:#94a3b8;">${dummyHash(nonce)}</span>`;
        
        // Simular encontrar a solução
        if (nonce > 48000) {
          clearInterval(interval);
          const elapsed = ((performance.now() - startTime) / 1000).toFixed(3);
          const validHash = "00005a37dc0a39c5b8f47b1d3d712d92cc96394f0ae058a9e754ae68748c8d57";
          powScreen.innerHTML = `
            <span style="color:#4ade80; font-weight:bold;">✅ BLOCO MINERADO COM SUCESSO!</span><br>
            • <strong>Nonce Válido Encontrado:</strong> ${nonce.toLocaleString()}<br>
            • <strong>Hash Final (SHA-256):</strong> ${validHash}<br>
            • <strong>Tempo Decorrido:</strong> ${elapsed}s de trabalho computacional.<br>
            <span style="color:#38bdf8;">→ Prova de Trabalho transmitida e aceita por todos os nós P2P!</span>
          `;
          powBtn.disabled = false;
        }
      }, 50);
    });
  }

  function dummyHash(seed) {
    const chars = "0123456789abcdef";
    let res = "";
    for (let i = 0; i < 64; i++) {
      res += chars[(seed * (i + 1) * 31) % chars.length];
    }
    return res;
  }

  // Widget 2: Simulador PoS Slashing
  const posBtn = document.getElementById("btnRunSlashing");
  const posScreen = document.getElementById("posScreen");
  if (posBtn && posScreen) {
    posBtn.addEventListener("click", () => {
      posScreen.innerHTML = `
        <span style="color:#eab308;">🔍 Monitorando atestações da época 42 (Slot 12)...</span><br>
        • Validador <strong>Node_Beta</strong> (Stake: 96 ETH) emitiu atestação para Bloco A.<br>
        <span style="color:#f87171;">🚨 ALERTA: Segundo voto detectado do MESMO validador para Bloco B no mesmo slot!</span><br><br>
        <strong style="color:#ef4444; font-size:13px;">🔥 PROVA BIZANTINA CONFIRMADA -> APLICANDO SLASHING:</strong><br>
        • Colateral apreendido: <strong>48.0 ETH (50% do stake queimado)</strong>.<br>
        • Saldo residual: 48.0 ETH.<br>
        • Status: <span style="color:#ef4444;">Ejetado compulsória e irrevogavelmente do comitê de consenso!</span>
      `;
    });
  }

  // Widget 3: Calculadora Interativa EIP-1559
  const sliderBaseFee = document.getElementById("calcBaseFee");
  const sliderPriorityFee = document.getElementById("calcPriorityFee");
  const selectGasType = document.getElementById("calcGasType");
  const outGasUsed = document.getElementById("outGasUsed");
  const outBaseFee = document.getElementById("outBaseFee");
  const outPriorityFee = document.getElementById("outPriorityFee");
  const outTotalFeeEth = document.getElementById("outTotalFeeEth");
  const outBurnEth = document.getElementById("outBurnEth");
  const outValidatorEth = document.getElementById("outValidatorEth");

  function recalculateGas() {
    if (!sliderBaseFee) return;
    const gasUsed = parseInt(selectGasType.value, 10);
    const baseFeeGwei = parseFloat(sliderBaseFee.value);
    const priorityFeeGwei = parseFloat(sliderPriorityFee.value);

    outGasUsed.textContent = gasUsed.toLocaleString();
    outBaseFee.textContent = `${baseFeeGwei.toFixed(1)} Gwei`;
    outPriorityFee.textContent = `${priorityFeeGwei.toFixed(1)} Gwei`;

    const effectivePriceGwei = baseFeeGwei + priorityFeeGwei;
    const totalWei = gasUsed * effectivePriceGwei * 1e9;
    const burnWei = gasUsed * baseFeeGwei * 1e9;
    const valWei = gasUsed * priorityFeeGwei * 1e9;

    outTotalFeeEth.textContent = `${(totalWei / 1e18).toFixed(6)} ETH`;
    outBurnEth.textContent = `${(burnWei / 1e18).toFixed(6)} ETH`;
    outValidatorEth.textContent = `${(valWei / 1e18).toFixed(6)} ETH`;
  }

  if (sliderBaseFee && sliderPriorityFee && selectGasType) {
    sliderBaseFee.addEventListener("input", recalculateGas);
    sliderPriorityFee.addEventListener("input", recalculateGas);
    selectGasType.addEventListener("change", recalculateGas);
    recalculateGas();
  }

  // Widget 4: Mini-EVM Step Runner
  const btnEvmStep = document.getElementById("btnEvmStep");
  const btnEvmReset = document.getElementById("btnEvmReset");
  const evmStackEl = document.getElementById("evmStack");
  const evmStorageEl = document.getElementById("evmStorage");
  const evmGasEl = document.getElementById("evmGas");
  const evmPcEl = document.getElementById("evmPc");
  const evmLogEl = document.getElementById("evmLog");

  const evmInstructions = [
    { op: "PUSH1 2", gas: 3, action: (s, st) => s.push(2), desc: "Empilha o multiplicador 2" },
    { op: "PUSH1 25", gas: 3, action: (s, st) => s.push(25), desc: "Empilha o valor 25" },
    { op: "PUSH1 10", gas: 3, action: (s, st) => s.push(10), desc: "Empilha o valor 10" },
    { op: "ADD", gas: 3, action: (s, st) => { const a = s.pop(); const b = s.pop(); s.push(a + b); }, desc: "Soma 10 + 25 = 35" },
    { op: "MUL", gas: 5, action: (s, st) => { const a = s.pop(); const b = s.pop(); s.push(a * b); }, desc: "Multiplica 35 * 2 = 70" },
    { op: "PUSH1 1", gas: 3, action: (s, st) => s.push(1), desc: "Empilha o slot de memória 0x01" },
    { op: "SSTORE", gas: 100, action: (s, st) => { const slot = s.pop(); const val = s.pop(); st[slot] = val; }, desc: "Grava 70 no Storage permanente [Slot 0x01]!" },
    { op: "STOP", gas: 0, action: (s, st) => {}, desc: "Finaliza a execução do contrato" }
  ];

  let evmState = {
    pc: 0,
    gasRemaining: 500,
    stack: [],
    storage: {}
  };

  function updateEvmUI(logMsg = "") {
    if (!evmStackEl) return;
    evmStackEl.textContent = evmState.stack.length > 0 ? `[ ${evmState.stack.join(", ")} ]` : "[] (Pilha Vazia)";
    
    const storageEntries = Object.entries(evmState.storage).map(([k, v]) => `Slot 0x0${k}: ${v}`);
    evmStorageEl.textContent = storageEntries.length > 0 ? storageEntries.join(" | ") : "{} (Storage Vazio)";
    
    evmGasEl.textContent = `${evmState.gasRemaining} Gas`;
    evmPcEl.textContent = `PC: ${evmState.pc} / ${evmInstructions.length}`;
    if (logMsg) {
      evmLogEl.innerHTML += `<div>${logMsg}</div>`;
      evmLogEl.scrollTop = evmLogEl.scrollHeight;
    }
  }

  function resetEvm() {
    evmState = {
      pc: 0,
      gasRemaining: 500,
      stack: [],
      storage: {}
    };
    if (evmLogEl) evmLogEl.innerHTML = `<span style="color:#64748b;">Mini-EVM inicializada. Clique em 'Passo Seguinte (Step)' para executar instrução por instrução.</span>`;
    if (btnEvmStep) btnEvmStep.disabled = false;
    updateEvmUI();
  }

  if (btnEvmStep && btnEvmReset) {
    btnEvmStep.addEventListener("click", () => {
      if (evmState.pc < evmInstructions.length) {
        const item = evmInstructions[evmState.pc];
        evmState.gasRemaining -= item.gas;
        item.action(evmState.stack, evmState.storage);
        evmState.pc++;
        updateEvmUI(`<span style="color:#38bdf8;">PC ${evmState.pc - 1}:</span> <strong>${item.op}</strong> -> ${item.desc} (Gasto: ${item.gas} Gas)`);
        
        if (evmState.pc >= evmInstructions.length) {
          updateEvmUI(`<span style="color:#4ade80; font-weight:bold;">🏁 Execução finalizada! Total de Gas Utilizado: ${500 - evmState.gasRemaining} unidades.</span>`);
          btnEvmStep.disabled = true;
        }
      }
    });

    btnEvmReset.addEventListener("click", resetEvm);
    resetEvm();
  }
});
