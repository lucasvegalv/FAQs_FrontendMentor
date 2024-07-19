const buttons = Array.from(document.getElementsByClassName('plus-icon'));
const texts = Array.from(document.getElementsByClassName('answer'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButton(button);
  });
})


// TOGGLE BUTTON FUNCTION

// TO DO: 
//   - Mejorar transiciones y UX varios
//   - Optimizar codigo

let lastOpenButtonIndex = 0;

function toggleButton(button) {

  const currentSrc = new URL(button.src).pathname;
  const currentSrcLastButton = new URL(buttons[lastOpenButtonIndex].src).pathname;
  const buttonIndex = buttons.indexOf(button);
  const text = texts[buttonIndex];
  const textLastButton = texts[lastOpenButtonIndex];



  if ((currentSrc === "/assets/images/icon-minus.svg")) {
    button.src = "/assets/images/icon-plus.svg";
    text.style.display = "none";
    console.log(buttonIndex);
  } else {

    if (buttonIndex != lastOpenButtonIndex) {
      // Volvemos a ocultar el texto y cambiamos el boton del que ya estaba abierto
      buttons[lastOpenButtonIndex].src = "/assets/images/icon-plus.svg";
      textLastButton.style.display = "none";

      // Mostramos el texto y cambiamos el boton del nuevo
      button.src = "/assets/images/icon-minus.svg";
      text.style.display = 'block';

      lastOpenButtonIndex = buttonIndex;
    } else {
      button.src = "/assets/images/icon-minus.svg";
      text.style.display = 'block';

      lastOpenButtonIndex = buttonIndex;
    }
  }
}

