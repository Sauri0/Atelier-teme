/* 
  Atelier Global Theme JS
*/

document.addEventListener('DOMContentLoaded', () => {
  // Cart Drawer Logic
  const cartDrawer = document.getElementById('CartDrawer');
  const cartOverlay = document.getElementById('CartOverlay');
  const cartTriggers = document.querySelectorAll('.js-cart-trigger');
  
  const openCart = (e) => {
    if(e) e.preventDefault();
    if(cartDrawer) {
      cartDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeCart = () => {
    if(cartDrawer) {
      cartDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  // Bind Open Buttons
  cartTriggers.forEach(trigger => {
    trigger.addEventListener('click', openCart);
  });

  // Bind Close Buttons
  if(cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }
  const closeBtn = document.getElementById('CloseCartBtn');
  if(closeBtn) {
    closeBtn.addEventListener('click', closeCart);
  }
});
