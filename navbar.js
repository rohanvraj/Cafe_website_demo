document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Add translucent, blurred, and fading effect to the navbar
  navbar.classList.add('bg-transparent', 'backdrop-blur', 'transition-all', 'duration-300');
});
});