"use strict";

const QUESTION_BANK = [
  {
    id: 1,
    module: "mobo",
    subsystem: "TARJETA MADRE",
    standard: "AM5 LGA 1718",
    phase: 1,
    terminal:
      "ESPECIFICACIÓN ELECTROMECÁNICA DE ZÓCALO:\n" +
      "[ AM4: PGA 1331 -> Matriz ZIF con 1331 pines en el CPU ]\n" +
      "[ AM5: LGA 1718 -> Contactos elásticos en la placa madre ]",
    question:
      "¿Qué cambio electromecánico fundamental introdujo AMD al pasar del zócalo AM4 al AM5 y cuál fue la justificación técnica primordial?",
    options: [
      "Migración de PGA a LGA con 1718 contactos en la placa, mejorando la integridad de señal para DDR5 y PCIe 5.0.",
      "Migración de LGA a PGA para colocar más pines en el procesador y reducir el consumo de energía.",
      "Eliminación completa del zócalo para soldar el procesador directamente a la tarjeta madre.",
      "Reducción a 940 contactos con el propósito de mantener compatibilidad eléctrica con DDR4."
    ],
    correct: 0,
    answer:
      "Migración de empaquetado PGA a LGA, con 1718 contactos en la placa, para asegurar la integridad de señal requerida por DDR5 y PCIe 5.0.",
    hint:
      "Observa dónde se encuentran físicamente los contactos en AM4 y AM5. Las señales de mayor frecuencia necesitan más contactos, mejor distribución eléctrica y menor interferencia."
  },
  {
    id: 2,
    module: "mobo",
    subsystem: "MEMORIA PRINCIPAL",
    standard: "JEDEC DDR5",
    phase: 1,
    terminal:
      "TOPOLOGÍA DE BUS DE MEMORIA:\n" +
      "[ DDR4: 1x canal de 64 bits + VRM en Motherboard ]\n" +
      "[ DDR5: 2x subcanales independientes de 32 bits + PMIC integrado en DIMM ]",
    question:
      "¿Qué circuito integrado crucial migró directamente al PCB del módulo DDR5 y cómo cambió la topología de canales frente a DDR4?",
    options: [
      "El controlador de memoria del CPU migró al DIMM y se crearon cuatro canales de 16 bits.",
      "El PMIC migró al DIMM y el canal de 64 bits se dividió en dos subcanales independientes de 32 bits.",
      "El chipset migró al módulo y el canal pasó de 64 a 128 bits.",
      "El VRM de la tarjeta gráfica migró al DIMM y se conservó un único canal de 64 bits."
    ],
    correct: 1,
    answer:
      "El PMIC (Power Management IC) a 1.1 V se integró en el módulo DDR5, que se organiza en dos subcanales independientes de 32 bits.",
    hint:
      "La regulación de energía ya no depende únicamente de la tarjeta madre. También analiza cómo se divide el ancho total de 64 bits."
  },
  {
    id: 3,
    module: "power",
    subsystem: "ALIMENTACIÓN DE GPU",
    standard: "12VHPWR / 12V-2x6",
    phase: 1,
    terminal:
      "PINOUT:\n" +
      "[ 12 Pines de Poder: 6x +12V + 6x Masa (GND) ]\n" +
      "[ 4 Pines Sideband: SENSE0, SENSE1, CARD_PWR_STABLE, CARD_CBL_PRES# ]",
    question:
      "¿Cómo negocian la fuente y la GPU la potencia admisible de 150 W, 300 W, 450 W o 600 W mediante los pines Sideband?",
    options: [
      "Por pulsos PWM enviados desde la GPU a través de los conductores de +12 V.",
      "Por una conexión Ethernet entre el controlador de la fuente y el BIOS.",
      "Mediante combinaciones de impedancia binaria a masa en SENSE0 y SENSE1.",
      "Midiendo únicamente la temperatura del conector durante el arranque."
    ],
    correct: 2,
    answer:
      "La capacidad se comunica mediante combinaciones de impedancia a masa en SENSE0 y SENSE1, que codifican el nivel de potencia permitido.",
    hint:
      "Los dos pines SENSE funcionan como entradas lógicas. La combinación de sus estados representa distintos límites de potencia."
  },
  {
    id: 4,
    module: "power",
    subsystem: "ALMACENAMIENTO PCIe",
    standard: "M.2 KEY M / NVMe",
    phase: 2,
    terminal:
      "ASIGNACIÓN ELECTROMECÁNICA M.2 KEY M:\n" +
      "[ Muesca en pines 59-66 | Enlace: 4 carriles PCIe directos ]\n" +
      "[ PCIe 4.0 x4: ~8.0 GB/s ]",
    question:
      "Al conectar una unidad SSD en una ranura M.2 Key M, ¿cuál es la ventaja arquitectónica de NVMe frente a AHCI de SATA III?",
    options: [
      "NVMe usa únicamente una cola de 32 comandos para mantener compatibilidad con discos mecánicos.",
      "NVMe elimina el bus PCIe y transmite los datos directamente mediante USB.",
      "NVMe reduce la velocidad para proteger las celdas NAND y evitar el calentamiento.",
      "NVMe admite hasta 64.000 colas con 64.000 comandos cada una y reduce la latencia sobre PCIe."
    ],
    correct: 3,
    answer:
      "NVMe admite una gran cantidad de colas y comandos concurrentes, aprovecha PCIe y disminuye la latencia y la carga del CPU frente a AHCI.",
    hint:
      "AHCI fue diseñado pensando en discos mecánicos. NVMe aprovecha el paralelismo masivo de las unidades de estado sólido."
  },
  {
    id: 5,
    module: "power",
    subsystem: "FUENTE ATX",
    standard: "SECUENCIA ATX",
    phase: 2,
    terminal:
      "DIAGRAMA DE TIEMPOS ATX:\n" +
      "1. +5VSB activo en Pin 9\n" +
      "2. Super I/O aterriza PS_ON# (Pin 16 -> 0V/GND)\n" +
      "3. Rieles estabilizan -> Fuente emite PWR_OK (Pin 8 -> +5V, tras 100-500 ms)",
    question:
      "Durante la secuencia de encendido ATX, ¿qué comportamiento eléctrico y temporal tienen PS_ON# y PWR_OK?",
    options: [
      "PS_ON# sube a +12 V y PWR_OK baja a 0 V antes de activar la fuente.",
      "PS_ON# se lleva a masa para encender y, después de estabilizar los rieles, PWR_OK sube a +5 V tras 100-500 ms.",
      "Ambas señales permanecen flotantes hasta que el sistema operativo carga sus controladores.",
      "PWR_OK enciende la fuente y PS_ON# confirma el inicio del BIOS después de cinco segundos."
    ],
    correct: 1,
    answer:
      "PS_ON# se aterriza a 0 V para solicitar el encendido. Tras estabilizar los rieles durante 100-500 ms, la fuente eleva PWR_OK a +5 V y permite liberar el reset del CPU.",
    hint:
      "El símbolo # indica una señal activa en nivel bajo. Primero se solicita encendido; después la fuente confirma que sus voltajes son estables."
  },
  {
    id: 6,
    module: "power",
    subsystem: "ALIMENTACIÓN AUXILIAR",
    standard: "EPS12V / PCIe 8 PINES",
    phase: 2,
    terminal:
      "COMPARATIVA DE PINES:\n" +
      "[ PCIe 8p ]: Traba = Masas (GND) | Fila inferior = +12V\n" +
      "[ EPS 12V  ]: Traba = +12V        | Fila inferior = Masas (GND)",
    question:
      "¿Por qué forzar un conector EPS 12V en una toma PCIe de 8 pines de una tarjeta gráfica puede provocar un cortocircuito crítico?",
    options: [
      "Porque ambos conectores transmiten datos incompatibles a diferentes frecuencias.",
      "Porque EPS proporciona +5 V y PCIe necesita exclusivamente +3.3 V.",
      "Porque la polaridad de las filas está invertida: los pines que son masa en PCIe corresponden a +12 V en EPS.",
      "Porque el conector EPS carece de conductores de masa."
    ],
    correct: 2,
    answer:
      "Las filas tienen polaridad invertida. La zona de la traba es masa en PCIe, pero +12 V en EPS, por lo que forzar la conexión puede unir alimentación con tierra.",
    hint:
      "No te guíes solo por la cantidad de pines. Compara la posición exacta de +12 V y GND respecto a la traba plástica."
  },
  {
    id: 7,
    module: "io",
    subsystem: "INTERFAZ USB",
    standard: "USB TYPE-C / USB PD",
    phase: 3,
    terminal:
      "MATRIZ DE 24 CONTACTOS TIPO-C:\n" +
      "[ Fila A: GND, TX1+/-, VBUS, CC1, D+/-, SBU1, VBUS, RX2+/-, GND ]\n" +
      "[ Fila B: GND, RX1+/-, VBUS, SBU2, D+/-, CC2, VBUS, TX2+/-, GND ]",
    question:
      "¿Cuál es la función de CC1 y CC2 durante la negociación de USB Power Delivery?",
    options: [
      "Transportar exclusivamente el audio analógico de los auriculares.",
      "Determinar la orientación y negociar perfiles de voltaje mediante señalización BMC, hasta 48 V y 240 W.",
      "Actuar como pares diferenciales reservados para HDMI.",
      "Proporcionar una conexión directa de tierra para eliminar el uso de VBUS."
    ],
    correct: 1,
    answer:
      "CC1 y CC2 detectan la orientación y participan en la negociación de los perfiles USB Power Delivery mediante señalización BMC.",
    hint:
      "Solo uno de los canales CC queda activo según la orientación del cable. Por ese canal se intercambian los mensajes de Power Delivery."
  },
  {
    id: 8,
    module: "io",
    subsystem: "RED ETHERNET",
    standard: "1000BASE-T",
    phase: 3,
    terminal:
      "PARES DE COBRE RJ-45:\n" +
      "[ 100BASE-TX ]: 2 pares activos (1-2 TX, 3-6 RX)\n" +
      "[ 1000BASE-T ]: 4 pares activos (1-2, 3-6, 4-5, 7-8) Full-Duplex simultáneo",
    question:
      "¿Cómo logra 1000BASE-T transmitir 1000 Mbps sobre Categoría 5e con una frecuencia de símbolo de 125 MHz?",
    options: [
      "Usa PAM-5 en los cuatro pares simultáneamente y transmite de forma bidireccional, aportando 250 Mbps por par.",
      "Aumenta la frecuencia del cable a 1000 MHz y utiliza un único par.",
      "Emplea únicamente dos pares con modulación analógica AM.",
      "Comprime todos los paquetes antes de transmitirlos en modo simplex."
    ],
    correct: 0,
    answer:
      "1000BASE-T emplea modulación multinivel PAM-5 en los cuatro pares simultáneamente, con transmisión bidireccional y 250 Mbps por par.",
    hint:
      "El rendimiento no depende solo de la frecuencia. Considera la cantidad de niveles de la señal y el uso simultáneo de los cuatro pares."
  },
  {
    id: 9,
    module: "power",
    subsystem: "ALMACENAMIENTO SATA",
    standard: "SATA III - 7 PINES",
    phase: 3,
    terminal:
      "PINOUT CONECTOR 'L':\n" +
      "Pin 1: GND | Pin 2: A+ (TX+) | Pin 3: A- (TX-)\n" +
      "Pin 4: GND | Pin 5: B- (RX-) | Pin 6: B+ (RX+) | Pin 7: GND",
    question:
      "¿Cuál es el propósito arquitectónico de los tres pines de tierra intercalados en el conector SATA de datos?",
    options: [
      "Transportar voltajes diferentes para alimentar el disco.",
      "Aumentar la cantidad de canales de datos de dos a cinco.",
      "Detectar la capacidad del disco mediante resistencias.",
      "Aislar los pares TX y RX, ofrecer retorno de señal y reducir la diafonía electromagnética."
    ],
    correct: 3,
    answer:
      "Los pines GND separan y apantallan los pares diferenciales TX y RX, proporcionan retorno eléctrico y reducen la diafonía.",
    hint:
      "Observa que cada par diferencial queda delimitado por conexiones a tierra. Es una decisión relacionada con la integridad de señal."
  },
  {
    id: 10,
    module: "io",
    subsystem: "SALIDA DE VIDEO",
    standard: "HDMI 2.1 FRL",
    phase: 3,
    terminal:
      "CAPA FÍSICA HDMI:\n" +
      "[ HDMI 2.0 TMDS ]: 3 carriles de datos + 1 de reloj dedicado (Máx: 18 Gbps)\n" +
      "[ HDMI 2.1 FRL  ]: 4 carriles de datos con reloj embebido (Máx: 48 Gbps)",
    question:
      "Para alcanzar 48 Gbps en HDMI 2.1, ¿qué transformación de capa física sustituyó a TMDS?",
    options: [
      "Se mantuvo TMDS y se duplicó únicamente el voltaje de los tres carriles.",
      "Se sustituyó el cable de cobre por fibra óptica obligatoria.",
      "FRL convirtió el canal de reloj en un cuarto carril de datos con reloj embebido y codificación 16b/18b.",
      "HDMI 2.1 eliminó la codificación y transmitió video como una señal analógica."
    ],
    correct: 2,
    answer:
      "FRL (Fixed Rate Link) emplea cuatro carriles de datos con reloj embebido; el antiguo canal de reloj pasa a utilizarse como cuarto carril y se usa codificación 16b/18b.",
    hint:
      "Compara cuántos carriles transportan datos en TMDS y FRL. En el nuevo sistema no se reserva un carril exclusivamente para reloj."
  }
];

