const quizData = [
  {
    topic: "Типы данных",
    question: "Какой результат вернет выражение `typeof null`?",
    options: ["null", "object", "undefined", "number"],
    answer: "object",
    explanation: "Это известная историческая особенность JavaScript: `typeof null` возвращает `object`."
  },
  {
    topic: "Операторы",
    question: "Что выведет `console.log(2 + '2')`?",
    options: ["4", "'22'", "22", "NaN"],
    answer: "22",
    explanation: "При сложении числа и строки число приводится к строке, поэтому результатом будет строка `22`."
  },
  {
    topic: "Сравнение",
    question: "Какой результат вернет выражение `5 === '5'`?",
    options: ["true", "false", "undefined", "TypeError"],
    answer: "false",
    explanation: "Строгое сравнение `===` проверяет и значение, и тип данных."
  },
  {
    topic: "Условия",
    question: "Что будет выведено в консоль?",
    code: "if (0) {\n  console.log('Да');\n} else {\n  console.log('Нет');\n}",
    options: ["Да", "Нет", "0", "Ошибка"],
    answer: "Нет",
    explanation: "Значение `0` является falsy, поэтому выполнится ветка `else`."
  },
  {
    topic: "Циклы",
    question: "Чему будет равно значение `sum` после выполнения кода?",
    code: "let sum = 0;\nfor (let i = 1; i <= 3; i++) {\n  sum += i;\n}",
    options: ["3", "6", "9", "12"],
    answer: "6",
    explanation: "Цикл складывает 1 + 2 + 3, поэтому итог равен 6."
  },
  {
    topic: "Циклы",
    question: "Какое финальное значение будет у `count`?",
    code: "let count = 0;\nwhile (count < 3) {\n  count++;\n}",
    options: ["2", "3", "4", "undefined"],
    answer: "3",
    explanation: "Цикл будет выполняться, пока `count` меньше 3. После третьего увеличения условие станет ложным."
  },
  {
    topic: "Отладка",
    question: "Где ошибка в этом коде?",
    code: "const arr = [10, 20, 30];\nfor (let i = 0; i <= arr.length; i++) {\n  console.log(arr[i]);\n}",
    options: [
      "Нужно заменить `<=` на `<`",
      "Нужно заменить `console.log` на `alert`",
      "Нужно убрать `let`",
      "Ошибки нет"
    ],
    answer: "Нужно заменить `<=` на `<`",
    explanation: "При `i <= arr.length` цикл заходит на индекс `3`, которого в массиве нет, и выводит `undefined`."
  },
  {
    topic: "Функции",
    question: "Что вернет этот код?",
    code: "function greet(name = 'JS') {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet());",
    options: ["Hello, undefined!", "Hello, JS!", "JS", "Ошибка"],
    answer: "Hello, JS!",
    explanation: "Если аргумент не передан, используется значение параметра по умолчанию."
  },
  {
    topic: "Массивы",
    question: "Что вернет выражение `[1, 2, 3].map(x => x * 2)`?",
    options: ["[1, 2, 3, 2]", "[2, 4, 6]", "[1, 4, 9]", "[0, 0, 0]"],
    answer: "[2, 4, 6]",
    explanation: "Метод `map` создает новый массив, применяя функцию к каждому элементу."
  },
  {
    topic: "Массивы",
    question: "Что вернет выражение `[1, 2, 3, 4].filter(x => x % 2 === 0)`?",
    options: ["[1, 3]", "[2, 4]", "[0, 2, 4]", "[1, 2, 3, 4]"],
    answer: "[2, 4]",
    explanation: "Метод `filter` оставляет только те элементы, для которых условие истинно."
  },
  {
    topic: "Массивы",
    question: "Чему будет равно `total` после выполнения кода?",
    code: "let total = 0;\n[1, 2, 3].forEach(item => {\n  total += item;\n});",
    options: ["3", "5", "6", "undefined"],
    answer: "6",
    explanation: "`forEach` проходит по каждому элементу массива, а переменная `total` накапливает сумму."
  },
  {
    topic: "Объекты",
    question: "Как получить значение свойства `name` у объекта `user`?",
    code: "const user = { name: 'Aruzhan', age: 19 };",
    options: ["user[name]", "user->name", "user.name", "name.user"],
    answer: "user.name",
    explanation: "Для обращения к известному имени свойства используется точечная нотация."
  },
  {
    topic: "DOM",
    question: "Как правильно получить элемент с `id='title'`?",
    options: [
      "document.query('title')",
      "document.getElementById('title')",
      "window.getId('title')",
      "document.getClass('title')"
    ],
    answer: "document.getElementById('title')",
    explanation: "Для поиска по `id` используется метод `document.getElementById(...)`."
  },
  {
    topic: "События",
    question: "Какой код корректно реагирует на клик по кнопке?",
    code: "const button = document.querySelector('#send');",
    options: [
      "button.addEventListener('click', () => console.log('Clicked'));",
      "button.listen('click');",
      "button.click = 'Clicked';",
      "document.addClick(button);"
    ],
    answer: "button.addEventListener('click', () => console.log('Clicked'));",
    explanation: "Обработчики событий обычно подключаются через `addEventListener`."
  },
  {
    topic: "Отладка",
    question: "Как правильно исправить условие в коде ниже?",
    code: "let a = 5;\nif (a = 10) {\n  console.log('OK');\n}",
    options: [
      "Заменить `=` на `===`",
      "Заменить `let` на `var`",
      "Убрать `console.log`",
      "Добавить `return`"
    ],
    answer: "Заменить `=` на `===`",
    explanation: "Одинарный `=` выполняет присваивание, а для проверки условия нужен оператор сравнения."
  },
  {
    topic: "DOM",
    question: "Что делает эта строка кода?",
    code: "document.querySelector('.card').textContent = 'Ready';",
    options: [
      "Удаляет элемент `.card`",
      "Меняет текст внутри первого элемента с классом `.card`",
      "Создает новый элемент `.card`",
      "Прячет все элементы `.card`"
    ],
    answer: "Меняет текст внутри первого элемента с классом `.card`",
    explanation: "`querySelector` берет первый подходящий элемент, а `textContent` изменяет его текстовое содержимое."
  }
];

