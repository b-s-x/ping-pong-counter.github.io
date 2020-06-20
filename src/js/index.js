import '../styles/index.css';
import Counter from './counter'
import PingPong from './pingpong';
import View from './view';

const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')
const scoreOne = document.querySelector('#part-score-one')
const scoreTwo = document.querySelector('#part-score-two')
const circleOne = document.querySelector('#circle-one')
const circleTwo = document.querySelector('#circle-two')

const leftCounter = new Counter();
const rightCounter = new Counter();
const leftPingPong = new PingPong();
const rightPingPong = new PingPong();
const view = new View()

resetButton.addEventListener('click', () => {
  leftCounter.allReset() & rightCounter.allReset(); // сбрасываю data
  view.resetViewCount(countButtonOne, scoreOne);// сбрасываю view
  view.resetViewCount(countButtonTwo, scoreTwo);
})

const makeHandler = (newMakeCounter, button, scoreField, pong) => {
  let counter = 0;

  const handleCounter = pong.debounce(() => {
    if ((counter % 2) === 1) {
      newMakeCounter.setCount() // прибавляем счет
      pong.commonScore(leftCounter, rightCounter, circleOne, circleTwo); // вызываем функцию отображения подачи
      pong.addScore(leftCounter, rightCounter) //прибавляем счет в партии
    } else {
      newMakeCounter.sub()
    }
    view.refresh(newMakeCounter, button, scoreField) // обновляем view

    counter = 0;
  }, 250);

  return () => {
    counter += 1;
    handleCounter();
  };
};

countButtonOne.addEventListener('click', makeHandler(leftCounter, countButtonOne, scoreOne, leftPingPong));
countButtonTwo.addEventListener('click', makeHandler(rightCounter, countButtonTwo, scoreTwo, rightPingPong));


























///
