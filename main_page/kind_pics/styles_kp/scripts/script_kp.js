let min = 0;
let max = 15;
let index = Math.random() * (max - min) + min;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");
let img8 = document.getElementById("img8");
let img9 = document.getElementById("img9");
let img10 = document.getElementById("img10");
let img11 = document.getElementById("img11");
let img12 = document.getElementById("img12");
let img13 = document.getElementById("img13");
let img14 = document.getElementById("img14");
let img15 = document.getElementById("img15");
let img16 = document.getElementById("img16");


let imgArray = [img1, img2, img3, img4, img5, img6, img8, img9, img10, img11, img12, img13, img14, img15, img16]

const buttonSpin = document.getElementById('btnSpin');


buttonSpin.onclick = RandomPic(imgArray);


function RandomPic(array) {
	let item = array[index];
	for item in array:
		alert(item);
	return item
}







// let slider = document.createElement("div");
// slider.className = "slider";
// document.body.appendChild(slider);

// for (i = 0; i < files.length; i++) {
//     let file = files[i];



