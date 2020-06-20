export default class View {

  refresh(newCounter, buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = newCounter.getData()
    scoreCounter.innerHTML = newCounter.getScore()
  }

  resetViewCount(buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = 0;
    scoreCounter.innerHTML = 0;
  }
}
