document.addEventListener('DOMContentLoaded', function() {
  
  // Gallery popup functionality (only if gallery elements exist)
  const images = document.querySelectorAll('.gallery img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.getElementById('close');

  // Only add event listeners if elements exist
  if (images.length > 0 && popup && popupImg && closeBtn) {
    images.forEach(img => {
      img.addEventListener('click', () => {
        popup.classList.add('show');
        popupImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('show');
    });
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      mobileNav.classList.toggle('show');
    }
  }
});

