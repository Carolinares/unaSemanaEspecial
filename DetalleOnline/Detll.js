/* =====================================================
   CONFIGURACIÓN DE LA ESCUELA
===================================================== */

const START_DATE = "2026-09-07";

const END_DATE = "2026-09-11";


/*
  IMPORTANTE:

  true  = modo prueba.
  false = modo real.

  Antes de darle el enlace a tu amigo:
      TEST_MODE = false
*/

const TEST_MODE = true;


/* =====================================================
   CONTENIDO DE LOS 6 DÍAS
===================================================== */

const days = [

  {
    number: 1,

    title: "Empieza con Jehová",

    message: `
      <p>
        Antes de pensar en todo lo que tienes que aprender
        esta semana, recuerda por qué estás aquí.
      </p>

      <p>
        Tu servicio no se sostiene únicamente en tus propias
        fuerzas. Jehová puede darte las fuerzas, la sabiduría
        y el gozo que necesitas para seguir adelante.
      </p>
    `,

    verse: "Isaías 40:31",

    verseText:
      "Pero los que esperan en Jehová recobrarán las fuerzas.",

    question:
      "¿Qué esperas llevarte de esta escuela?",

    options: [
      "🌱 Fortalecer mi espiritualidad",
      "📖 Mejorar mi enseñanza",
      "❤️ Disfrutar más del ministerio",
      "✨ Crecer en algún aspecto personal"
    ],

    feedback:
      "Guarda esta respuesta. Puede ser bonito volver a ella al terminar la semana."
  },


  {
    number: 2,

    title: "El amor por nuestros hermanos importa",

    message: `
      <p>
        Cada hermano que encuentres esta semana tiene una
        historia y experiencias que no conoces.
      </p>

      <p>
        Una conversación puede parecer pequeña desde nuestra
        perspectiva, pero para otra persona puede significar
        muchísimo.
      </p>

      <p>
        Que nunca perdamos de vista:
        el amor por los hermanos.
      </p>
    `,

    verse: "1 Tesalonicenses 2:8",

    verseText:
      "Llegamos a tenerles tanto cariño que estábamos decididos a darles no solo las buenas noticias de Dios, sino también nuestras propias vidas.",

    question:
      "¿Qué cualidad quieres recordar especialmente hoy?",

    options: [
      "❤️ Amor",
      "👂 Escuchar",
      "🤝 Empatía",
      "😊 Paciencia"
    ],

    feedback:
      "Que esa cualidad te acompañe hoy."
  },


  {
    number: 3,

    title: "Mejora tu manera de enseñar",

    message: `
      <p>
        Enseñar no consiste simplemente en saber qué decir.
      </p>

      <p>
        También implica saber escuchar,mostrar empatía, hacer buenas preguntas,
        razonar con la persona y ayudarla a descubrir por sí
        misma lo que dice la Biblia.
      </p>
    `,

    verse: "Proverbios 20:5",

    verseText:
      "Los pensamientos del corazón de un hombre son aguas profundas, pero el hombre perspicaz sabe sacarlos.",

    question:
      "Una persona te plantea una objeción y parece tener muchas preguntas. ¿Qué harías?",

    options: [
      "💬 Darle rápidamente toda la información",
      "👂 Hacerle una pregunta para entender qué piensa realmente",
      "🔄 Cambiar de tema",
      "📖 Leerle varios textos inmediatamente"
    ],

    feedback:
      "Una buena conversación empieza por escuchar con atención."
  },


  {
    number: 4,

    title: "Cuando estés cansado",

    message: `
      <p>
        Si hoy estás cansado, no significa que estés haciendo poco.
      </p>

      <p>
        Incluso quienes aman profundamente su servicio necesitan
        momentos para recuperar fuerzas.
      </p>

      <p>
        No midas esta semana únicamente por cuánto aprendiste.
        Disfruta también de lo que Jehová te está permitiendo vivir.
      </p>
    `,

    verse: "Mateo 11:28",

    verseText:
      "Vengan a mí, todos ustedes que están cargados y agobiados, y yo los aliviaré.",

    question:
      "Haz una pausa antes de continuar.",

    special: "rest"
  },


  {
    number: 5,

    title: "Tu servicio también anima a otros",

    message: `
      <p>
        Sé que esta semana vas a recibir mucha información y
        seguramente habrá muchas cosas que aprender.
      </p>

      <p>
        Pero quería recordarte que tu esfuerzo por
        servir a Jehová también nos anima a los demás.
      </p>

      <p>
        Quizás no siempre alcances a ver el efecto que tienen
        tu disposición, tu tiempo o una conversación que tienes
        con alguien.
      </p>
    `,

    verse: "1 Tesalonicenses 5:11",

    verseText:
      "Por eso, sigan animándose unos a otros y edificándose unos a otros.",

    question:
      "¿Qué quieres recordar hoy?",

    options: [
      "🌱 Mi esfuerzo puede animar a otros",
      "❤️ El amor debe estar detrás de mi servicio",
      "😊 También puedo disfrutar mientras sirvo",
      "🙏 Jehová ve lo que hago"
    ],

    feedback:
      "A veces no vemos inmediatamente el efecto de nuestro esfuerzo, pero eso no significa que no exista."
  },


  {
    number: 6,

    title: "Sigue adelante",

    message: `
      <p>
        Una escuela puede terminar en seis días.
      </p>

      <p>
        Pero lo que aprendes puede acompañarte durante mucho tiempo.
      </p>

      <p>
        Lleva contigo las nuevas ideas, las experiencias,
        las conversaciones y todo aquello que haya fortalecido
        tu deseo de seguir amando y sirviendo a Jehová.
      </p>
    `,

    verse: "Filipenses 3:16",

    verseText:
      "En todo caso, sigamos andando correctamente por este mismo camino.",

    question:
      "La escuela termina. ¿Qué quieres llevar contigo?",

    options: [
      "📖 Lo que aprendí",
      "❤️ El cariño por las personas",
      "🌱 El deseo de seguir creciendo",
      "🧭 Nuevas metas para mi servicio"
    ],

    feedback:
      "La escuela termina. Tu servicio continúa.",

    final: true
  }

];


