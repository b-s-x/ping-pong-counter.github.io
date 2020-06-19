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

  commonScore (counterOne, counterTwo, circleOne, circleTwo) {
      let comScore = counterOne.getData() + counterTwo.getData()
        let x = Math.floor(comScore / 2) % 2

        circleTwo.style.opacity = x;
        circleOne.style.opacity = 1 - x;
    };

  addScore(counterOne, counterTwo) {
    let one = counterOne.getData(); //получаем счет каждого каунтера
    let two = counterTwo.getData();

    if(one >=10) {
      counterOne.setScore();// прибавляем счет в партии score
      counterOne.locReset(); // обнуляем data для каунтера
      counterTwo.locReset();
    } else if (two >=10) {
      counterTwo.setScore();
      counterOne.locReset();
      counterTwo.locReset();
    }
  };
};
