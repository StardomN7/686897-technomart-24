var message = document.querySelector(".contact-us");
var popup_message = document.querySelector(".popup-client-message");
var close = popup_message.querySelector(".close-window");
var map = document.querySelector(".show-map");
var map_full = document.querySelector(".full-map");
var map_close = map_full.querySelector(".close-window");


message.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_message.classList.add("popup-client-message-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_message.classList.remove("popup-client-message-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_message.classList.contains("popup-client-message-show")) {
      popup_message.classList.remove("popup-client-message-show");
    }
  }
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_full.classList.add("popup-client-message-show");
});

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_full.classList.remove("popup-client-message-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map_full.classList.contains("popup-client-message-show")) {
      map_full.classList.remove("popup-client-message-show");
    }
  }
});