const MODULES = {
  all: "Evaluación Integral",
  mobo: "Tarjeta Madre e Internos",
  io: "Puertos I/O y Red",
  power: "Alimentación y Expansión"
};

const DIFFICULTIES = {
  apprentice: {
    label: "Aprendiz",
    times: [30, 25, 20],
    multiplier: 5
  },
  advanced: {
    label: "Técnico Avanzado",
    times: [22, 18, 14],
    multiplier: 10
  },
  extreme: {
    label: "Certificación Extrema",
    times: [15, 12, 9],
    multiplier: 15
  }
};

const MATCHING_ITEMS = [
  {
    id: "sata",
    connector: "Cable SATA de datos de 7 pines",
    function: "Transmisión de hasta 6 Gbps para una unidad SSD o HDD"
  },
  {
    id: "atx",
    connector: "Conector ATX de 24 pines",
    function: "Suministro general de +12 V, +5 V, +3.3 V y -12 V"
  },
  {
    id: "pson",
    connector: "Pin 16 ATX - PS_ON# verde",
    function: "Arranque de la fuente al llevar la señal a masa GND"
  },
  {
    id: "m2",
    connector: "Ranura M.2 Key M",
    function: "Enlace directo PCIe x4 de hasta 64 Gbps"
  },
  {
    id: "cc",
    connector: "Pines CC1 y CC2 en USB-C",
    function: "Orientación y negociación de voltajes USB Power Delivery"
  }
];

