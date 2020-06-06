const countButtonOne = document.querySelector('#countOne')
const countButtonTwo = document.querySelector('#countTwo')
const resetButton = document.querySelector('.reset-btn')

const makeCounter = () => {
  let data = 1;

  return {
    getCount: function() {
    return data++;
    },
    reset: function() {
      data = 1;
    },
    sub: function() {
      return data--
    }
  }
}

let counterOne = makeCounter();
let counterTwo = makeCounter();

countButtonOne.addEventListener('click', () => {
  countButtonOne.innerHTML = counterOne.getCount()
});

countButtonTwo.addEventListener('click', () => {
  countButtonTwo.innerHTML = counterTwo.getCount();
});

resetButton.addEventListener('click', () => {
  counterOne.reset();
  counterTwo.reset();
  countButtonOne.innerHTML = 0;
  countButtonTwo.innerHTML = 0;
})


// countButtonTwo.addEventListener('dblclick', () => {
//   countButtonTwo.innerHTML = counterTwo.sub();
// });
