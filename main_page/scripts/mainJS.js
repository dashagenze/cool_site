const buttonImgPage = document.getElementById('imgPage');

buttonImgPage.onclick =  
function OpenImgPage(){
  window.location.href="kind_pics/index_kp.html";
}


const buttonPinterest = document.getElementById('pinterestLink');

buttonPinterest.onclick =  
function OpenPinterestPage(){
  window.location.href="https://ru.pinterest.com/";
}


const buttonDiary = document.getElementById('diaryPage');

buttonDiary.onclick =  
function OpenImgPage(){
  window.location.href="diary/index_d.html";
}

//hover-unhover animation 1
let catHover1 = document.getElementById('cat1'),
    cat1src = 'styles/images/cat1hover.svg',
    cat1unhover = 'styles/images/cat1.svg';

buttonImgPage.onmouseover = function(){
  catHover1.src = cat1src;
}
buttonImgPage.onmouseout = function (){
  catHover1.src = cat1unhover;
}


//hover-unhover animation 2
let catHover2 = document.getElementById('cat2'),
    cat2src = 'styles/images/cat2hover.svg',
    cat2unhover = 'styles/images/cat2.svg';

buttonDiary.onmouseover = function(){
  catHover2.src = cat2src;
}
buttonDiary.onmouseout = function (){
  catHover2.src = cat2unhover;
}


//hover-unhover animation 3
let catHover3 = document.getElementById('cat3'),
    cat3src = 'styles/images/cat3hover.svg',
    cat3unhover = 'styles/images/cat3.svg';

buttonPinterest.onmouseover = function(){
  catHover3.src = cat3src;
}
buttonPinterest.onmouseout = function (){
  catHover3.src = cat3unhover;
}



