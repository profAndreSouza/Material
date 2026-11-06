(() => {
  const source = document.currentScript.src;
  const asset = name => new URL(`../images/aula06/${name}`, source).href;
  const notebook = new URL('../Aulas/Aula_06/Aula06_Edge_Cloud_Gemeos_Digitais.ipynb', source).href;
  if (!document.getElementById('aula06-style')) {
    const link = document.createElement('link');
    link.id = 'aula06-style'; link.rel = 'stylesheet';
    link.href = new URL('aula-06.css', source).href;
    document.head.appendChild(link);
  }
  const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const slide = (category, title, subtitle, body, extra = '') => `<section class="slide a06 ${extra}"><div class="slide-top"><div class="slide-category">${category}</div><h1 class="slide-title">${title}</h1><p class="slide-subtitle">${subtitle}</p></div><div class="slide-content">${body}</div></section>`;
  const image = (name, alt) => `<img class="a06-image" src="${asset(name)}" alt="${escape(alt)}">`;
  const table = (headers, rows) => `<table class="a06-table"><thead><tr>${headers.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const note = text => `<p class="a06-note">${text}</p>`;
  const sources = {
    cloud: '<a href="https://csrc.nist.gov/pubs/sp/800/145/final" target="_blank" rel="noopener">NIST SP 800-145</a>',
    fog: '<a href="https://csrc.nist.gov/pubs/sp/500/325/final" target="_blank" rel="noopener">NIST SP 500-325</a>',
    edge: '<a href="https://www.rfc-editor.org/rfc/rfc9556.html" target="_blank" rel="noopener">RFC 9556 (IRTF, informativo)</a>',
    twin: '<a href="https://learn.microsoft.com/en-us/azure/digital-twins/concepts-twins-graph" target="_blank" rel="noopener">Microsoft Learn: grafo de gêmeos</a>',
    mqtt: '<a href="https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html" target="_blank" rel="noopener">OASIS MQTT 5.0, seção 4.3</a>'
  };

  window.SLIDE_DECKS['sistemas-emergentes/aula-06'] = {
    title: 'Edge, Cloud Computing e Gêmeos Digitais',
    slides: [
      slide('Módulo 4 · Smart Cities e IoT', 'Edge, Cloud e Gêmeos Digitais', 'Aula 06 · Particionamento de dados e simulação What-If',
        `<div class="a06-cover"><div><p class="a06-lead">Onde processar os dados de uma frota conectada?</p><p>Decisões locais, visão da frota e cenários antes de agir.</p><p class="a06-note">Prof. Me. André Cassulino Araújo Souza<br>ISI022 · 100 minutos</p></div><img src="${asset('frota_gemeo_digital.png')}" alt="Ilustração conceitual de ônibus com computação embarcada e sua representação digital na cidade"></div>${note('Ilustração gerada por IA para a aula. Não representa uma implantação real.')}`),

      slide('Objetivos e percurso', 'O caminho da aula', '60 minutos de conceitos e demonstrações + 40 minutos de atividade',
        `<div class="a06-steps"><p><strong>01 · Particionamento.</strong> Escolher onde cada dado e função devem ser tratados.</p><p><strong>02 · Evidências.</strong> Calcular latência, tráfego e critérios de decisão.</p><p><strong>03 · Gêmeo digital.</strong> Desenhar entidades e manter seu estado atualizado.</p><p><strong>04 · What-If.</strong> Comparar alternativas de frota com hipóteses explícitas.</p></div>${note('Continuidade das aulas 04 e 05: CPS fornece o contexto físico e MQTT transporta a telemetria.')}`),

      slide('Estudo de caso', 'A Linha L-06', '20 ônibus conectados na operadora, 8 na linha inicial. Todos os dados são fictícios.',
        table(['Necessidade', 'Requisito didático', 'Pergunta arquitetural'], [
          ['Alerta de temperatura', 'Até 100 ms, inclusive offline', 'A decisão pode depender da internet?'],
          ['Posição no painel', 'Evento a cada 5 s, vencido após 30 s', 'Como mostrar a idade da observação?'],
          ['Contagem de passageiros', 'Vídeo permanece no veículo', 'Qual informação precisa sair?'],
          ['Planejamento de frota', 'Comparação de cenários em minutos', 'Onde reunir dados de toda a linha?']
        ]) + note('Hipótese de queda de rede: 10 minutos. Controle de segurança veicular fica em sistemas locais especializados.')),

      slide('Conceitos', 'Edge e Cloud Computing', 'A localização do processamento acompanha a necessidade da função',
        table(['Critério', 'Borda', 'Nuvem'], [
          ['Visão', 'Dados e contexto próximos ao dispositivo', 'Dados integrados de muitos ativos'],
          ['Recursos', 'Hardware, energia e refrigeração limitados', 'Capacidade elástica, sujeita a custo'],
          ['Latência', 'Caminho curto, com possível fila local', 'Depende de rede, região e aplicação'],
          ['Operação', 'Muitos equipamentos para administrar', 'Gestão de serviços e infraestrutura'],
          ['Desconexão', 'Continuidade se projetada localmente', 'Acesso remoto depende da conexão']
        ]) + note(`Fontes: ${sources.cloud}, ${sources.fog}. Fog pode organizar camadas intermediárias. Nenhuma localização garante latência fixa.`)),

      slide('Desenho arquitetural', 'Uma solução híbrida para a frota', 'O caminho do alerta local continua independente da conexão com a nuvem',
        image('arquitetura.svg', 'Gateway no ônibus envia eventos à ingestão e ao gêmeo na nuvem, recebendo configuração autorizada.') + note('Arquitetura didática própria. Separar telemetria, armazenamento e comandos permite definir políticas distintas.')),

      slide('Latência · orçamento', 'O prazo inclui todo o caminho', 'Aquisição + rede de ida + fila/processamento + rede de volta + exibição',
        image('latencia_orcamento.svg', 'Gráfico de orçamento de latência: borda 26 ms e nuvem 120 ms, com meta de 100 ms.') + note('Hipóteses ilustrativas, não benchmarks. Nesse exemplo, o caminho remoto ultrapassa a meta de 100 ms.')),

      slide('Latência · variabilidade', 'A média pode esconder atrasos', 'O p95 descreve a cauda da amostra, mas não cobre todas as falhas',
        image('latencia_distribuicao.svg', 'Distribuição acumulada de latências sintéticas de borda e nuvem, com referências em 100 ms e 95%.') + note('Dados sintéticos reproduzíveis no notebook. A amostra inclui somente operações conectadas. Desconexões exigem indicador próprio.')),

      slide('Particionamento', 'O que fica e o que é transmitido', 'Uma informação pode ter diferentes formas e retenções em cada camada',
        table(['Informação', 'Tratamento na borda', 'Envio para a nuvem'], [
          ['Vídeo de ocupação', 'Contar, descartar quadro após inferência', 'Contagem, horário e qualidade'],
          ['Temperatura', 'Validar e alertar localmente', 'Evento e resumo por minuto'],
          ['Posição/velocidade', 'Validar e guardar durante queda', 'Evento a cada 5 segundos'],
          ['Histórico da viagem', 'Buffer limitado de 10 minutos', 'Consolidação e histórico de 30 dias'],
          ['Planejamento', 'Aplicar configuração autorizada', 'Parâmetros, versões e cenários']
        ]) + note('Retenções propostas para o exercício. Agregação reduz exposição, mas não garante anonimização.')),

      slide('Banda · cálculo', 'Vídeo e resumo transportam informações diferentes', '20 ônibus, 1 hora, vídeo de 2 Mbit/s ou resumo de 300 bytes a cada 5 s',
        image('trafego.svg', 'Comparação em escala logarítmica: 18.000 MB de vídeo e 4,32 MB de resumos por hora na frota.') + note('Unidades decimais. Somente carga útil, sem overhead ou retransmissões. Redução de 99,976% neste cálculo, com perda do conteúdo visual original.')),

      slide('Resiliência', 'Dez minutos sem internet', 'O funcionamento offline precisa de recursos e regras explícitos',
        `<div class="a06-two"><div><h2>Durante a queda</h2><ul class="a06-list"><li>Alerta e validação continuam locais.</li><li>Buffer persistente guarda eventos.</li><li>Painel remoto indica dado vencido.</li></ul></div><div><h2>Na reconexão</h2><ul class="a06-list"><li>Reenvio preserva horário original.</li><li>Aplicação identifica duplicatas.</li><li>Evento antigo não retrocede o estado.</li></ul></div></div><p class="a06-rule">Buffer cheio exige política de descarte e registro de perdas. Borda também pode falhar.</p>${note(`QoS 1 admite duplicação e confirmação MQTT não comprova processamento de negócio. Fonte: ${sources.mqtt}.`)}`),

      slide('Matriz de decisão', 'Restrições obrigatórias vêm primeiro', 'Uma pontuação alta não compensa uma condição que o projeto não pode violar',
        table(['Restrição do caso', 'Consequência', 'Como verificar'], [
          ['Alerta funciona sem internet', 'Caminho exclusivamente remoto é inelegível', 'Teste com rede externa indisponível'],
          ['Vídeo bruto não sai do veículo', 'Inferência e descarte locais', 'Inspeção do conteúdo transmitido'],
          ['Prazo do alerta: 100 ms', 'Orçamento fim a fim sob carga', 'Medições e violações de prazo'],
          ['Estado vencido após 30 s', 'Qualidade visível no painel', 'Teste de interrupção da telemetria']
        ]) + note('Depois dessas verificações, critérios ponderados ajudam a comparar as alternativas elegíveis.')),

      slide('Matriz de decisão', 'Pesos e notas precisam de justificativa', 'Escala de adequação: 1 a 5. Pesos e notas ilustrativos para o alerta local.',
        table(['Critério', 'Peso', 'Borda', 'Nuvem', 'Híbrida'], [
          ['Latência', '0,30', '5', '2', '5'],
          ['Continuidade local', '0,25', '5', '1', '5'],
          ['Minimização de dados', '0,20', '4', '2', '4'],
          ['Visão da frota', '0,15', '2', '5', '4'],
          ['Custo/operação', '0,10', '2', '4', '2'],
          ['Soma ponderada', '1,00', '<strong>4,05</strong>', '<strong>2,40*</strong>', '<strong>4,35</strong>']
        ]) + note('*Nuvem exclusivamente remota permanece inelegível para o alerta offline. Nota alta em custo/operação significa menor esforço/custo total estimado.')),

      slide('Gêmeos digitais', 'Representação conectada ao estado físico', 'Identidade + observações + relações + qualidade da atualização',
        `<p class="a06-lead">O gêmeo representa uma entidade ou processo físico e usa observações para manter seu estado digital útil à análise.</p><div class="a06-two"><div><h2>Estado observado</h2><p>O que o sensor informou, em que unidade e em qual momento.</p></div><div><h2>Cenário simulado</h2><p>Uma cópia com hipóteses alteradas para estimar consequências.</p></div></div><p class="a06-rule">Uma tabela ou um grafo podem representar o gêmeo. Uma cena 3D é uma opção de visualização.</p>${note(`Definição operacional adotada na aula. Referências: ${sources.edge} e ${sources.twin}.`)}`),

      slide('Representações', 'Modelo, sombra e gêmeo', 'Os termos variam na literatura. O desenho deve tornar os fluxos explícitos.',
        table(['Representação', 'No exemplo da aula', 'Uso'], [
          ['Modelo estático', 'Cadastro atualizado manualmente', 'Descrever ônibus e linha'],
          ['Sombra digital', 'Observações alimentam a representação', 'Acompanhar o estado'],
          ['Gêmeo proposto', 'Estado sincronizado, relações e análise', 'Comparar cenários e apoiar decisões']
        ]) + `<p class="a06-rule">Nesta solução, uma pessoa autoriza a mudança operacional. A simulação não envia comandos automaticamente.</p>` + note('Algumas taxonomias exigem intercâmbio bidirecional para o termo gêmeo. Declarar os fluxos evita ambiguidade.')),

      slide('Desenho do Digital Twin', 'Entidades, propriedades e relações', 'Modelo define o tipo. Instância representa um ativo identificado.',
        image('grafo_gemeo.svg', 'Ônibus BUS-017 opera na Linha L-06 que atende a Parada P-03, com propriedades e unidades.') + note(`Diagrama didático próprio. Conceitos de modelos, instâncias e relações: ${sources.twin}.`)),

      slide('Contrato de dados', 'Um evento precisa de identidade e tempo', 'A ingestão acrescenta o horário de recebimento',
        `<div class="a06-two"><pre class="a06-code">{
  "event_id": "BUS-017:a:21",
  "veiculo_id": "BUS-017",
  "seq": 21,
  "t_evento_s": 100,
  "velocidade_kmh": 24.0,
  "ocupacao_pessoas": 42,
  "qualidade": "valida"
}</pre><div><ul class="a06-list"><li><strong>event_id:</strong> reconhece repetição.</li><li><strong>seq:</strong> ajuda a identificar ordem.</li><li><strong>t_evento:</strong> informa quando mediu.</li><li><strong>t_recebimento:</strong> informa quando chegou.</li></ul></div></div>${note('Segundos desde uma origem comum no laboratório. Produção requer unidades, esquema, relógios e reinícios bem definidos.')}`),

      slide('Sincronização', 'Estado atual e histórico têm regras diferentes', 'Um evento atrasado pode ser útil ao histórico sem substituir a leitura mais nova',
        image('sincronizacao.svg', 'Fluxo medir, validar e atualizar, com dado vencido acima de 30 segundos.') + note('Exemplo próprio. A sequência vale por sessão do dispositivo. A retenção do histórico não aparece integralmente na demonstração em memória.')),

      slide('Demonstração no notebook', 'Repetição, atraso e dado vencido', 'O último evento aceito foi medido em t = 100 s',
        table(['Teste', 'Resultado esperado', 'Motivo'], [
          ['Mesmo event_id chega novamente', 'Ignorar repetição', 'Evitar duplicação do efeito'],
          ['Medição de t = 90 s chega depois', 'Guardar só no histórico', 'Não retroceder o estado atual'],
          ['Velocidade negativa', 'Rejeitar', 'Fora da faixa admitida no contrato'],
          ['Relógio avança para t = 140 s', 'Marcar como desatualizado', 'Idade = 40 s, maior que 30 s']
        ]) + `<p class="a06-rule">Silêncio do sensor não é evidência de que a situação física permaneceu igual.</p>`),

      slide('What-If · modelo', 'Tempo de ciclo e capacidade da linha', 'Simulação paramétrica determinística com hipóteses simplificadas',
        `<div class="a06-two"><div><div class="a06-formula">T = 60D/v + P + R</div><p>D: distância do ciclo em km<br>v: velocidade em movimento em km/h<br>P: tempo total em paradas, em min<br>R: recuperação no terminal, em min</p></div><div><div class="a06-formula">H = T/N &nbsp; C = 60K/H</div><p>N: ônibus ativos<br>K: pessoas por ônibus<br>H: intervalo entre ônibus em min<br>C: capacidade nominal em pessoas/h</p></div></div><p class="a06-rule">Espera ideal W = H/2, com chegadas uniformes e embarque disponível. Saturação pode invalidar essa aproximação.</p>${note('Base: D = 12 km, v = 24 km/h, P = 12 min, R = 6 min, N = 8 e K = 80. Modelo próprio da aula.')}`),

      slide('What-If · desenho', 'A simulação usa uma cópia do estado', 'Observação, hipótese e recomendação cumprem papéis diferentes',
        image('ciclo_whatif.svg', 'Estado observado alimenta cópia com hipóteses e comparação de capacidade, intervalo e espera.') + note('No notebook, a mediana de velocidades recentes é apenas uma proxy didática. A velocidade do ciclo real exige trajetórias e validação.')),

      slide('What-If · comparação', 'Congestionamento e reforço de frota', 'A mesma linha com mudanças explícitas de velocidade, demanda ou número de ônibus',
        image('cenarios.svg', 'Comparação de capacidade, demanda e espera ideal nos cenários base, congestão, pico e reforço.') + note('Com 11 ônibus a 16 km/h: aproximadamente 838 pessoas/h e espera ideal de 2,86 min. Dados fictícios. A barra âmbar indica cenário saturado.')),

      slide('What-If · experimento interativo', 'Frota, velocidade e demanda', 'Altere uma variável de cada vez e observe as consequências no mesmo modelo',
        `<div class="a06-two"><div class="a06-controls"><label for="a06-frota">Frota: <output id="a06-frota-label">8 ônibus</output><input id="a06-frota" type="range" min="4" max="16" value="8" step="1"></label><label for="a06-vel">Velocidade: <output id="a06-vel-label">24 km/h</output><input id="a06-vel" type="range" min="12" max="30" value="24" step="1"></label><label for="a06-demanda">Demanda: <output id="a06-demanda-label">600 pessoas/h</output><input id="a06-demanda" type="range" min="300" max="1400" value="600" step="20"></label></div><div class="a06-results" aria-live="polite"><p>Ciclo: <strong id="a06-ciclo">48,00 min</strong></p><p>Intervalo: <strong id="a06-intervalo">6,00 min</strong></p><p>Capacidade: <strong id="a06-capacidade">800 pessoas/h</strong></p><p>Espera ideal: <strong id="a06-espera">3,00 min</strong></p><p>Pressão sobre capacidade: <strong id="a06-pressao">75,0%</strong></p></div></div><p id="a06-status" class="a06-status">Demanda abaixo da capacidade nominal. Espera H/2 depende de regularidade e embarque disponível.</p>${note('Fixos: ciclo de 12 km, 12 min em paradas, 6 min no terminal e 80 pessoas por ônibus. Sem variação espacial, filas ou aleatoriedade.')}`),

      slide('Sensibilidade', 'A recomendação depende das hipóteses', 'Neste gráfico, velocidade fixa de 16 km/h e demanda de 760 pessoas/h',
        image('sensibilidade.svg', 'Curva de capacidade nominal por frota de 6 a 14 ônibus, comparada à demanda de 760 pessoas por hora.') + note('Cruzar a linha de demanda não garante qualidade. Também é preciso avaliar espera, irregularidade, custo e disponibilidade.')),

      slide('Validação', 'O modelo precisa ser confrontado com a operação', 'Dados sintéticos verificam o código, mas não validam uma cidade real',
        table(['Limitação', 'Risco', 'Evidência necessária'], [
          ['Velocidade instantânea', 'Tempo de ciclo enviesado', 'Trajetórias e tempos por segmento'],
          ['Paradas com tempo fixo', 'Subestimar atraso no pico', 'Embarque e desembarque por parada'],
          ['Intervalos regulares', 'Subestimar espera com comboios', 'Distribuição real dos intervalos'],
          ['Capacidade nominal', 'Ignorar recusa de embarque', 'Carga e fila por trecho'],
          ['Observação vencida', 'Simular uma condição antiga', 'Idade, cobertura e qualidade do dado']
        ]) + note('Calibrar e avaliar em conjuntos distintos. Comparar previsão e realizado e comunicar erro e incerteza.')),

      slide('Segurança e operação', 'Telemetria e comandos exigem políticas próprias', 'Decisões propostas para a arquitetura do caso',
        `<div class="a06-two"><div><h2>Dados e acesso</h2><ul class="a06-list"><li>Autenticar dispositivos e proteger o transporte.</li><li>Autorizar publicações por tópico.</li><li>Reter apenas o necessário e registrar acessos.</li></ul></div><div><h2>Mudanças na operação</h2><ul class="a06-list"><li>Separar comandos da telemetria.</li><li>Validar versão e prazo de expiração.</li><li>Registrar autorização e resultado.</li></ul></div></div><p class="a06-rule">Processar localmente reduz certas exposições. O gateway também precisa de manutenção e proteção.</p>${note(`Contexto de requisitos de borda: ${sources.edge}. As medidas apresentadas são propostas do exercício.`)}`),

      slide('Síntese', 'Cinco decisões que precisam ficar claras', 'Da leitura do sensor à recomendação operacional',
        `<div class="a06-steps"><p><strong>Local.</strong> Qual função executa na borda e qual exige visão conjunta?</p><p><strong>Dado.</strong> O que transmitir, em que frequência e por quanto tempo guardar?</p><p><strong>Estado.</strong> Como identificar, atualizar e marcar observações vencidas?</p><p><strong>Modelo.</strong> Quais hipóteses sustentam a comparação dos cenários?</p><p><strong>Ação.</strong> Quem valida a recomendação e autoriza sua aplicação?</p></div>`),

      slide('Referências', 'Fontes e materiais da aula', 'Documentação primária e exemplos próprios · consulta em 05/11/2026',
        `<ol class="a06-list a06-references"><li>${sources.cloud} · definição de nuvem, 2011.</li><li>${sources.fog} · camadas de computação, 2018.</li><li>${sources.edge} · desafios e funções de IoT na borda, 2024.</li><li>${sources.twin} · entidades e relações.</li><li>${sources.mqtt} · níveis de entrega, 2019.</li></ol><p><a href="${notebook}" download>Notebook da Aula 06 com código, imagens e exercício detalhado</a></p>${note('Diagramas e modelos didáticos próprios. Capa gerada por IA. Os números do caso não são medições de uma frota real.')}`),

      slide('Atividade final · entrega ao término', 'Linha L-06: arquitetura e decisão de frota', 'Em duplas · 40 minutos · notebook executado no Teams',
        `<p><strong>Caso:</strong> 900 pessoas/h, 18 km/h, ciclo de 12 km, 12 min em paradas + 6 min no terminal, 80 pessoas/ônibus. Frota disponível: 8 a 12. Metas: capacidade ≥ demanda e espera ideal ≤ 3 min.</p><p class="a06-rule"><strong>Restrições:</strong> queda de rede de 10 min, alerta local ≤ 100 ms, posição a cada 5 s e vencida após 30 s. Vídeo bruto permanece no veículo.</p><ol class="a06-list"><li><strong>Matriz (3 pt, 10 min):</strong> temperatura, posição, vídeo/ocupação, histórico e planejamento. Registrar local, prazo, transmissão, retenção, offline, gatilhos e justificativas.</li><li><strong>Desenho (2 pt, 8 min):</strong> Ônibus, Linha e Parada, relações, fluxos, unidades e regras de sincronização.</li><li><strong>What-If (3 pt, 14 min):</strong> comparar 8, 10 e 12 ônibus em tabela e gráfico. Encontrar a menor frota de 8 a 12 que atende às metas e testar demanda +10%.</li><li><strong>Parecer (2 pt, 8 min):</strong> 8–12 linhas com decisão, evidências, queda de rede e duas limitações.</li></ol>${note('Entrega: Aula06_Nome1_Nome2.ipynb com desenho incorporado e saídas salvas. Passo a passo e espaços de resposta na seção 11 do notebook. H/2 não representa a espera real em saturação.')}`, 'a06-assignment')
    ]
  };

  // O evento do apresentador central permite manter o experimento junto ao conteúdo.
  // Remover o listener anterior evita duplicação ao recarregar esta aula.
  if (window.aula06LoadedHandler) document.removeEventListener('slides:loaded', window.aula06LoadedHandler);
  window.aula06LoadedHandler = event => {
    if (event.detail?.course?.id !== 'sistemas-emergentes' || event.detail?.lesson?.id !== 'aula-06') return;
    const byId = id => document.getElementById(`a06-${id}`);
    const fmt = (n, digits = 2) => n.toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
    const update = () => {
      const n = Number(byId('frota').value), v = Number(byId('vel').value), d = Number(byId('demanda').value);
      const t = 60 * 12 / v + 12 + 6, h = t / n, c = 60 * 80 / h;
      byId('frota-label').textContent = `${n} ônibus`;
      byId('vel-label').textContent = `${v} km/h`;
      byId('demanda-label').textContent = `${d} pessoas/h`;
      byId('ciclo').textContent = `${fmt(t)} min`;
      byId('intervalo').textContent = `${fmt(h)} min`;
      byId('capacidade').textContent = `${fmt(c, 0)} pessoas/h`;
      byId('espera').textContent = `${fmt(h / 2)} min`;
      byId('pressao').textContent = `${fmt(100 * d / c, 1)}%`;
      byId('status').dataset.warning = String(d >= c);
      byId('status').textContent = d >= c
        ? 'Demanda atinge ou supera a capacidade. A fila pode crescer e H/2 não representa a espera real.'
        : 'Demanda abaixo da capacidade nominal. Espera H/2 depende de regularidade e embarque disponível.';
    };
    ['frota', 'vel', 'demanda'].forEach(id => byId(id).addEventListener('input', update));
    update();
  };
  document.addEventListener('slides:loaded', window.aula06LoadedHandler);
})();
