const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const cancelButton = document.querySelector("#cancel-button");

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cancelButton.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle("modal-active");
}

wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,      // not default
                      live:         true        // default
                    }
                    )
                    wow.init();

const modalDialog = document.querySelector("#modal-dialog")
let class1 = 'wow animate__animated';
let class2 = 'animate__fadeInUp';
let class3 = 'animate__fadeOutDown';
const classesAppear = class1.split(' ').concat(class2);
/* const classesDisAppear = class1.split(' ').concat(class3); */

modalDialog.addEventListener('click', function (event) {
modalDialog.classList.remove(...classesAppear);
modalDialog.classList.add(...classesAppear);
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