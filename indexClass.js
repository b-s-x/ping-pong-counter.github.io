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

  getScore() { return this.score }

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

  resetViewCount(buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = 0;
    scoreCounter.innerHTML = 0;
  }

  refresh(newCounter, buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = newCounter.getData()
    scoreCounter.innerHTML = newCounter.getScore()
  }
}

const leftCounter = new Counter();
const rightCounter = new Counter();

resetButton.addEventListener('click', () => {
  leftCounter.allReset() & rightCounter.allReset(); // сбрасываю data
  leftCounter.resetViewCount(countButtonOne, scoreOne);// сбрасываю view
  rightCounter.resetViewCount(countButtonTwo, scoreTwo);
})

const addScore = () => {
  let one = leftCounter.getData(); //получаем счет каждого каунтера
  let two = rightCounter.getData();

  if(one >=10) {
    leftCounter.setScore();// прибавляем счет в партии score
    leftCounter.locReset(); // обнуляем data для каунтера
    rightCounter.locReset();
  } else if (two >=10) {
    rightCounter.setScore();
    leftCounter.locReset();
    rightCounter.locReset();
  }
};

const commonScore = (circleOne, circleTwo) => {
  let comScore = leftCounter.getData() + rightCounter.getData()
    let x = Math.floor(comScore / 2) % 2

    circleTwo.style.opacity = x;
    circleOne.style.opacity = 1 - x
  }

const makeHandler = (newMakeCounter, button, scoreField) => {
    let counter = 0;

    const handleCounter = newMakeCounter.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.setCount() // прибавляем счет
        commonScore(circleOne, circleTwo); // вызываем функцию отображения подачи
        addScore() //прибавляем счет в партии
      } else {
        newMakeCounter.sub()
      }
      // обновляем view
      leftCounter.refresh(leftCounter, countButtonOne, scoreOne);
      rightCounter.refresh(rightCounter, countButtonTwo, scoreTwo);

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
