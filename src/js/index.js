import '../styles/index.css';
import PingPong from './pingpong'

const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')
const scoreOne = document.querySelector('#part-score-one')
const scoreTwo = document.querySelector('#part-score-two')
const circleOne = document.querySelector('#circle-one')
const circleTwo = document.querySelector('#circle-two')

const leftCounter = new PingPong();
const rightCounter = new PingPong();

resetButton.addEventListener('click', () => {
  leftCounter.allReset() & rightCounter.allReset(); // сбрасываю data
  leftCounter.resetViewCount(countButtonOne, scoreOne);// сбрасываю view
  rightCounter.resetViewCount(countButtonTwo, scoreTwo);
})

const makeHandler = (newMakeCounter, button, scoreField) => {
  let counter = 0;

  const handleCounter = newMakeCounter.debounce(() => {
    if ((counter % 2) === 1) {
      newMakeCounter.setCount() // прибавляем счет
      newMakeCounter.commonScore(leftCounter, rightCounter, circleOne, circleTwo); // вызываем функцию отображения подачи
      newMakeCounter.addScore(leftCounter, rightCounter) //прибавляем счет в партии
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
