import Counter from './counter';

export default class PingPong extends Counter {

  refresh(newCounter, buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = newCounter.getData()
    scoreCounter.innerHTML = newCounter.getScore()
  }

  resetViewCount(buttonCounter, scoreCounter) {
    buttonCounter.innerHTML = 0;
    scoreCounter.innerHTML = 0;
  }

  debounce(func, wait) {
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
}