const BUILDER_COMPONENTS = [
  {
    id: "cpu",
    icon: "▣",
    name: "CPU: AMD Ryzen",
    slot: "SOCKET_AM5",
    detail: "Procesador instalado en matriz LGA 1718."
  },
  {
    id: "ram",
    icon: "▥",
    name: "RAM: Kingston FURY DDR5",
    slot: "DIMM_A2_DDR5",
    detail: "Módulo DDR5 insertado y seguros laterales cerrados."
  },
  {
    id: "m2",
    icon: "▬",
    name: "M.2: Samsung 970 EVO NVMe",
    slot: "M2_KEY_M",
    detail: "Unidad NVMe fijada sobre enlace PCIe x4."
  },
  {
    id: "gpu",
    icon: "▰",
    name: "GPU: Tarjeta gráfica PCIe x16",
    slot: "PCIE_X16",
    detail: "Tarjeta gráfica asegurada en la ranura principal."
  },
  {
    id: "psu",
    icon: "▤",
    name: "PSU: Cable ATX de 24 pines",
    slot: "ATX_PWR_24P",
    detail: "Alimentación principal conectada y asegurada."
  }
];

const ROULETTE_PRIZES = [
  { label: "+1 Vida ❤️", color: "#10b981", type: "life" },
  { label: "Escudo 🛡️", color: "#0284c7", type: "shield" },
  { label: "Puntos 2X ⚡", color: "#f59e0b", type: "double" },
  { label: "50/50 ✂️", color: "#ef4444", type: "fifty" },
  { label: "Super Pista 💡", color: "#7c3aed", type: "hint" },
  { label: "Bonus +150 ⭐", color: "#db2777", type: "bonus" }
];

