let imgs = [
	"styles_kp/css/img1.jpg",
	"styles_kp/css/img2.jpg",
	"styles_kp/css/img3.jpg",
	"styles_kp/css/img4.jpg",
	"styles_kp/css/img5.jpg",
	"styles_kp/css/img6.jpg",
	"styles_kp/css/img7.jpg",
	"styles_kp/css/img8.jpg",
	"styles_kp/css/img9.jpg",
	"styles_kp/css/img10.jpg",
	"styles_kp/css/img11.jpg",
	"styles_kp/css/img12.jpg",
	"styles_kp/css/img13.jpg",
	"styles_kp/css/img14.jpg",
	"styles_kp/css/img15.jpg",
	"styles_kp/css/img16.jpg"
	],

	image = document.getElementById('image'),
	buttonSpin = document.getElementById('btnSpin');
		
	buttonSpin.onclick = function(){
		image.src = imgs[Math.floor(Math.random()*imgs.length)];
	}

