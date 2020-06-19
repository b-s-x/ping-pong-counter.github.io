

export default class Counter  {
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

}
