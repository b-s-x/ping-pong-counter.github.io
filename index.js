const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')
const scoreOne = document.querySelector('#part-score-one')
const scoreTwo = document.querySelector('#part-score-two')

const makeCounter = () => {
  let data = 0;
  let score = 0;

  return {
    getCount: () => data++,
    reset: () => {
      data = 0
      score = 0
    },
    sub: () => data--,
    score: () => score,
    data: () => {
      if(data >= 11) {
        score++;
        data = 0
        }
      return data
    },
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
    },
    scoreFunc: (counter, scoreField) => {
      if(counter.data >= 11) {
        scoreField.innerHTML = counter.score()
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
  scoreOne.innerHTML = 0;
  scoreTwo.innerHTML = 0;  
})

const makeHandler = (newMakeCounter, button, scoreField) => {
    let counter = 0;

    const handleCounter = newMakeCounter.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.getCount()
        button.innerHTML = newMakeCounter.data()
        scoreField.innerHTML = newMakeCounter.score()
      } else {
        newMakeCounter.sub()
        button.innerHTML = newMakeCounter.data()
      }
      counter = 0;
    }, 250);

    return () => {
      counter += 1;
      handleCounter();
    };
};

countButtonOne.addEventListener('click', makeHandler(counterOne, countButtonOne, scoreOne));
countButtonTwo.addEventListener('click', makeHandler(counterTwo, countButtonTwo, scoreTwo));
