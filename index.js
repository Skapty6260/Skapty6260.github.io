let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

let values = {
  activator: input1.value,
  usages: input2.value,
  value: input3.value,
};

console.log(values);
