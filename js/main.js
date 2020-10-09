const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle("modal-active");
}

new WOW().init();

const modalDialog = document.querySelector("#modal-dialog")
let class1 = 'wow animate__animated';
let class2 = 'animate__fadeInUp';
const classes = class1.split(' ').concat(class2);

modalDialog.addEventListener('click', function (event) {
modalDialog.classList.remove(...classes);
modalDialog.classList.add(...classes);
});


/* element.classList.add(...classes);

cartButton.addEventListener('click', function (event) {
modal.classList.add("modal-active");
});

close.addEventListener('click', function (event) {
modal.classList.remove("modal-active");
});

function toggleModal() {
  modal.classList.toggle("modal-active");
} */