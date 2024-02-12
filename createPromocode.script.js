let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.MainButton.setText("Создать");

let values = {
  activatior: input1.value,
  usages: input2.value,
  value: input3.value,
};

const showMainBtn = () => {
  if (!values.activatior || !values.usages || !values.value) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
  }
};

input1.addEventListener("change", function () {
  showMainBtn();
});
input2.addEventListener("change", function () {
  showMainBtn();
});
input3.addEventListener("change", function () {
  showMainBtn();
});

tg.onEvent("mainButtonClicked", () => {
  values = {
    activatior: input1.value,
    usages: input2.value,
    value: input3.value,
  };

  tg.send(JSON.stringify(values));
});
