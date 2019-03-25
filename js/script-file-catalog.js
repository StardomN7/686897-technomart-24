var confirm = document.querySelector(".add-to-cart");
var popup_confirm = document.querySelector(".popup-item-added");
var close = popup_confirm.querySelector(".close-window");

confirm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_confirm.classList.add("popup-item-added-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_confirm.classList.remove("popup-item-added-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_confirm.classList.contains("popup-item-added-show")) {
      popup_confirm.classList.remove("popup-item-added-show");
    }
  }
});
