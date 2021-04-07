/* CALL THIS FUNCTION FROM OTHER FILES LIKE */

/****** DO NOT TOUCH vvv *****/

function addFood(step, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector(id).innerHTML += `<li>${step}</li`;
      resolve(step);
      callback ? callback() : ''; // For iteration one
    }, Math.floor(Math.random() * 1000));
  });
}
/***** ^^^ DO NOT TOUCH *****/

function addMashPotatoesImg() {
  return new Promise((resolve, reject) => {
    document.querySelector('#table').innerHTML = `<img src="public/images/mashPotatoes.jpg" />`;
    resolve();
    });
}

function addSteakImg() {
  return new Promise((resolve, reject) => {
    document.querySelector('#table2').innerHTML = `<img src="public/images/steak.jpg" />`;
    resolve();
    });
}

