const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')

const makeCounter = () => {
  let data = 0;

  return {
    getCount: () => data++,
    reset: () => data = 0,
    sub: () => data--,
    data: () => data,
    debounce: (func, wait) => {
      let timeout;

      return function exeFunc() {

      const later = () => {
          timeout = null;
          func.apply(this, arguments);
        }

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      }
    }
  };
};

let counterOne = makeCounter();
let counterTwo = makeCounter();

resetButton.addEventListener('click', () => {
  counterOne.reset() & counterTwo.reset();
  countButtonOne.innerHTML = 0;
  countButtonTwo.innerHTML = 0;
})

const makeHandler = (newMakeCounter, button) => {
    let counter = 0;

    const handleCounter = newMakeCounter.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.getCount()
        button.innerHTML = newMakeCounter.data()
      } else {
        newMakeCounter.sub()
        button.innerHTML = newMakeCounter.data()
      }
      counter = 0;
    }, 200);

    return () => {
      counter += 1;
      handleCounter();
    };
};

countButtonOne.addEventListener('click', makeHandler(counterOne, countButtonOne));
countButtonTwo.addEventListener('click', makeHandler(counterTwo, countButtonTwo));
