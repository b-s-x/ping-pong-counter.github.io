const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')
const scoreOne = document.querySelector('#part-score-one')
const scoreTwo = document.querySelector('#part-score-two')
const circleOne = document.querySelector('#circle-one')
const circleTwo = document.querySelector('#circle-two')

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
    dated: () => {
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

const commonScore = (circle) => {
  let comScore = 0;
  console.log(comScore);
 if(comScore <= 2) {
   circle.style.display = "block";
   comScore += 1
 } else if(comScore > 2) {
   circle.style.display = "none"
   comScore = null
 }
  // else if() {
 //   circleTwo.style.display = "block"
 //   circleOne.style.display = "none"
 //  }
  }
}


const makeHandler = (newMakeCounter, button, scoreField) => {
    let counter = 0;

    const handleCounter = newMakeCounter.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.getCount()
        button.innerHTML = newMakeCounter.dated()
        scoreField.innerHTML = newMakeCounter.score()
      } else {
        newMakeCounter.sub()
        button.innerHTML = newMakeCounter.dated()
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

countButtonOne.addEventListener('click', commonScore(circleOne));
countButtonTwo.addEventListener('click', commonScore(circleTwo));
