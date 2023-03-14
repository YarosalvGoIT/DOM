//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const alertButtonRef = document.querySelector("#alertButton");
const alertInputRef = document.querySelector("#alertInput");

alertButtonRef.addEventListener("click", () => {
  alert(`${alertInputRef.value}`);
});

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
const swapButtonRef = document.querySelector("#swapButton");
const leftSwapInputRef = document.querySelector("#leftSwapInput");
const rightSwapInputRef = document.querySelector("#rightSwapInput");

const a = 10;

swapButtonRef.addEventListener("click", asd(a));

function asd(a) {
  return function () {
    console.log(a);
    const leftSwapInputValue = leftSwapInputRef.value;
    const rightSwapInputValue = rightSwapInputRef.value;

    leftSwapInputRef.value = rightSwapInputValue;
    rightSwapInputRef.value = leftSwapInputValue;
  };
}
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passwordInputRef = document.querySelector("#passwordInput");
const passwordButtonRef = document.querySelector("#passwordButton");

passwordButtonRef.addEventListener(
  "click",
  hidePassword("Открыть", "Закрыть", "type")
);

function hidePassword(btnTextOpen, btnTextClose) {
  return () => {
    const inputTypeValue = passwordInputRef.getAttribute("type");

    if (inputTypeValue === "text") {
      passwordInputRef.setAttribute("type", "password");
      passwordButtonRef.textContent = btnTextOpen;
    } else {
      passwordInputRef.setAttribute("type", "text");
      passwordButtonRef.textContent = btnTextClose;
    }
  };
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxRef = document.querySelector("#box");
const decreaseRef = document.querySelector("#decrease");
const increaseRef = document.querySelector("#increase");

decreaseRef.addEventListener("click", decreaseBoxSize);
increaseRef.addEventListener("click", increaseBoxSize);

let boxWidth = parseInt(getComputedStyle(boxRef).width);
let boxHeight = parseInt(getComputedStyle(boxRef).height);

function decreaseBoxSize() {
  boxWidth += 10;
  boxHeight += 10;
  boxRef.style.width = `${boxWidth}px`;
  boxRef.style.height = `${boxHeight}px`;
}

function increaseBoxSize() {
  boxWidth -= 10;
  boxHeight -= 10;
  boxRef.style.width = `${boxWidth}px`;
  boxRef.style.height = `${boxHeight}px`;
}

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

// const placeRef = document.querySelector("#place");
// addEventListener("click", (e) => {
//   console.log(e.target === placeRef ? true : false);
// });

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

const doubleBtnRef = document.querySelector("#double");
const arrItemsRefs = document.querySelectorAll(".listItem");

doubleBtnRef.addEventListener("click", () => {
  arrItemsRefs.forEach(
    (item) => (item.textContent = BigInt(item.textContent) ** 2n)
  );
});

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const circle = document.querySelector(".outerCircle");

const onMouseMove = (e) => {
  console.log("move");

  let left = e.pageX;
  let top = e.pageY;

  circle.style.top = `${top - 15}px`;
  circle.style.left = `${left - 15}px`;
};

circle.addEventListener("click", (e) => {
  const item = e.currentTarget;
  if (item.style.position === "absolute") {
    window.removeEventListener("mousemove", onMouseMove);
    item.style.position = "static";
    return;
  }

  item.style.position = "absolute";
  window.addEventListener("mousemove", onMouseMove);
});

// ===================================================
// ===================================================

/*
Задача 8
При кліку на кожну із кнопок додаються значення з data-атрибутів.
При натисканні на кнопку "Вивести результат" виводиться сума значень, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

// const list = document.querySelector(".statList");
// const resultButton = document.querySelector("#resultButton");
// const resultSection = document.querySelector("#resultSection");
// let total = 0;
// const stat = {};

// list.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "BUTTON") return;

//   const value = +e.target.dataset.number;
//   const buttonName = e.target.textContent;

//   if (!stat[buttonName]) stat[buttonName] = 1;
//   else stat[buttonName] += 1;

//   total += value;
// });

// resultButton.addEventListener("click", () => {
//   const totalResult = `<p>Total: ${total}</p>`;
//   const markup = Object.entries(stat)
//     .map((item) => {
//       return `
//         <li>${item[0]} was clicked ${item[1]} times</li>
//         `;
//     })
//     .join("");
//   resultSection.insertAdjacentHTML(
//     "afterbegin",
//     totalResult + `<ul>${markup}</ul>`
//   );
// });

// ===================================================
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// const form = document.querySelector(".checkboxForm");

// 1var
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const list = document.querySelectorAll(".checkboxWrapper");
//   const filteredList = [...list].filter(
//     (wrapper) => wrapper.lastElementChild.checked
//   );
//   filteredList.forEach((elem) => elem.remove());
// });

// 2var
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const items = document.querySelectorAll('.checkboxWrapper');
//     const list = document.querySelector('.checkboxList');

//     const filteredItems = [...items].filter(wrapper => !wrapper.lastElementChild.checked);
//     list.innerHTML = '';
//     list.append(...filteredItems);
// })

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// const sortByNameBtn = document.querySelector("#sortByNameButton");
// const sortByLastNameBtn = document.querySelector("#sortByLastNameButton");

// sortByNameBtn.addEventListener("click", () => {
//   const list = document.querySelector(".people");
//   const items = list.children;
//   const sortedItems = [...items].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[0].toLowerCase();
//     const secondValue = b.textContent.split(" ")[0].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });

//   list.innerHTML = "";
//   list.append(...sortedItems);
// });

// sortByLastNameBtn.addEventListener("click", () => {
//   const list = document.querySelector(".people");
//   const items = list.children;
//   const sortedItems = [...items].sort((a, b) => {
//     const firstValue = a.textContent.split(" ")[1].toLowerCase();
//     const secondValue = b.textContent.split(" ")[1].toLowerCase();
//     return firstValue.localeCompare(secondValue);
//   });

//   list.innerHTML = "";
//   list.append(...sortedItems);
// });

// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/
const filter = document.querySelector(".contactsFilter");
const list = document.querySelector(".contacts");
const items = [...list.children];
console.log(items.length);

filter.addEventListener("input", (e) => {
  const { value } = e.target;
  console.log(items.length);

  const filteredItems = [...items].filter((item) =>
    item.textContent.toLowerCase().includes(value)
  );
  list.innerHTML = "";
  list.append(...filteredItems);
});

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// const text = document.querySelector('.text');
// const inputFrom = document.querySelector('#from');
// const inputTo = document.querySelector('#to');
// const btn = document.querySelector('#replaceButton');

// btn.addEventListener('click', () => {
//     const fromValue = inputFrom.value.trim();
//     const toValue = inputTo.value.trim();
//     if (!fromValue.length || !toValue.length) {
//         alert('Please fill in both fields');
//         return;
//     }
//     const newText = text.textContent
//     .split('')
//     .map(char => char === fromValue ? toValue : char)
//     .join('');
//     text.textContent = newText;
// })

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/

// const grid = document.querySelector('.grid');
// grid.addEventListener('mouseover', (e) => {
// if (!e.target.classList.contains('gridItem')) return;
// e.target.style.opacity = 0;
// })

// grid.addEventListener('mouseout', (e) => {
//     if (!e.target.classList.contains('gridItem')) return;
//     e.target.style.opacity = 1;
// })