const quizContainer = document.getElementById("quiz-container");
const totalCount = document.getElementById("total-count");
const correctCount = document.getElementById("correct-count");
const progressCount = document.getElementById("progress-count");
const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");
const resultPanel = document.getElementById("result-panel");
const resultSummary = document.getElementById("result-summary");
const topicBreakdown = document.getElementById("topic-breakdown");

function renderQuiz() {
  totalCount.textContent = quizData.length;
  quizContainer.innerHTML = "";

  quizData.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const optionsMarkup = item.options.map((option, optionIndex) => {
      const optionId = `q${index}-option${optionIndex}`;
      return `
        <label class="option" for="${optionId}">
          <input type="radio" id="${optionId}" name="question-${index}" value="${escapeHtml(option)}">
          <span>${escapeHtml(option)}</span>
        </label>
      `;
    }).join("");

    card.innerHTML = `
      <div class="question-meta">
        <span class="question-number">Вопрос ${index + 1}</span>
        <span class="topic-chip">${item.topic}</span>
      </div>
      <h3 class="question-title">${item.question}</h3>
      ${item.code ? `<pre><code>${escapeHtml(item.code)}</code></pre>` : ""}
      <div class="options">${optionsMarkup}</div>
      <div class="feedback hidden"></div>
    `;

    quizContainer.appendChild(card);
  });

  updateProgress();
}

function updateProgress() {
  const answered = quizData.filter((_, index) => {
    return document.querySelector(`input[name="question-${index}"]:checked`);
  }).length;

  progressCount.textContent = `${answered} / ${quizData.length}`;
}

function checkAnswers() {
  let correct = 0;
  const topicStats = {};

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    const card = quizContainer.children[index];
    const optionLabels = card.querySelectorAll(".option");
    const feedback = card.querySelector(".feedback");

    optionLabels.forEach(label => {
      label.classList.remove("correct", "wrong");
      const input = label.querySelector("input");

      if (input.value === item.answer) {
        label.classList.add("correct");
      }

      if (selected && input.checked && input.value !== item.answer) {
        label.classList.add("wrong");
      }
    });

    if (!topicStats[item.topic]) {
      topicStats[item.topic] = { correct: 0, total: 0 };
    }

    topicStats[item.topic].total += 1;

    if (selected && selected.value === item.answer) {
      correct += 1;
      topicStats[item.topic].correct += 1;
    }

    feedback.classList.remove("hidden");
    feedback.innerHTML = `<strong>Правильный ответ:</strong> ${escapeHtml(item.answer)}<br>${escapeHtml(item.explanation)}`;
  });

  correctCount.textContent = correct;
  renderResult(correct, topicStats);
}

function renderResult(correct, topicStats) {
  const percent = Math.round((correct / quizData.length) * 100);
  resultSummary.textContent = `Вы ответили правильно на ${correct} из ${quizData.length} вопросов. Итог: ${percent} баллов из 100.`;

  topicBreakdown.innerHTML = Object.entries(topicStats).map(([topic, stats]) => {
    return `
      <div class="topic-stat">
        <strong>${topic}</strong>
        <p>${stats.correct} из ${stats.total} правильных</p>
      </div>
    `;
  }).join("");

  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  renderQuiz();
  correctCount.textContent = "0";
  resultPanel.classList.add("hidden");
}

function escapeHtml(value) {
  return value
    .toString()
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

quizContainer.addEventListener("change", updateProgress);
checkBtn.addEventListener("click", checkAnswers);
resetBtn.addEventListener("click", resetQuiz);

renderQuiz();
