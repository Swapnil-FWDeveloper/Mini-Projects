alert("Hello dude how are you ")

const inputBox = document.getElementById('input-box');

inputBox.addEventListener('input', () => {
  const value = inputBox.value;
  inputBox.style.backgroundColor = value;
});
