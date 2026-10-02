document.addEventListener("DOMContentLoaded", () => {
  const slides = [...document.querySelectorAll(".slide")];
  let current = 0;
  const $ = id => document.getElementById(id);
  const update = () => {
    slides.forEach((s,i) => { s.classList.toggle("active",i===current); s.classList.toggle("prev",i<current); if(i===current)s.scrollTop=0; });
    $("slideCounter").textContent = `${String(current+1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
    $("prevBtn").disabled=current===0; $("nextBtn").disabled=current===slides.length-1;
    $("progressBar").style.width = `${slides.length>1 ? current/(slides.length-1)*100 : 100}%`;
    history.replaceState(null,"",`#slide-${current+1}`);
    document.querySelectorAll(".overview-item").forEach((x,i)=>x.classList.toggle("current",i===current));
  };
  const go = n => { if(n>=0&&n<slides.length){current=n;update();} };
  const hash=Number(location.hash.replace("#slide-","")); if(hash>=1&&hash<=slides.length)current=hash-1;
  $("prevBtn").onclick=()=>go(current-1); $("nextBtn").onclick=()=>go(current+1);
  const overview=$("overviewModal"), shortcuts=$("shortcutsModal");
  $("overviewBtn").onclick=()=>overview.classList.toggle("open"); $("closeOverviewBtn").onclick=()=>overview.classList.remove("open");
  $("shortcutsBtn").onclick=()=>shortcuts.classList.toggle("open"); $("closeShortcutsBtn").onclick=()=>shortcuts.classList.remove("open");
  $("fullscreenBtn").onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
  const grid=$("overviewGrid");
  slides.forEach((s,i)=>{const x=document.createElement("div");x.className="overview-item";x.innerHTML=`<span class="overview-item-num">Slide ${String(i+1).padStart(2,"0")} · ${s.querySelector(".slide-category")?.textContent||"Conteúdo"}</span><span class="overview-item-title">${s.querySelector(".slide-title")?.textContent||""}</span>`;x.onclick=()=>{go(i);overview.classList.remove("open")};grid.appendChild(x)});
  document.addEventListener("keydown",e=>{if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))return; if(["ArrowRight","ArrowDown"," ","PageDown"].includes(e.key)){e.preventDefault();go(current+1)}else if(["ArrowLeft","ArrowUp","PageUp"].includes(e.key)){e.preventDefault();go(current-1)}else if(e.key==="Home")go(0);else if(e.key==="End")go(slides.length-1);else if(e.key.toLowerCase()==="o")overview.classList.toggle("open");else if(e.key.toLowerCase()==="f")$("fullscreenBtn").click();else if(e.key==="?"||e.key==="/")shortcuts.classList.toggle("open");else if(e.key==="Escape"){overview.classList.remove("open");shortcuts.classList.remove("open")}});
  let sx=0;document.addEventListener("touchstart",e=>sx=e.changedTouches[0].screenX,{passive:true});document.addEventListener("touchend",e=>{const d=sx-e.changedTouches[0].screenX;if(Math.abs(d)>45)go(current+(d>0?1:-1))},{passive:true});

  const states=["Registrado","Em trânsito","Entregue"];
  let asset={id:1001,status:0,custodian:"Armazém A",version:1};
  const renderAsset=()=>{if(!$("demoStatus"))return;$("demoStatus").textContent=states[asset.status];$("demoCustodian").textContent=asset.custodian;$("demoVersion").textContent=asset.version;$("demoLog").innerHTML=`Evento <strong>AssetStatusChanged</strong>(${asset.id}, "${states[asset.status]}", ${asset.version})`};
  $("advanceAsset")?.addEventListener("click",()=>{if(asset.status<2){asset.status++;asset.version++;asset.custodian=asset.status===1?"Transportadora B":"Cliente C";renderAsset()}});
  $("resetAsset")?.addEventListener("click",()=>{asset={id:1001,status:0,custodian:"Armazém A",version:1};renderAsset()}); renderAsset();

  const updateToken = e => { const units=Math.max(1,Number(e?.target?.value || $("calcToken")?.value || 500)); const pct=units/10000*100; if($("tokenResult")) $("tokenResult").textContent=`${pct.toFixed(2).replace('.',',')}%`; if($("tokenValue")) $("tokenValue").textContent=`R$ ${(units*10).toLocaleString("pt-BR",{minimumFractionDigits:2})}`; if($("tokenVisual")) $("tokenVisual").style.background=`linear-gradient(90deg,var(--primary) ${pct}%,#e2e8f0 ${pct}%)`; };
  $("calcToken")?.addEventListener("input",updateToken); updateToken();
  document.querySelectorAll(".quiz-btn").forEach(btn => btn.addEventListener("click", () => { const chain=btn.dataset.answer==="chain"; $("quizResult").textContent = chain ? "⛓️ Bom candidato: várias organizações compartilham o registro." : "🗄️ Banco de dados: existe um administrador natural do sistema."; $("quizResult").style.background = chain ? "#166534" : "#1e40af"; }));
  update();
  // O fragmento #slide-N pode provocar rolagem nativa após o carregamento de fontes.
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    slides[current].scrollTop = 0;
  });
});
