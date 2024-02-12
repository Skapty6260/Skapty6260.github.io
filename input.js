let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let title = document.getElementById("title");

tg.MainButton.setParams({
    text: 'Продолжить',
    textColor: "#fffff",
    color: "#2cab37"
})

input1.addEventListener("change", function () {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.show();
    tg.MainButton.enable()
  }
});

tg.onEvent("mainButtonClicked", () => {
  const data = {
      dataApp: 'inputField',
      value: input1.value
  }

  tg.sendData(JSON.stringify(data));
});
