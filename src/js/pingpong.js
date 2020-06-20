export default class PingPong {

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
    let x = Math.floor(comScore / 2) % 2;

    circleTwo.style.opacity = x;
    circleOne.style.opacity = 1 - x;
  }

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
  }

  makeHandler(newMakeCounter, game) {
    let counter = 0;
    const handleCounter = game.debounce(() => {
      if ((counter % 2) === 1) {
        newMakeCounter.setCount() // прибавляем счет
      } else {
        newMakeCounter.sub()
      }
      counter = 0;
    }, 250);
    return () => {
      counter += 1;
      handleCounter();
    };
  };


  incrementLeft(leftCounter, rightCounter, game) {
    this.makeHandler(leftCounter, game)
    // this.addScore(leftCounter, rightCounter)
  }

  // incrementRight(rightCounter, game) {
  //   this.makeHandler(rightCounter, game)
  // }
};
