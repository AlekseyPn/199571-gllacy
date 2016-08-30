var link = document.querySelector ('.feedback-btn');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.modal-overlay');
var close = popup.querySelector('.modal-feedback-close');

var form = popup.querySelector('form');
var yoname = popup.querySelector('[name=your-name]');
var email = popup.querySelector('[name=email]');
var text = popup.querySelector('[name=text]');

var storage = localStorage.getItem('yourName');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('modal-feedback-show');
  overlay.classList.add('modal-overlay-show');
  popup.scrollIntoView(top);
  if (storage) {
    yoname.value = storage;
    email.focus();
  } else {
    yoname.focus;
  }
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-feedback-show');
  overlay.classList.remove('modal-overlay-show');
})

overlay.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.remove('modal-feedback-show');
  overlay.classList.remove('modal-overlay-show');
})
/*Валидация отправки формы*/

form.addEventListener('submit', function(event){
  if (!yoname.value || !email.value || !text.value) {
   event.preventDefault();
   console.log('Заполните поле обратной связи');
  }
  else {
    localStorage.setItem('yourName', yoname.value);
  }

})
