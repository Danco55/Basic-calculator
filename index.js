const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      vymazatfunkciu();
    } else if (buttonValue === "=") {
      vypocitatfunkciu();
    } else if (buttonValue === "D") {
      odstranPoslednyZnak();
    } else if (buttonValue === "R") {
      reverseFunction();
    } else if (buttonValue === "UD") {
      upsideDownFunction();
    } else if (buttonValue === "RC") {
      randomColorFunction();
    }  else {
      pripojitfunckuuuu(buttonValue);
    }
  });
}

function vymazatfunkciu() {
  inputFieldEl.value = "";
}

function vypocitatfunkciu() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function pripojitfunckuuuu(buttonValue) {
  inputFieldEl.value += buttonValue;
}

function odstranPoslednyZnak() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

function reverseFunction() {
  inputFieldEl.value = inputFieldEl.value.split('').reverse().join('');
}

function upsideDownFunction() {
  const upsideDownDigits = {
    '0': '0',
    '1': 'Ɩ',
    '2': 'ᄅ',
    '3': 'Ɛ',
    '4': 'ᔭ',
    '5': 'ϛ',
    '6': '9',
    '7': 'ㄥ',
    '8': '8',
    '9': '6',
  };

  inputFieldEl.value = inputFieldEl.value
    .split('')
    .reverse()
    .map(char => upsideDownDigits[char] || char)
    .join('');
}

function randomColorFunction(){
const randomColor = getRandomColor();
document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}