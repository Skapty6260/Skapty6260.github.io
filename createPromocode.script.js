let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let values = {
  activatior: input1.value,
  usages: input2.value,
  value: input3.value,
};

const showMainBtn = () => {
  if (!values.activatior || !values.usages || !values.value) {
    tg.MainButton.hide();
  } else {
    tg.mainButton.enable();
    tg.MainButton.setText("Создать");
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
    activator: input1.value,
    usages: input2.value,
    value: input3.value,
  };

  const data = {
      dataApp: 'createPromo',
      values
  }

  tg.send(JSON.stringify(data));
});