/* =====================================================
   ESTADO
===================================================== */

let state = {

  started: false,

  currentDay: 1,

  selectedOptions: {},

  reflection: ""

};


/* =====================================================
   ELEMENTOS
===================================================== */

const welcomeScreen =
  document.getElementById(
    "welcomeScreen"
  );

const appScreen =
  document.getElementById(
    "appScreen"
  );

const startButton =
  document.getElementById(
    "startButton"
  );

const dayContainer =
  document.getElementById(
    "dayContainer"
  );

const dayIndicators =
  document.getElementById(
    "dayIndicators"
  );

const progressFill =
  document.getElementById(
    "progressFill"
  );

const progressTitle =
  document.getElementById(
    "progressTitle"
  );

const progressPercent =
  document.getElementById(
    "progressPercent"
  );

const finalSection =
  document.getElementById(
    "finalSection"
  );

const reflectionInput =
  document.getElementById(
    "reflectionInput"
  );

const characterCount =
  document.getElementById(
    "characterCount"
  );

const saveReflection =
  document.getElementById(
    "saveReflection"
  );

const savedMessage =
  document.getElementById(
    "savedMessage"
  );

const responseSummary =
  document.getElementById(
    "responseSummary"
  );


/* =====================================================
   STORAGE
===================================================== */

function loadState() {

  const saved =
    localStorage.getItem(
      "precursorWeek2026"
    );

  if (!saved) return;

  try {

    const parsed =
      JSON.parse(saved);

    state = {
      ...state,
      ...parsed
    };

  } catch (error) {

    console.error(
      "Error cargando progreso:",
      error
    );

  }

}


function saveState() {

  localStorage.setItem(
    "precursorWeek2026",
    JSON.stringify(state)
  );

}


/* =====================================================
   FECHA LOCAL
===================================================== */

