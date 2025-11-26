// Back to Top Button functionality
let backToTopButton;
let scrollEventHandler;

function handleScroll() {
  if (backToTopButton) {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'pointer-events-none');
      backToTopButton.classList.add('opacity-100');
    } else {
      backToTopButton.classList.add('opacity-0', 'pointer-events-none');
      backToTopButton.classList.remove('opacity-100');
    }
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Create Back to Top button
  backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  backToTopButton.className = 'fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] text-[var(--light-text-color)] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center opacity-0 pointer-events-none';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  backToTopButton.addEventListener('click', scrollToTop);
  document.body.appendChild(backToTopButton);

  // Scroll event listener
  scrollEventHandler = handleScroll;
  window.addEventListener('scroll', scrollEventHandler);

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
