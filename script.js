const buttons = Array.from(document.getElementsByClassName('plus-icon'));
const texts = Array.from(document.getElementsByClassName('answer'));

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toggleButton(button);
  });
})
  

// TOGGLE BUTTON FUNCTION

// TO DO: Que solo se pueda abrir una a la vez 
function toggleButton(button) {
  const currentSrc = new URL(button.src).pathname;
  const buttonIndex = buttons.indexOf(button);
  const text = texts[buttonIndex];

  
  if((currentSrc == "/assets/images/icon-minus.svg")) {
    button.src = "/assets/images/icon-plus.svg";
    text.style.display = 'none';
  } else {
    button.src = "/assets/images/icon-minus.svg";
    text.style.display = 'block';
  }
}