function getTodayString() {

  const now =
    new Date();

  const year =
    now.getFullYear();

  const month =
    String(
      now.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      now.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;

}


/* =====================================================
   CALCULAR DÍA
===================================================== */

function getCurrentDay() {

  /*
    Modo prueba:

    Puedes recorrer toda la experiencia
    sin esperar hasta septiembre.
  */

  if (TEST_MODE) {

    return state.currentDay || 1;

  }


  const today =
    getTodayString();


  /*
    Antes del 7 de septiembre
  */

  if (today < START_DATE) {

    return 0;

  }


  /*
    Después del 12 de septiembre
  */

  if (today > END_DATE) {

    return 7;

  }


  /*
    Calcular diferencia
  */

  const start =
    new Date(
      `${START_DATE}T00:00:00`
    );

  const current =
    new Date(
      `${today}T00:00:00`
    );


  const difference =
    current.getTime() -
    start.getTime();


  return (
    Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    ) + 1
  );

}


/* =====================================================
   INDICADORES
===================================================== */

function renderIndicators(
  currentDay
) {

  dayIndicators.innerHTML = "";


  days.forEach(
    day => {

      const indicator =
        document.createElement(
          "div"
        );

      indicator.className =
        "day-dot";


      if (
        day.number === currentDay
      ) {

        indicator.classList.add(
          "active"
        );

      }


      if (
        day.number < currentDay
      ) {

        indicator.classList.add(
          "completed"
        );

      }


      if (
        day.number > currentDay
      ) {

        indicator.classList.add(
          "locked"
        );

      }


      indicator.innerHTML = `

        <div class="day-dot-circle">

          ${
            day.number < currentDay
              ? "✓"
              : day.number > currentDay
                ? "🔒"
                : day.number
          }

        </div>

        <span>
          Día ${day.number}
        </span>

      `;


      dayIndicators.appendChild(
        indicator
      );

    }
  );

}


/* =====================================================
   PROGRESO
===================================================== */

function updateProgress(
  currentDay
) {

  if (currentDay === 0) {

    progressFill.style.width =
      "0%";

    progressPercent.textContent =
      "0%";

    progressTitle.textContent =
      "La escuela aún no comienza";

    return;

  }


  if (currentDay === 7) {

    progressFill.style.width =
      "100%";

    progressPercent.textContent =
      "100%";

    progressTitle.textContent =
      "Recorrido completado";

    return;

  }


  const percentage =
    Math.round(
      ((currentDay - 1) / 5) * 100
    );


  progressFill.style.width =
    `${percentage}%`;

  progressPercent.textContent =
    `${percentage}%`;

  progressTitle.textContent =
    `Día ${currentDay} de 6`;

}


/* =====================================================
   PANTALLA ANTES DE LA ESCUELA
===================================================== */

function renderBeforeSchool() {

  dayContainer.innerHTML = `

    <article class="day-card locked-card">

      <div class="day-content">

        <div class="lock-icon">
          🌿
        </div>

        <span class="eyebrow">
          7 DE SEPTIEMBRE
        </span>

        <h2>
          Todavía no empieza
          la semana especial
        </h2>

        <p>
          Esta experiencia se abrirá
          automáticamente el 7 de septiembre.
        </p>

        <p>
          Puedes cerrar esta página.
          Cuando llegue el día, vuelve a abrir
          el mismo enlace.
        </p>

      </div>

    </article>

  `;

}


/* =====================================================
   PANTALLA DESPUÉS DEL 12
===================================================== */

