let button = document.getElementById('menu_button');
button.onclick = function() {
  sayThanks(); // содержимое атрибута
};

button.addEventListener(click,() => alert('Спасибо!'), [options]);
