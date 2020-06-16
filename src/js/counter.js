export class Counter {
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
