var link = document.querySelector ('.feedback-btn');
var popup = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.modal-overlay');
var close = popup.querySelector('.modal-close');
var yoname = popup.querySelector('[name=your-name]');
var email = popup.querySelector('[name=email]');
var mapInd = document.querySelector('.map-img')
var popupMap = document.querySelector('.modal-map');
var mapClose = popupMap.querySelector('.modal-map-close')

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
});

overlay.addEventListener('click', function(event){
  event.preventDefault();
  popup.classList.remove('modal-feedback-show');
  popupMap.classList.remove('modal-map-show');
  overlay.classList.remove('modal-overlay-show');
});


window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-feedback-show')) {
      popup.classList.remove('modal-feedback-show');
    }
    if(overlay.classList.contains('modal-overlay-show')) {
      overlay.classList.remove('modal-overlay-show');
    }
    if (popupMap.classList.contains('modal-map-show')) {
      popupMap.classList.remove('modal-map-show');
    }
  }

});

mapInd.addEventListener('click', function(event){
  event.preventDefault();
  popupMap.classList.add('modal-map-show');
  overlay.classList.add('modal-overlay-show');
  popup.scrollIntoView(top);
})

mapClose.addEventListener('click', function(event) {
  event.preventDefault();
  popupMap.classList.remove('modal-map-show');
  overlay.classList.remove('modal-overlay-show');
})


