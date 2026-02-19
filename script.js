// primary button alert
const learnBtn = document.getElementById('learn-more');
if (learnBtn) {
  learnBtn.addEventListener('click', () => {
    alert('Thanks for your interest! More content coming soon.');
  });
}

// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle && navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// observe sections and cards
Array.from(document.querySelectorAll('.section, .card')).forEach(el => {
  observer.observe(el);
});