function renderAfterSchool() {

  dayContainer.innerHTML = "";

  finalSection.classList.remove(
    "hidden"
  );

  finalSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* =====================================================
   RENDER DÍA
===================================================== */

function getVerseUrl(
  verse
) {

  const lastSpace =
    verse.lastIndexOf(" ");

  const book =
    verse
      .slice(0, lastSpace)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");

  const chapterAndVerse =
    verse.slice(
      lastSpace + 1
    );

  const chapter =
    chapterAndVerse.split(":")[0];

  return `https://www.jw.org/es/biblioteca/biblia/biblia-estudio/libros/${book}/${chapter}/`;

}

function renderDay(
  dayNumber
) {

  const day =
    days[dayNumber - 1];


  if (!day) return;


  state.currentDay =
    dayNumber;

  saveState();

  renderIndicators(
    dayNumber
  );

  updateProgress(
    dayNumber
  );


  finalSection.classList.add(
    "hidden"
  );


  dayContainer.innerHTML = "";


  const card =
    document.createElement(
      "article"
    );


  card.className =
    "day-card";


  card.innerHTML = `

    <div class="day-header">

      <span class="day-number">
        DÍA ${day.number}
      </span>

      <h1>
        ${day.title}
      </h1>

    </div>


    <div class="day-content">

      <div class="day-message">

        ${day.message}

      </div>


      <div class="verse-card">

        <p>
          “${day.verseText}”
        </p>

        <strong>
          ${day.verse}
        </strong>

        <br>

        <a
          class="jw-link"
          href="${getVerseUrl(day.verse)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer en JW.org →
        </a>

      </div>


      <div class="question-box">

        <h3>
          ${day.question}
        </h3>

        <div
          id="options"
          class="options"
        ></div>

        <div id="feedback"></div>

      </div>


      <div class="day-actions">

        ${
          day.number > 1
            ? `
              <button
                id="previousButton"
                class="secondary-button"
              >
                ← Anterior
              </button>
            `
            : `<span></span>`
        }


        ${
          day.number < 6

            ? `

              <button
                id="nextButton"
                class="primary-button"
              >
                Continuar →
              </button>

            `

            : `

              <button
                id="finishButton"
                class="primary-button"
              >
                Abrir cierre →
              </button>

            `
        }

      </div>

    </div>

  `;


  dayContainer.appendChild(
    card
  );


  if (
    day.special === "rest"
  ) {

    renderRestButton();

  } else {

    renderOptions(day);

  }


  setupNavigation(
    day.number
  );

}


/* =====================================================
   OPCIONES
===================================================== */

function renderOptions(day) {

  const options =
    document.getElementById(
      "options"
    );

  const feedback =
    document.getElementById(
      "feedback"
    );


  day.options.forEach(
    (option, index) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "option-button";


      button.textContent =
        option;


      if (
        state.selectedOptions[
          day.number
        ] === index
      ) {

        button.classList.add(
          "selected"
        );


        feedback.innerHTML = `

          <div class="feedback">

            ✓ ${day.feedback}

          </div>

        `;

      }


      button.addEventListener(
        "click",
        () => {

          state.selectedOptions[
            day.number
          ] = index;


          saveState();


          document
            .querySelectorAll(
              ".option-button"
            )
            .forEach(
              btn =>
                btn.classList.remove(
                  "selected"
                )
            );


          button.classList.add(
            "selected"
          );


          feedback.innerHTML = `

            <div class="feedback">

              ✓ ${day.feedback}

            </div>

          `;

        }
      );


      options.appendChild(
        button
      );

    }
  );

}


/* =====================================================
   DÍA 4
===================================================== */

function renderRestButton() {

  const options =
    document.getElementById(
      "options"
    );

  const feedback =
    document.getElementById(
      "feedback"
    );


  options.innerHTML = `

    <button
      id="restButton"
      class="primary-button"
    >
      🌿 Necesito un minuto
    </button>

  `;


  document
    .getElementById(
      "restButton"
    )
    .addEventListener(
      "click",
      () => {

        feedback.innerHTML = `

          <div class="feedback">

            Respira.

            <br><br>

            No tienes que resolver todo hoy.

            <br><br>

            Disfruta este momento.

            <br><br>

            <strong>
              Jehová conoce tu esfuerzo.
            </strong>

          </div>

        `;

      }
    );

}


/* =====================================================
   NAVEGACIÓN
===================================================== */

