/* 
  Atelier Global Theme JS - Core Interactivity
*/

document.addEventListener('DOMContentLoaded', () => {
  // Navigation & Scroll Effects
  const header = document.querySelector('.header-wrapper');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.padding = '8px 0';
        header.style.background = 'rgba(255, 255, 255, 0.9)';
      } else {
        header.style.padding = '';
        header.style.background = '';
      }
    });
  }

  // Global Cart Toggle Listeners
  // (Note: Specific drawer logic is handled in cart-drawer.liquid Class)
  const cartTriggers = document.querySelectorAll('.js-cart-trigger');
  cartTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.themeCart) window.themeCart.open();
    });
  });

  // Mobile Menu (Placeholder for refinement)
  const hamburger = document.querySelector('.hamburger-trigger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      console.log('Mobile menu triggered');
    });
  }
});
