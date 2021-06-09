const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-action="start"]');
const btnEnd = document.querySelector('button[data-action="stop"]');

const colorLength = colors.length - 1;

const colorChange = {
  intervalId: null,
  isActive: false,
  startColorChanges() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colorLength)];
    }, 1000);
  },

  stopColorChanges() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

btnStart.addEventListener('click', () => {
  colorChange.startColorChanges();
});
btnEnd.addEventListener('click', () => {
  colorChange.stopColorChanges();
});
