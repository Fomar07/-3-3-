// Набор примеров, использованных в сложных заданиях викторины.

// 1. Типы данных и операторы
const dataTypeExample = typeof null;
const stringConcatExample = 2 + "2";
const strictCompareExample = 5 === "5";

// 2. Условия
function falsyConditionDemo() {
  if (0) {
    return "Да";
  }

  return "Нет";
}

// 3. Циклы
function forLoopSumDemo() {
  let sum = 0;

  for (let i = 1; i <= 3; i++) {
    sum += i;
  }

  return sum;
}

function whileLoopDemo() {
  let count = 0;

  while (count < 3) {
    count++;
  }

  return count;
}

// 4. Отладка массива
function arrayDebugDemo() {
  const arr = [10, 20, 30];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5. Функции
function greet(name = "JS") {
  return `Hello, ${name}!`;
}

// 6. Методы массивов
function mapDemo() {
  return [1, 2, 3].map(item => item * 2);
}

function filterDemo() {
  return [1, 2, 3, 4].filter(item => item % 2 === 0);
}

function forEachDemo() {
  let total = 0;

  [1, 2, 3].forEach(item => {
    total += item;
  });

  return total;
}

// 7. Объекты
const user = {
  name: "Aruzhan",
  age: 19
};

function objectAccessDemo() {
  return user.name;
}

// 8. DOM и события
function domSelectorDemo() {
  return document.getElementById("title");
}

function buttonEventDemo() {
  const button = document.querySelector("#send");

  if (!button) {
    return "Кнопка не найдена";
  }

  button.addEventListener("click", () => {
    console.log("Clicked");
  });

  return "Обработчик подключен";
}

function updateCardTextDemo() {
  const card = document.querySelector(".card");

  if (!card) {
    return "Элемент .card не найден";
  }

  card.textContent = "Ready";
  return card.textContent;
}

// 9. Отладка условия
function fixedConditionDemo(a) {
  if (a === 10) {
    return "OK";
  }

  return "Not OK";
}

console.log({
  dataTypeExample,
  stringConcatExample,
  strictCompareExample,
  falsyConditionDemo: falsyConditionDemo(),
  forLoopSumDemo: forLoopSumDemo(),
  whileLoopDemo: whileLoopDemo(),
  mapDemo: mapDemo(),
  filterDemo: filterDemo(),
  forEachDemo: forEachDemo(),
  objectAccessDemo: objectAccessDemo(),
  greetDefault: greet(),
  fixedConditionDemo: fixedConditionDemo(10)
});
