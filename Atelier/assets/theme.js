/* Atelier Global Store - Core JS */

document.addEventListener('DOMContentLoaded', () => {
  // Global helpers can go here. 
  // Cart drawer explicitly listens to specific triggers
  const cartTriggers = document.querySelectorAll('.js-cart-trigger');
  
  cartTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if(window.themeCart) {
        window.themeCart.open();
      }
    });
  });

  console.log("Atelier Core Interface Loaded.");
});
