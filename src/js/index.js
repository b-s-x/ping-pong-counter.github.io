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

resetButton.addEventListener('click', () => {
  leftCounter.allReset() & rightCounter.allReset(); // сбрасываю data
  view.resetViewCount(countButtonOne, scoreOne);// сбрасываю view
  view.resetViewCount(countButtonTwo, scoreTwo);
})

const run = () => {
  const leftCounter = new Counter();
  const rightCounter = new Counter();

  const game = new PingPong();
  const view = new View();

countButtonOne.addEventListener('click', () => {
  game.incrementLeft(leftCounter, rightCounter, game)
  view.refresh(leftCounter, countButtonOne, scoreOne) // обновляем view
});

// countButtonTwo.addEventListener('click', () => {
//   game.incrementRight(rightCounter, game)
//   game.addScore(leftCounter, rightCounter) //прибавляем счет в партии
//   view.refresh(rightCounter, countButtonTwo, scoreTwo) // обновляем view
// });
// game.commonScore(leftCounter, rightCounter, circleOne, circleTwo);


}



























///
