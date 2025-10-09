function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}
var typed = new Typed('.typing-text', {
  strings: [
    'Information Technology students',
    'Fullstack Enthusiast',
    'Cybersecurity Enthusiast',
  ],
  typeSpeed: 100,
  backSpeed: 100,
  looped: true,
  loop: true, // ini yang benar
  // smartBackspace: true,
});
