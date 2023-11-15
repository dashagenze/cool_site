function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let testArray = ['forty', 'cups', 'of', 'coffee'];

// function TestRange (array) {
// 	for item in testArray {
// 		alert(array[index]);
// 	}	
// }


const buttonSpin = document.getElementById('btnSpin');

buttonSpin.onclick = alert(getRandomInt(1,5));