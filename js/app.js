const inputText1 = prompt("Введіть перше текстовe полe");
const inputText2 = prompt("Введіть друге текстовe полe");
if (inputText1 !== "" && inputText2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

const number1 = Number(prompt("Введіть перше число"));
const number2 = Number(prompt("Введіть друге число"));
const sum = number1 + number2;
if (sum > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}

const text = prompt("Введіть текст");
if (text.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
  alert("Текст не містить слово JavaScript");
}

const number3 = Number(prompt("Введіть число"));
if ((number3 > 10, number3 < 20)) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}

const userName = prompt("Введіть ім'я");
const userEmail = prompt("Введіть почту");
const userPassword = prompt("Введіть пароль");
if ((userName.length >= 3, userEmail.includes("@"), userPassword.length >= 6)) {
  alert("Перенаправлення на іншу сторінку");
} else {
  alert("Помилка: неправильне заповнення");
}
