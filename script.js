const buttons = Array.from(document.getElementsByClassName('plus-icon'));
const texts = Array.from(document.getElementsByClassName('answer'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButton(button);
  });
})
  

// TOGGLE BUTTON FUNCTION

// TO DO: Que solo se pueda abrir una a la vez, mejorar transiciones y UX varios

let lastOpenButtonIndex = 0;

function toggleButton(button) {

  const currentSrc = new URL(button.src).pathname;
  const currentSrcLastButton = new URL(buttons[lastOpenButtonIndex].src).pathname;
  const buttonIndex = buttons.indexOf(button);
  const text = texts[buttonIndex];
  const textLastButton = texts[lastOpenButtonIndex];
  
  
  
  if((currentSrc === "/assets/images/icon-minus.svg")) {
    button.src = "/assets/images/icon-plus.svg";
    text.style.display = "none";
    console.log(buttonIndex);
  } else {
    
    if(buttonIndex != lastOpenButtonIndex) {

      console.log('son botones distintos, no se pueden abrir a la vez!');

      // Volvemos a ocultar el texto y cambiamos el boton del que ya estaba abierto
      buttons[lastOpenButtonIndex].src = "/assets/images/icon-plus.svg";
      textLastButton.style.display = "none";

      // Mostramos el texto y cambiamos el boton del nuevo
      button.src = "/assets/images/icon-minus.svg";
      text.style.display = 'block';

      console.log(`Ultimo abierto: ${lastOpenButtonIndex} y el nuevo: ${buttonIndex}`);
      lastOpenButtonIndex = buttonIndex;
      console.log(`Ahora el ultimo abierto es: ${lastOpenButtonIndex}`);


    } else {
      button.src = "/assets/images/icon-minus.svg";
      text.style.display = 'block';

      console.log(`Ultimo abierto: ${lastOpenButtonIndex} y el nuevo: ${buttonIndex}`);
      lastOpenButtonIndex = buttonIndex;
      console.log(`Ahora el ultimo abierto es: ${lastOpenButtonIndex}`);
    }
  }
}