const STORAGE_KEY = "connectorChallengeLeaderboardV1";

const state = {
  player: {
    name: "",
    avatar: "🤖",
    avatarName: "CyberByte",
    module: "all",
    difficulty: "apprentice"
  },
  questions: [],
  currentIndex: 0,
  score: 0,
  lives: 3,
  correctAnswers: 0,
  streakAwardMarker: 0,
  timeLeft: 0,
  timerId: null,
  answered: false,
  shieldActive: false,
  doubleActive: false,
  rouletteSpins: 0,
  powerups: {
    fifty: 1,
    hint: 2,
    life: 1,
    shield: 1,
    double: 1
  },
  roulette: {
    drawingRotation: 0,
    spinning: false
  },
  matching: {
    connector: null,
    function: null,
    matched: new Set()
  },
  builder: {
    step: 0,
    powered: false,
    runningPost: false
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindNavigation();
  bindSetup();
  bindGameControls();
  bindModals();
  bindMatching();
  bindBuilder();

  updateDifficultyInfo();
  renderLeaderboard();
  resetMatchingGame();
  resetBuilder();
  drawRoulette(0);
}

function bindNavigation() {
  $$(".nav-tab").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });
}

function switchTab(tabName) {
  $$(".nav-tab").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  $$(".tab-panel").forEach((panel) => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });
}

function bindSetup() {
  $("#difficulty-select").addEventListener("change", updateDifficultyInfo);
  $("#setup-form").addEventListener("submit", startGame);

  $("#retry-button").addEventListener("click", () => {
    beginConfiguredGame();
  });

  $("#back-setup-button").addEventListener("click", () => {
    clearInterval(state.timerId);
    showTestScreen("setup-screen");
    renderLeaderboard();
  });

  $("#clear-records").addEventListener("click", () => {
    openModal("confirm-modal");
  });

  $("#confirm-clear").addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    renderLeaderboard();
    closeModal("confirm-modal");
  });

  $("#cancel-clear").addEventListener("click", () => {
    closeModal("confirm-modal");
  });
}

function updateDifficultyInfo() {
  const value = $("#difficulty-select").value;
  const difficulty = DIFFICULTIES[value];

  $("#difficulty-info").textContent =
    `${difficulty.label}: tiempos por fase de ` +
    `${difficulty.times[0]}s, ${difficulty.times[1]}s y ${difficulty.times[2]}s. ` +
    `Cada segundo restante concede ${difficulty.multiplier} puntos adicionales.`;
}

function startGame(event) {
  event.preventDefault();

  const name = $("#student-name").value.trim();
  const selectedAvatar = $('input[name="avatar"]:checked');

  if (!name) {
    $("#student-name").focus();
    return;
  }

  state.player = {
    name,
    avatar: selectedAvatar.value,
    avatarName: selectedAvatar.dataset.avatarName,
    module: $("#module-select").value,
    difficulty: $("#difficulty-select").value
  };

  beginConfiguredGame();
}

