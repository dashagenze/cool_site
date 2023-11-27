let imgs = [
	"styles_kp/css/img1.png",
	"styles_kp/css/img2.png",
	"styles_kp/css/img3.png",
	"styles_kp/css/img4.png",
	"styles_kp/css/img5.png",
	"styles_kp/css/img6.png",
	"styles_kp/css/img7.png",
	"styles_kp/css/img8.png",
	"styles_kp/css/img9.png",
	"styles_kp/css/img10.png",
	"styles_kp/css/img11.png",
	"styles_kp/css/img12.png",
	"styles_kp/css/img13.png",
	"styles_kp/css/img14.png",
	"styles_kp/css/img15.png",
	"styles_kp/css/img16.png"
	],

	image = document.getElementById('image'),
	buttonSpin = document.getElementById('btnSpin');
		
	buttonSpin.onclick = function(){
		image.src = imgs[Math.floor(Math.random()*imgs.length)];
	}