function setupNavigation(
  dayNumber
) {

  const nextButton =
    document.getElementById(
      "nextButton"
    );

  const previousButton =
    document.getElementById(
      "previousButton"
    );

  const finishButton =
    document.getElementById(
      "finishButton"
    );


  /*
    IMPORTANTE:

    Estos botones permiten recorrer
    solamente los días que ya están
    disponibles según la fecha.

    Nunca permiten saltarse días.
  */


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        const currentDay =
          TEST_MODE
            ? days.length
            : getCurrentDay();


        const nextDay =
          dayNumber + 1;


        /*
          No permitir avanzar
          más allá de la fecha real.
        */

        if (
          nextDay >
          currentDay
        ) {

          return;

        }


        renderDay(
          nextDay
        );


        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  if (previousButton) {

    previousButton.addEventListener(
      "click",
      () => {

        renderDay(
          dayNumber - 1
        );


        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  if (finishButton) {

    finishButton.addEventListener(
      "click",
      () => {

        finalSection.classList.remove(
          "hidden"
        );


        finalSection.scrollIntoView({
          behavior: "smooth"
        });


        progressFill.style.width =
          "100%";

        progressPercent.textContent =
          "100%";

      }
    );

  }

}


/* =====================================================
   REFLEXIÓN
===================================================== */

function loadReflection() {

  if (
    !state.reflection
  ) {

    return;

  }


  reflectionInput.value =
    state.reflection;


  updateCharacterCount();

  renderResponseSummary();

}


function renderResponseSummary() {

  const responses =
    days
      .filter(
        day =>
          state.selectedOptions[day.number] !== undefined
      )
      .map(
        day => ({
          day: day.number,
          answer: day.options[state.selectedOptions[day.number]]
        })
      );

  const responseItems =
    days
      .map(
        day => {

          if (day.number === 4) {

            return `
              <li>
                <strong>Día 4:</strong>
                Descansar también forma parte de cuidar tu servicio.
              </li>
            `;

          }

          const response =
            responses.find(
              item => item.day === day.number
            );

          if (!response) return "";

          return `
            <li>
              <strong>Día ${response.day}:</strong>
              ${response.answer}
            </li>
          `;

        }
      )
      .join("");

  const responseText =
    responses
      .map(response => response.answer)
      .join(" ")
      .toLowerCase();

  const suggestion =
    responseText.includes("espiritual")
      ? "Reserva unos minutos esta semana para fortalecer tu espiritualidad."
      : responseText.includes("enseñanza")
        ? "Pon en práctica una nueva forma de enseñar y observa qué cambia."
        : responseText.includes("amor") || responseText.includes("personas")
          ? "Busca una conversación en la que puedas escuchar y demostrar cariño."
          : "Elige una de estas respuestas y conviértela en una acción concreta esta semana.";

  responseSummary.innerHTML = `
    <h3>Tu resumen</h3>
    <ul>${responseItems}</ul>
    ${
      state.reflection
        ? `<p class="saved-reflection"><strong>Tu recordatorio:</strong> <span id="savedReflectionText"></span></p>`
        : ""
    }
        
    <button
      type="button"
      id="downloadSummary"
      class="secondary-button download-summary"
    >
      ↓ Descargar resumen
    </button>
  `;

  if (state.reflection) {

    document.getElementById(
      "savedReflectionText"
    ).textContent = state.reflection;

  }

  document
    .getElementById("downloadSummary")
    .addEventListener(
      "click",
      () => showPsyduckThenDownload(responses, suggestion)
    );

  responseSummary.classList.remove(
    "hidden"
  );

}


function showPsyduckThenDownload(
  responses,
  suggestion
) {

  const surprise =
    document.getElementById("psyduckSurprise");

  surprise.classList.remove(
    "hidden"
  );

  window.setTimeout(
    () => {

      surprise.classList.add(
        "hidden"
      );

      downloadSummaryImage(
        responses,
        suggestion
      );

    },
    3000
  );

}


function downloadSummaryImage(
  responses,
  suggestion
) {

  const canvas =
    document.createElement("canvas");

  const context =
    canvas.getContext("2d");

  const width = 1200;
  const padding = 90;
  const lines = [
    "Día 1: " + (responses.find(item => item.day === 1)?.answer || "Sin respuesta"),
    "Día 2: " + (responses.find(item => item.day === 2)?.answer || "Sin respuesta"),
    "Día 3: " + (responses.find(item => item.day === 3)?.answer || "Sin respuesta"),
    "Día 4: Descansar también forma parte de cuidar tu servicio.",
    "Día 5: " + (responses.find(item => item.day === 5)?.answer || "Sin respuesta"),
    "Día 6: " + (responses.find(item => item.day === 6)?.answer || "Sin respuesta")
  ];

  const wrapText =
    (text, maxWidth) => {
      const words = text.split(" ");
      const wrapped = [];
      let line = "";

      words.forEach(
        word => {
          const candidate = line
            ? `${line} ${word}`
            : word;

          if (
            context.measureText(candidate).width > maxWidth &&
            line
          ) {
            wrapped.push(line);
            line = word;
          } else {
            line = candidate;
          }
        }
      );

      if (line) wrapped.push(line);

      return wrapped;
    };

  context.font = "24px Arial";

  const contentLines = lines.flatMap(
    line => wrapText(line, width - padding * 2)
  );

  const reflectionLines = state.reflection
    ? wrapText(`Mi reflexión: ${state.reflection}`, width - padding * 2)
    : [];

  const suggestionLines = wrapText(
    `Sugerencia: ${suggestion}`,
    width - padding * 2
  );

  const lineHeight = 42;
  const height =
    260 +
    (contentLines.length + reflectionLines.length + suggestionLines.length) * lineHeight +
    100;

  canvas.width = width;
  canvas.height = height;

  context.fillStyle = "#f5f0e5";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "#102b42";
  context.font = "600 58px Georgia";
  context.fillText("Seis días para fortalecer tu servicio", padding, 115);

  context.fillStyle = "#ad8a4e";
  context.font = "24px Arial";
  context.fillText("TU RESUMEN", padding, 165);

  context.strokeStyle = "#ad8a4e";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(padding, 195);
  context.lineTo(width - padding, 195);
  context.stroke();

  let currentY = 255;

  context.fillStyle = "#25343b";
  context.font = "24px Arial";

  contentLines.forEach(
    line => {
      context.fillText(line, padding, currentY);
      currentY += lineHeight;
    }
  );

  if (reflectionLines.length) {

    currentY += 24;
    context.fillStyle = "#216879";

    reflectionLines.forEach(
      line => {
        context.fillText(line, padding, currentY);
        currentY += lineHeight;
      }
    );

  }

  currentY += 24;
  context.fillStyle = "#216879";

  suggestionLines.forEach(
    line => {
      context.fillText(line, padding, currentY);
      currentY += lineHeight;
    }
  );

  const link =
    document.createElement("a");

  link.download = "mi-resumen-seis-dias.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

}


function updateCharacterCount() {

  const length =
    reflectionInput.value.length;


  characterCount.textContent =
    `${length} / 500`;

}


reflectionInput.addEventListener(
  "input",
  updateCharacterCount
);


saveReflection.addEventListener(
  "click",
  () => {

    state.reflection =
      reflectionInput.value.trim();


    saveState();

    renderResponseSummary();


    savedMessage.classList.remove(
      "hidden"
    );


    setTimeout(
      () => {

        savedMessage.classList.add(
          "hidden"
        );

      },
      3500
    );

  }
);


/* =====================================================
   INICIAR EXPERIENCIA
===================================================== */

function startExperience() {

  state.started =
    true;

  state.currentDay =
    1;


  saveState();


  welcomeScreen.classList.add(
    "hidden"
  );


  appScreen.classList.remove(
    "hidden"
  );


  const currentDay =
    getCurrentDay();


  renderIndicators(
    currentDay
  );


  updateProgress(
    currentDay
  );


  if (
    currentDay === 0
  ) {

    renderBeforeSchool();

    return;

  }


  if (
    currentDay === 7
  ) {

    renderAfterSchool();

    return;

  }


  renderDay(
    currentDay
  );


  loadReflection();

}


/* =====================================================
   ARRANQUE
===================================================== */

startButton.addEventListener(
  "click",
  startExperience
);


loadState();