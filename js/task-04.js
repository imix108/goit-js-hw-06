
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let currentValue = 0;

const updateCounter = () => {
  counterValue.textContent = currentValue;
};

decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  currentValue += 1;
  updateCounter();
});

updateCounter();