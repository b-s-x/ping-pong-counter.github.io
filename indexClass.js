const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')
const scoreOne = document.querySelector('#part-score-one')
const scoreTwo = document.querySelector('#part-score-two')
const circleOne = document.querySelector('#circle-one')
const circleTwo = document.querySelector('#circle-two')

class Counter {
  constructor () {
    this.data = 0;
    this.score = 0;
  }

  setCount() { return this.data++ }

  allReset() {
    this.data = 0
    this.score = 0
  }

  locReset() { return this.data = 0 }

  sub() { return this.data-- }

  setScore() { return this.score++ }

  getData() { return this.data }

  getScore() { this.score }

  debounce (func, wait) {
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

  refresh(newCounter, buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = newCounter.getData()
    scoreCounter.innerHTML = newCounter.getScore()
  }
}

const leftCounter = new Counter()
const rightCounter = new Counter()

const refreshOne = leftCounter.refresh(leftCounter, countButtonOne, scoreOne)


const viewCount = () => {
  countButtonOne.innerHTML = 0;
  countButtonTwo.innerHTML = 0;
  scoreOne.innerHTML = 0;
  scoreTwo.innerHTML = 0;
}

resetButton.addEventListener('click', () => {
  leftCounter.allReset() & rightCounter.allReset();

})

const makeHandler = (newMakeCounter, button, scoreField) => {
    let counter = 0;

    const handleCounter = newMakeCounter.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.setCount()
        newMakeCounter.getScore()
      } else {
        newMakeCounter.sub()
      }

      counter = 0;
    }, 250);

    return () => {
      counter += 1;
      handleCounter();
    };
};

countButtonOne.addEventListener('click', makeHandler(leftCounter, countButtonOne, scoreOne));
countButtonTwo.addEventListener('click', makeHandler(rightCounter, countButtonTwo, scoreTwo));




















//