function beginConfiguredGame() {
  clearInterval(state.timerId);

  const selectedQuestions =
    state.player.module === "all"
      ? [...QUESTION_BANK]
      : QUESTION_BANK.filter(
          (question) => question.module === state.player.module
        );

  state.questions = selectedQuestions;
  state.currentIndex = 0;
  state.score = 0;
  state.lives = 3;
  state.correctAnswers = 0;
  state.streakAwardMarker = 0;
  state.answered = false;
  state.shieldActive = false;
  state.doubleActive = false;
  state.rouletteSpins = 0;
  state.powerups = {
    fifty: 1,
    hint: 2,
    life: 1,
    shield: 1,
    double: 1
  };

  updatePlayerHUD();
  updateInventoryUI();
  showTestScreen("game-screen");
  loadQuestion();
}

function showTestScreen(screenId) {
  $$("#panel-test .screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });
}

function updatePlayerHUD() {
  $("#hud-avatar").textContent = state.player.avatar;
  $("#hud-name").textContent = state.player.name;
  $("#topic-badge").textContent = MODULES[state.player.module].toUpperCase();
  $("#difficulty-badge").textContent =
    DIFFICULTIES[state.player.difficulty].label.toUpperCase();
  updateHUD();
}

function updateHUD() {
  $("#hud-progress").textContent =
    `${Math.min(state.currentIndex + 1, state.questions.length)} / ` +
    `${state.questions.length}`;

  $("#hud-score").textContent = state.score.toLocaleString("es-CR");
  $("#hud-lives").textContent =
    "❤️".repeat(state.lives) + "🖤".repeat(Math.max(0, 3 - state.lives));
  $("#spin-count").textContent = state.rouletteSpins;

  $("#shield-badge").classList.toggle("hidden", !state.shieldActive);
  $("#double-badge").classList.toggle("hidden", !state.doubleActive);

  $("#buy-spin-button").disabled = state.score < 200 || state.answered;
  $("#roulette-button").disabled =
    state.rouletteSpins < 1 || state.answered || state.roulette.spinning;
}

function getCurrentQuestion() {
  return state.questions[state.currentIndex];
}

function loadQuestion() {
  clearInterval(state.timerId);

  const question = getCurrentQuestion();

  if (!question) {
    finishGame(true);
    return;
  }

  state.answered = false;
  $("#answer-feedback").className = "feedback-box hidden";
  $("#answer-feedback").textContent = "";
  $("#hint-box").classList.add("hidden");
  $("#hint-box").textContent = "";
  $("#next-question-button").classList.add("hidden");

  $("#console-subsystem").textContent = question.subsystem;
  $("#console-standard").textContent = question.standard;
  $("#console-terminal").textContent = question.terminal;
  $("#question-text").textContent = question.question;
  $("#hud-phase").textContent = getPhaseLabel(question.phase);

  renderAnswers(question);
  resetQuestionPowerupState();
  startTimer(question.phase);
  updateHUD();
  updateInventoryUI();
}

function getPhaseLabel(phase) {
  if (phase === 1) return "FASE 1 BÁSICA";
  if (phase === 2) return "FASE 2 INTERMEDIA";
  return "FASE 3 CRÍTICA";
}

function renderAnswers(question) {
  const grid = $("#answer-grid");
  const letters = ["A", "B", "C", "D"];

  grid.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.index = String(index);

    const prefix = document.createElement("span");
    prefix.className = "answer-prefix";
    prefix.textContent = letters[index];

    const text = document.createElement("span");
    text.textContent = option;

    button.append(prefix, text);
    button.addEventListener("click", () => answerQuestion(index));
    grid.appendChild(button);
  });
}

function startTimer(phase) {
  const difficulty = DIFFICULTIES[state.player.difficulty];
  state.timeLeft = difficulty.times[phase - 1];

  renderTimer();

  state.timerId = window.setInterval(() => {
    state.timeLeft -= 1;
    renderTimer();

    if (state.timeLeft <= 0) {
      clearInterval(state.timerId);
      handleTimeout();
    }
  }, 1000);
}

function renderTimer() {
  $("#hud-timer").textContent = `⏳ ${Math.max(0, state.timeLeft)}s`;

  const timerStat = $(".timer-stat");
  timerStat.classList.toggle(
    "warning",
    state.timeLeft <= 10 && state.timeLeft > 5
  );
  timerStat.classList.toggle("danger", state.timeLeft <= 5);
}

function answerQuestion(selectedIndex) {
  if (state.answered) return;

  state.answered = true;
  clearInterval(state.timerId);

  const question = getCurrentQuestion();
  const isCorrect = selectedIndex === question.correct;

  revealAnswerState(selectedIndex, question.correct);

  if (isCorrect) {
    handleCorrectAnswer(question);
  } else {
    handleIncorrectAnswer(question, false);
  }

  finishQuestionInteraction();
}

