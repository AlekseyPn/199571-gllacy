var link = document.querySelector ('.feedback-btn');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.modal-overlay');
var close = popup.querySelector('.modal-feedback-close');
var yoname = popup.querySelector('[name=your-name]');

link.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.add('modal-feedback-show');
  overlay.classList.add('modal-overlay-show');
  popup.scrollIntoView(top);
  yoname.focus();
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
