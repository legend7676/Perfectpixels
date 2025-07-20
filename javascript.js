// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

// Contact form submission (can be extended to actual backend)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you shortly.');
  this.reset();
});