function revealAnswerState(selectedIndex, correctIndex) {
  $$(".answer-button").forEach((button) => {
    const index = Number(button.dataset.index);
    button.disabled = true;

    if (index === correctIndex) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && selectedIndex !== correctIndex) {
      button.classList.add("incorrect");
    }
  });
}

function handleCorrectAnswer(question) {
  const basePoints =
    question.phase === 1 ? 100 : question.phase === 2 ? 150 : 200;
  const speedBonus =
    state.timeLeft * DIFFICULTIES[state.player.difficulty].multiplier;
  let earned = basePoints + speedBonus;

  if (state.doubleActive) {
    earned *= 2;
    state.doubleActive = false;
  }

  state.score += earned;
  state.correctAnswers += 1;

  if (
    state.correctAnswers > 0 &&
    state.correctAnswers % 5 === 0 &&
    state.correctAnswers !== state.streakAwardMarker
  ) {
    state.rouletteSpins += 1;
    state.streakAwardMarker = state.correctAnswers;
  }

  showFeedback(
    "success",
    `DIAGNÓSTICO CORRECTO. +${earned} puntos. ${question.answer}`
  );
  animateScore();
}

function handleIncorrectAnswer(question, timedOut) {
  let damageMessage = "";

  if (state.shieldActive) {
    state.shieldActive = false;
    damageMessage = "El escudo absorbió la pérdida de vida.";
  } else {
    state.lives = Math.max(0, state.lives - 1);
    damageMessage = "Se perdió una vida de diagnóstico.";
  }

  const reason = timedOut
    ? "TIEMPO AGOTADO."
    : "RESPUESTA TÉCNICA INCORRECTA.";

  showFeedback(
    "error",
    `${reason} ${damageMessage} Respuesta: ${question.answer}`
  );

  $(".diagnostic-console").classList.add("shake");
  window.setTimeout(() => {
    $(".diagnostic-console").classList.remove("shake");
  }, 420);
}

function handleTimeout() {
  if (state.answered) return;

  state.answered = true;
  const question = getCurrentQuestion();

  revealAnswerState(-1, question.correct);
  handleIncorrectAnswer(question, true);
  finishQuestionInteraction();
}

function finishQuestionInteraction() {
  updateHUD();
  updateInventoryUI();

  if (state.lives <= 0) {
    window.setTimeout(() => finishGame(false), 900);
    return;
  }

  $("#next-question-button").classList.remove("hidden");
}

function showFeedback(type, message) {
  const feedback = $("#answer-feedback");
  feedback.textContent = message;
  feedback.className = `feedback-box ${type}`;
}

function animateScore() {
  const element = $("#hud-score");
  element.classList.remove("score-pop");
  void element.offsetWidth;
  element.classList.add("score-pop");
}

function resetQuestionPowerupState() {
  $$(".answer-button").forEach((button) => {
    button.classList.remove("eliminated");
  });
}

function bindGameControls() {
  $("#next-question-button").addEventListener("click", () => {
    state.currentIndex += 1;

    if (state.currentIndex >= state.questions.length) {
      finishGame(true);
    } else {
      loadQuestion();
    }
  });

  $$(".powerup-button").forEach((button) => {
    button.addEventListener("click", () => {
      usePowerup(button.dataset.powerup);
    });
  });

  $("#inline-hint-button").addEventListener("click", () => {
    usePowerup("hint");
  });

  $("#buy-spin-button").addEventListener("click", buyRouletteSpin);
  $("#roulette-button").addEventListener("click", () => {
    if (state.rouletteSpins > 0 && !state.answered) {
      $("#roulette-result").textContent =
        "Inicia el giro para obtener un suministro.";
      openModal("roulette-modal");
    }
  });
}

function usePowerup(type) {
  if (state.answered || !getCurrentQuestion()) return;

  if (state.powerups[type] <= 0) {
    temporaryGameNotice("No quedan unidades de este comodín.", "error");
    return;
  }

  if (type === "fifty") {
    useFiftyFifty();
  } else if (type === "hint") {
    useHint();
  } else if (type === "life") {
    useLife();
  } else if (type === "shield") {
    useShield();
  } else if (type === "double") {
    useDoublePoints();
  }

  updateInventoryUI();
  updateHUD();
}

function useFiftyFifty() {
  const question = getCurrentQuestion();
  const visibleWrongButtons = $$(".answer-button").filter((button) => {
    return (
      Number(button.dataset.index) !== question.correct &&
      !button.classList.contains("eliminated")
    );
  });

  if (visibleWrongButtons.length < 2) {
    temporaryGameNotice("El sistema 50/50 ya fue aplicado.", "error");
    return;
  }

  shuffleArray(visibleWrongButtons)
    .slice(0, 2)
    .forEach((button) => {
      button.classList.add("eliminated");
      button.disabled = true;
    });

  state.powerups.fifty -= 1;
  temporaryGameNotice(
    "50/50 ejecutado: dos respuestas incompatibles fueron ocultadas.",
    "success"
  );
}

