let tg = window.Telegram.WebApp;

tg.expand();

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

tg.MainButton.setParams({
    text: 'Создать',
    textColor: "#fffff",
    color: "#2cab37"
})

let values = {};

const showMainBtn = () => {
console.log(values)
  if (!values.activatior || !values.usages || !values.value) {
    tg.MainButton.hide();
  } else {
    tg.mainButton.enable();
    tg.MainButton.show();
  }
};

input1.addEventListener('change', () => {
  let val = input1.value;
  values.activator = val;
  
  showMainBtn();
})
input2.addEventListener('change', () => {
  let val = input1.value;
  values.usages = val;
   showMainBtn();
})
input3.addEventListener('change', () => {
  let val = input1.value;
  values.value = val;
  showMainBtn();
})

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
