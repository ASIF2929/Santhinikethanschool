
  const images = document.querySelectorAll('.gallery img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const closeBtn = document.getElementById('close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      popup.classList.add('show');
      popupImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
  }


