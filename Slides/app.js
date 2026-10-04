(() => {
  const $ = id => document.getElementById(id);
  const catalog = window.SLIDES_CATALOG || [];
  const state = { course: null, lesson: null, slides: [], current: 0, touchStartX: 0, loadedScripts: new Set() };

  function params() { return new URLSearchParams(location.search); }
  function deckKey(course, lesson) { return `${course.id}/${lesson.id}`; }

  function populateCourses() {
    $("courseSelect").innerHTML = catalog.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
    const requested = params().get("disciplina");
    $("courseSelect").value = catalog.some(c => c.id === requested) ? requested : (catalog.find(c => c.lessons.length)?.id || catalog[0]?.id || "");
    populateLessons();
  }

  function populateLessons() {
    const course = catalog.find(c => c.id === $("courseSelect").value);
    const lessons = course?.lessons || [];
    $("lessonSelect").innerHTML = lessons.length
      ? lessons.map(l => `<option value="${l.id}">${l.label} — ${l.title}</option>`).join("")
      : `<option value="">Nenhuma aula cadastrada</option>`;
    const requested = params().get("aula");
    if (lessons.some(l => l.id === requested)) $("lessonSelect").value = requested;
    $("lessonSelect").disabled = !lessons.length;
    $("loadLessonBtn").disabled = !lessons.length;
  }

  function applyTheme(course) {
    document.body.dataset.theme = course.institution;
    $("themeStylesheet").href = `styles/themes/${course.institution}.css`;
    $("brandSymbol").textContent = course.institution === "senai" ? "SENAI" : "FATEC";
  }

  function loadScript(source) {
    if (state.loadedScripts.has(source)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => { state.loadedScripts.add(source); resolve(); };
      script.onerror = () => reject(new Error(`Não foi possível carregar ${source}`));
      document.head.appendChild(script);
    });
  }

  async function loadSelected() {
    const course = catalog.find(c => c.id === $("courseSelect").value);
    const lesson = course?.lessons.find(l => l.id === $("lessonSelect").value);
    if (!course || !lesson) return showEmpty(course);
    applyTheme(course);
    try {
      await loadScript(lesson.source);
      const deck = window.SLIDE_DECKS[deckKey(course, lesson)];
      if (!deck) throw new Error("O arquivo não registrou a apresentação esperada.");
      state.course = course; state.lesson = lesson;
      renderDeck(deck);
      const url = new URL(location.href);
      url.searchParams.set("disciplina", course.id); url.searchParams.set("aula", lesson.id);
      history.replaceState(null, "", `${url.pathname}${url.search}#slide-${state.current + 1}`);
      $("coursePicker").classList.remove("open");
    } catch (error) {
      $("slidesWrapper").innerHTML = `<div class="empty-deck load-error"><h1>Erro ao carregar a aula</h1><p>${error.message}</p></div>`;
    }
  }

  function showEmpty(course) {
    if (course) applyTheme(course);
    $("slidesWrapper").innerHTML = `<div class="empty-deck"><h1>${course?.name || "Slides"}</h1><p>A disciplina já está vinculada ao tema ${course?.institution?.toUpperCase() || "institucional"}, mas ainda não possui aulas no catálogo.</p></div>`;
    state.slides = []; updateNavigation();
  }

  function slideMarkup(slide, index) {
    if (typeof slide === "string") return slide;
    return `<section class="slide" id="slide-${index + 1}"><div class="slide-top"><div class="slide-category">${slide.category || "Conteúdo"}</div><h1 class="slide-title">${slide.title || ""}</h1>${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ""}</div><div class="slide-content">${slide.content || ""}</div></section>`;
  }

  function renderDeck(deck) {
    const rawSlides = Array.isArray(deck.slides) ? deck.slides : [];
    $("slidesWrapper").innerHTML = rawSlides.map(slideMarkup).join("");
    state.slides = [...document.querySelectorAll(".slide")];
    const hashSlide = Number(location.hash.replace("#slide-", ""));
    state.current = hashSlide >= 1 && hashSlide <= state.slides.length ? hashSlide - 1 : 0;
    $("lessonBadge").textContent = `${state.course.code} · ${state.lesson.label}`;
    $("courseName").textContent = state.course.name;
    document.title = `${state.lesson.label}: ${deck.title || state.lesson.title} | ${state.course.name}`;
    buildOverview(); bindLessonWidgets(); updateNavigation();
    if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise();
  }

  function updateNavigation() {
    state.slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === state.current);
      slide.classList.toggle("prev", index < state.current);
      if (index === state.current) slide.scrollTop = 0;
    });
    const total = state.slides.length;
    $("slideCounter").textContent = `${String(total ? state.current + 1 : 0).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    $("prevBtn").disabled = !total || state.current === 0;
    $("nextBtn").disabled = !total || state.current === total - 1;
    $("progressBar").style.width = total > 1 ? `${state.current / (total - 1) * 100}%` : (total ? "100%" : "0%");
    document.querySelectorAll(".overview-item").forEach((item, i) => item.classList.toggle("current", i === state.current));
    if (total) history.replaceState(null, "", `${location.pathname}${location.search}#slide-${state.current + 1}`);
  }

  function goTo(index) { if (index >= 0 && index < state.slides.length) { state.current = index; updateNavigation(); } }
  function buildOverview() {
    $("overviewGrid").innerHTML = state.slides.map((slide, i) => `<button class="overview-item${i === state.current ? " current" : ""}" data-slide="${i}" type="button"><span class="overview-item-num">Slide ${String(i + 1).padStart(2, "0")} · ${slide.querySelector(".slide-category")?.textContent || "Conteúdo"}</span><span class="overview-item-title">${slide.querySelector(".slide-title")?.textContent || ""}</span></button>`).join("");
    document.querySelectorAll(".overview-item").forEach(item => item.onclick = () => { goTo(Number(item.dataset.slide)); $("overviewModal").classList.remove("open"); });
  }

  function bindLessonWidgets() {
    bindEthereumWidgets(); bindAssetWidgets();
    document.dispatchEvent(new CustomEvent("slides:loaded", { detail: { course: state.course, lesson: state.lesson } }));
  }

  function bindEthereumWidgets() {
    const powBtn = $("btnRunPoW"), powScreen = $("powScreen");
    if (powBtn && powScreen) powBtn.onclick = () => {
      powBtn.disabled = true; let nonce = 0; const started = performance.now();
      const timer = setInterval(() => { nonce += Math.floor(Math.random() * 2500) + 1200; powScreen.innerHTML = `⛏ Minerando...<br>Nonce: <strong>${nonce.toLocaleString()}</strong>`; if (nonce > 48000) { clearInterval(timer); powScreen.innerHTML = `<span style="color:#4ade80;font-weight:bold">✓ Bloco minerado</span><br>Nonce: ${nonce.toLocaleString()}<br>Tempo: ${((performance.now()-started)/1000).toFixed(3)}s`; powBtn.disabled = false; } }, 50);
    };
    const posBtn = $("btnRunSlashing"), posScreen = $("posScreen");
    if (posBtn && posScreen) posBtn.onclick = () => posScreen.innerHTML = `<span style="color:#f87171">Alerta: voto duplo detectado.</span><br><strong>Slashing aplicado:</strong> 48 ETH queimados e validador removido.`;
    const base = $("calcBaseFee"), priority = $("calcPriorityFee"), gasType = $("calcGasType");
    const recalc = () => { if (!base || !priority || !gasType) return; const gas = Number(gasType.value), b = Number(base.value), p = Number(priority.value); $("outGasUsed").textContent = gas.toLocaleString(); $("outBaseFee").textContent = `${b.toFixed(1)} Gwei`; $("outPriorityFee").textContent = `${p.toFixed(1)} Gwei`; $("outTotalFeeEth").textContent = `${(gas*(b+p)*1e-9).toFixed(6)} ETH`; $("outBurnEth").textContent = `${(gas*b*1e-9).toFixed(6)} ETH`; $("outValidatorEth").textContent = `${(gas*p*1e-9).toFixed(6)} ETH`; };
    [base, priority].forEach(x => x?.addEventListener("input", recalc)); gasType?.addEventListener("change", recalc); recalc();

    const stepButton = $("btnEvmStep"), resetButton = $("btnEvmReset");
    const instructions = [
      ["PUSH1 2", 3, s => s.stack.push(2)], ["PUSH1 25", 3, s => s.stack.push(25)], ["PUSH1 10", 3, s => s.stack.push(10)],
      ["ADD", 3, s => s.stack.push(s.stack.pop() + s.stack.pop())], ["MUL", 5, s => s.stack.push(s.stack.pop() * s.stack.pop())],
      ["PUSH1 1", 3, s => s.stack.push(1)], ["SSTORE", 100, s => { const slot=s.stack.pop(), value=s.stack.pop(); s.storage[slot]=value; }], ["STOP", 0, () => {}]
    ];
    let evm;
    const renderEvm = message => { if (!$("evmStack")) return; $("evmStack").textContent = evm.stack.length ? `[ ${evm.stack.join(", ")} ]` : "[] (Pilha vazia)"; $("evmStorage").textContent = Object.entries(evm.storage).map(([k,v]) => `Slot 0x0${k}: ${v}`).join(" | ") || "{} (Storage vazio)"; $("evmGas").textContent = `${evm.gas} Gas`; $("evmPc").textContent = `PC: ${evm.pc} / ${instructions.length}`; if (message) $("evmLog").innerHTML += `<div>${message}</div>`; };
    const resetEvm = () => { evm = { pc:0, gas:500, stack:[], storage:{} }; if ($("evmLog")) $("evmLog").innerHTML = "Mini-EVM inicializada."; if (stepButton) stepButton.disabled=false; renderEvm(); };
    if (stepButton && resetButton) { stepButton.onclick = () => { if (evm.pc >= instructions.length) return; const [op,cost,run] = instructions[evm.pc]; evm.gas -= cost; run(evm); evm.pc++; renderEvm(`<strong>${op}</strong> · ${cost} Gas`); if (evm.pc === instructions.length) stepButton.disabled=true; }; resetButton.onclick=resetEvm; resetEvm(); }
  }

  function bindAssetWidgets() {
    const statuses = ["Registrado", "Em trânsito", "Entregue"]; let asset = { status: 0, custodian: "Armazém A", version: 1 };
    const render = () => { if (!$("demoStatus")) return; $("demoStatus").textContent = statuses[asset.status]; $("demoCustodian").textContent = asset.custodian; $("demoVersion").textContent = asset.version; $("demoLog").innerHTML = `Evento <strong>AssetStatusChanged</strong>(1001, "${statuses[asset.status]}", ${asset.version})`; };
    $("advanceAsset")?.addEventListener("click", () => { if (asset.status < 2) { asset.status++; asset.version++; asset.custodian = asset.status === 1 ? "Transportadora B" : "Cliente C"; render(); } });
    $("resetAsset")?.addEventListener("click", () => { asset = { status: 0, custodian: "Armazém A", version: 1 }; render(); }); render();
    const updateToken = () => { const units = Number($("calcToken")?.value || 500), pct = units / 100; if ($("tokenResult")) $("tokenResult").textContent = `${pct.toFixed(2).replace(".", ",")}%`; if ($("tokenValue")) $("tokenValue").textContent = `R$ ${(units*10).toLocaleString("pt-BR", {minimumFractionDigits:2})}`; if ($("tokenVisual")) $("tokenVisual").style.background = `linear-gradient(90deg,var(--primary) ${pct}%,#e2e8f0 ${pct}%)`; };
    $("calcToken")?.addEventListener("input", updateToken); updateToken();
    document.querySelectorAll(".quiz-btn").forEach(btn => btn.onclick = () => { const chain = btn.dataset.answer === "chain"; if ($("quizResult")) { $("quizResult").textContent = chain ? "Bom candidato: várias organizações compartilham o registro." : "Banco de dados: existe um administrador natural do sistema."; $("quizResult").style.background = chain ? "#166534" : "#1e40af"; } });
  }

  $("courseSelect").onchange = populateLessons;
  $("loadLessonBtn").onclick = loadSelected;
  $("openPickerBtn").onclick = () => $("coursePicker").classList.toggle("open");
  $("closePickerBtn").onclick = () => $("coursePicker").classList.remove("open");
  $("prevBtn").onclick = () => goTo(state.current - 1); $("nextBtn").onclick = () => goTo(state.current + 1);
  $("overviewBtn").onclick = () => $("overviewModal").classList.toggle("open"); $("closeOverviewBtn").onclick = () => $("overviewModal").classList.remove("open");
  $("shortcutsBtn").onclick = () => $("shortcutsModal").classList.toggle("open"); $("closeShortcutsBtn").onclick = () => $("shortcutsModal").classList.remove("open");
  $("fullscreenBtn").onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  document.addEventListener("keydown", e => { if (["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)) return; if (["ArrowRight","ArrowDown"," ","PageDown"].includes(e.key)) { e.preventDefault(); goTo(state.current+1); } else if (["ArrowLeft","ArrowUp","PageUp"].includes(e.key)) { e.preventDefault(); goTo(state.current-1); } else if (e.key === "Home") goTo(0); else if (e.key === "End") goTo(state.slides.length-1); else if (e.key.toLowerCase() === "o") $("overviewModal").classList.toggle("open"); else if (e.key.toLowerCase() === "a") $("coursePicker").classList.toggle("open"); else if (e.key.toLowerCase() === "f") $("fullscreenBtn").click(); else if (e.key === "?" || e.key === "/") $("shortcutsModal").classList.toggle("open"); else if (e.key === "Escape") document.querySelectorAll(".open").forEach(x => x.classList.remove("open")); });
  document.addEventListener("touchstart", e => state.touchStartX = e.changedTouches[0].screenX, {passive:true});
  document.addEventListener("touchend", e => { const delta = state.touchStartX - e.changedTouches[0].screenX; if (Math.abs(delta)>45) goTo(state.current + (delta>0?1:-1)); }, {passive:true});

  populateCourses(); loadSelected();
})();