function useHint() {
  const hintBox = $("#hint-box");

  if (!hintBox.classList.contains("hidden")) {
    temporaryGameNotice("La pista de este reto ya está visible.", "error");
    return;
  }

  state.powerups.hint -= 1;
  hintBox.textContent = `PISTA DE INGENIERÍA: ${getCurrentQuestion().hint}`;
  hintBox.classList.remove("hidden");
}

function useLife() {
  if (state.lives >= 3) {
    temporaryGameNotice("La reserva de vidas ya está completa.", "error");
    return;
  }

  state.powerups.life -= 1;
  state.lives += 1;
  temporaryGameNotice("Vida de diagnóstico restaurada.", "success");
}

function useShield() {
  if (state.shieldActive) {
    temporaryGameNotice("El escudo ya se encuentra activo.", "error");
    return;
  }

  state.powerups.shield -= 1;
  state.shieldActive = true;
  temporaryGameNotice(
    "Escudo activado: absorberá el siguiente fallo.",
    "success"
  );
}

function useDoublePoints() {
  if (state.doubleActive) {
    temporaryGameNotice("El multiplicador 2X ya se encuentra activo.", "error");
    return;
  }

  state.powerups.double -= 1;
  state.doubleActive = true;
  temporaryGameNotice(
    "Multiplicador 2X preparado para el siguiente acierto.",
    "success"
  );
}

function temporaryGameNotice(message, type) {
  const feedback = $("#answer-feedback");
  feedback.textContent = message;
  feedback.className = `feedback-box ${type}`;

  window.setTimeout(() => {
    if (!state.answered) {
      feedback.className = "feedback-box hidden";
      feedback.textContent = "";
    }
  }, 2300);
}

function updateInventoryUI() {
  $("#count-fifty").textContent = state.powerups.fifty;
  $("#count-hint").textContent = state.powerups.hint;
  $("#count-life").textContent = state.powerups.life;
  $("#count-shield").textContent = state.powerups.shield;
  $("#count-double").textContent = state.powerups.double;

  $$(".powerup-button").forEach((button) => {
    const type = button.dataset.powerup;
    button.disabled = state.powerups[type] <= 0 || state.answered;
  });

  $("#inline-hint-button").disabled =
    state.powerups.hint <= 0 ||
    state.answered ||
    !$("#hint-box").classList.contains("hidden");
}

function buyRouletteSpin() {
  if (state.answered) return;

  if (state.score < 200) {
    temporaryGameNotice(
      "Se requieren 200 puntos para comprar un giro.",
      "error"
    );
    return;
  }

  state.score -= 200;
  state.rouletteSpins += 1;
  animateScore();
  updateHUD();
  temporaryGameNotice(
    "Giro de ruleta adquirido por 200 puntos.",
    "success"
  );
}

function finishGame(completed) {
  clearInterval(state.timerId);

  const answeredCount = completed
    ? state.questions.length
    : Math.min(state.currentIndex + 1, state.questions.length);

  const percentage =
    state.questions.length > 0
      ? Math.round((state.correctAnswers / state.questions.length) * 100)
      : 0;

  const performance =
    percentage >= 90
      ? "Especialista de hardware"
      : percentage >= 70
        ? "Técnico competente"
        : percentage >= 50
          ? "Operador en formación"
          : "Requiere recalibración";

  $("#result-icon").textContent = completed ? "🏆" : "⚠️";
  $("#result-kicker").textContent = completed
    ? "CERTIFICACIÓN SUPERADA"
    : "GAME OVER";
  $("#result-title").textContent = completed
    ? "Secuencia de diagnóstico completada"
    : "Se agotaron las vidas de diagnóstico";

  $("#result-message").textContent = completed
    ? `${state.player.name}, completaste el módulo ${MODULES[state.player.module]}.`
    : `${state.player.name}, el laboratorio detuvo la prueba para proteger el sistema.`;

  $("#result-score").textContent = state.score.toLocaleString("es-CR");
  $("#result-correct").textContent =
    `${state.correctAnswers} / ${state.questions.length}`;
  $("#result-lives").textContent =
    "❤️".repeat(state.lives) + "🖤".repeat(Math.max(0, 3 - state.lives));
  $("#result-performance").textContent = performance;

  saveRecord(completed, answeredCount);
  renderLeaderboard();
  showTestScreen("result-screen");
}

function saveRecord(completed, answeredCount) {
  const records = getRecords();

  records.push({
    avatar: state.player.avatar,
    name: state.player.name,
    module: MODULES[state.player.module],
    difficulty: DIFFICULTIES[state.player.difficulty].label,
    lives: state.lives,
    score: state.score,
    completed,
    answeredCount,
    date: new Intl.DateTimeFormat("es-CR", {
      dateStyle: "short"
    }).format(new Date())
  });

  records.sort((a, b) => b.score - a.score);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records.slice(0, 15)));
}

