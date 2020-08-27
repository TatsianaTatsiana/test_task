/* menu nav toggle */
let navToggle = document.getElementById('nav_toggle');
navToggle.addEventListener('click', function (event) {
  event.preventDefault();
  this.classList.toggle('active');
  document.getElementById('nav').classList.toggle('active');
});

// Block 1 carousel
const btn_prev = document.querySelector('.prev');
const btn_next = document.querySelector('.next');
const images = document.querySelectorAll('.carousel-item');

let i = 0;

btn_next.onclick = function () {
  images[i].style.display = 'none';
  i++;
  if (i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
};

btn_prev.onclick = function () {
  images[i].style.display = 'none';
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = 'block';
};

/* Smooth scroll */
let linkElements = document.querySelectorAll('.nav__link[data-scroll]');

for (link of linkElements) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    let blockId = this.getAttribute('data-scroll');
    let searchedBlock = document.querySelector(blockId);

    let blockOffset = searchedBlock.getBoundingClientRect().top;

    let nav = document.getElementById('nav');
    let navLinks = nav.querySelectorAll('.nav__link');
    navLinks.forEach((element) => {
      element.classList.remove('active');
    });
    this.classList.add('active');

    window.scrollTo({
      top: blockOffset,
      behavior: 'smooth',
    });
  });
}
