const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')

const makeCounter = () => {
  let data = 0;

  return {
    getCount: () => data++,
    reset: () => data = 0,
    sub: () => data--,
    data: () => data,
    throttle: (button, newCounter) => {
      let prevent = false;
      let timer = 0;

      button.addEventListener('click', () => {

        timer = setTimeout(() => {
          if(!prevent) {
            newCounter.getCount()
            button.innerHTML = newCounter.data()
          }
          prevent = false;
        }, 300);
      })

      button.addEventListener('dblclick', (e) => {
        e.preventDefault();
        prevent = true;
        clearTimeout(timer);
        newCounter.sub()
        button.innerHTML = newCounter.data()
      })
    }
  }
  return data;
}

let counterOne = makeCounter();
let counterTwo = makeCounter();

resetButton.addEventListener('click', () => {
  counterOne.reset() & counterTwo.reset();
  countButtonOne.innerHTML = 0;
  countButtonTwo.innerHTML = 0;
})

counterOne.throttle(countButtonOne, counterOne);
counterTwo.throttle(countButtonTwo, counterTwo);