function getRecords() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function renderLeaderboard() {
  const body = $("#leaderboard-body");
  const records = getRecords();

  body.innerHTML = "";

  if (records.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 7;
    cell.className = "empty-row";
    cell.textContent = "No existen registros. Completa una prueba para iniciar la tabla.";

    row.appendChild(cell);
    body.appendChild(row);
    return;
  }

  records.forEach((record, index) => {
    const row = document.createElement("tr");
    const values = [
      `#${index + 1}`,
      `${record.avatar} ${record.name}`,
      record.module,
      record.difficulty,
      `${record.lives}/3`,
      Number(record.score).toLocaleString("es-CR"),
      record.date
    ];

    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    body.appendChild(row);
  });
}

function bindModals() {
  $("#close-roulette").addEventListener("click", () => {
    if (!state.roulette.spinning) {
      closeModal("roulette-modal");
    }
  });

  $$("[data-close-modal]").forEach((backdrop) => {
    backdrop.addEventListener("click", () => {
      if (
        backdrop.dataset.closeModal === "roulette" &&
        state.roulette.spinning
      ) {
        return;
      }

      closeModal(`${backdrop.dataset.closeModal}-modal`);
    });
  });

  $("#spin-button").addEventListener("click", spinRoulette);

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if (
      $("#roulette-modal").classList.contains("open") &&
      !state.roulette.spinning
    ) {
      closeModal("roulette-modal");
    }

    if ($("#confirm-modal").classList.contains("open")) {
      closeModal("confirm-modal");
    }
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function drawRoulette(rotation) {
  const canvas = $("#roulette-canvas");
  const context = canvas.getContext("2d");
  const size = canvas.width;
  const center = size / 2;
  const radius = center - 8;
  const slice = (Math.PI * 2) / ROULETTE_PRIZES.length;

  context.clearRect(0, 0, size, size);
  context.save();
  context.translate(center, center);
  context.rotate(rotation);

  ROULETTE_PRIZES.forEach((prize, index) => {
    const start = index * slice - Math.PI / 2;
    const end = start + slice;

    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, radius, start, end);
    context.closePath();
    context.fillStyle = prize.color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "#0f172a";
    context.stroke();

    context.save();
    context.rotate(start + slice / 2);
    context.translate(radius * 0.62, 0);
    context.rotate(Math.PI / 2);

    context.fillStyle = "#ffffff";
    context.font = "bold 18px Courier New";
    context.textAlign = "center";
    context.textBaseline = "middle";

    const labelParts = prize.label.split(" ");
    const firstLine = labelParts.slice(0, -1).join(" ");
    const lastLine = labelParts[labelParts.length - 1];

    context.fillText(firstLine, 0, -10);
    context.fillText(lastLine, 0, 13);
    context.restore();
  });

  context.beginPath();
  context.arc(0, 0, 38, 0, Math.PI * 2);
  context.fillStyle = "#0f172a";
  context.fill();
  context.lineWidth = 4;
  context.strokeStyle = "#f8fafc";
  context.stroke();

  context.fillStyle = "#fbbf24";
  context.font = "bold 18px Courier New";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText("SPIN", 0, 0);

  context.restore();
}

function spinRoulette() {
  if (
    state.roulette.spinning ||
    state.rouletteSpins < 1 ||
    state.answered
  ) {
    return;
  }

  state.roulette.spinning = true;
  state.rouletteSpins -= 1;
  $("#spin-button").disabled = true;
  $("#close-roulette").disabled = true;
  $("#roulette-result").textContent = "Procesando suministro...";

  const selectedIndex = Math.floor(Math.random() * ROULETTE_PRIZES.length);
  const slice = (Math.PI * 2) / ROULETTE_PRIZES.length;
  const targetCenter = selectedIndex * slice + slice / 2;
  const fullTurns = 6 + Math.floor(Math.random() * 3);
  const startRotation = state.roulette.drawingRotation;
  const targetRotation =
    startRotation +
    fullTurns * Math.PI * 2 +
    (Math.PI * 2 - targetCenter);
  const duration = 3900;
  const startTime = performance.now();

  function frame(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const rotation =
      startRotation + (targetRotation - startRotation) * eased;

    state.roulette.drawingRotation = rotation;
    drawRoulette(rotation);

    if (progress < 1) {
      requestAnimationFrame(frame);
      return;
    }

    state.roulette.spinning = false;
    $("#spin-button").disabled = false;
    $("#close-roulette").disabled = false;

    awardRoulettePrize(ROULETTE_PRIZES[selectedIndex]);
    updateInventoryUI();
    updateHUD();
  }

  requestAnimationFrame(frame);
}

function awardRoulettePrize(prize) {
  if (prize.type === "bonus") {
    state.score += 150;
    animateScore();
  } else if (prize.type === "life") {
    if (state.lives < 3) {
      state.lives += 1;
    } else {
      state.powerups.life += 1;
    }
  } else {
    state.powerups[prize.type] += 1;
  }

  $("#roulette-result").textContent = `SUMINISTRO OBTENIDO: ${prize.label}`;
}

function bindMatching() {
  $("#reset-matching").addEventListener("click", resetMatchingGame);
}

function reset