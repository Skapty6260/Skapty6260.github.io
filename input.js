let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let title = document.getElementById("title");

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let values = {
  activator: input1.value,
  usages: input2.value,
  value: input3.value,
};

input1.addEventListener("change", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
    tg.MainButton.enable()
    tg.MainButton.setText = "Продолжить"
  }
});

tg.MainButton.on("click", () => {
  tg.sendData(input1.value);
});
