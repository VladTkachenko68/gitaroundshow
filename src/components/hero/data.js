import AOS from 'aos'
import 'aos/dist/aos.css'

// https://www.npmjs.com/package/aos
// https://michalsnik.github.io/aos/

const scrollCounter = document.querySelector('.js-scroll-counter');

window.addEventListener('scroll', function() {
  scrollCounter.innerHTML = window.pageYOffset;
});

// AOS.init()

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-out-sine',
  delay: 200,
  mirror: true
});