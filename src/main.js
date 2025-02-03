document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu-overlay');
    const closeMenuButton = document.querySelector('.close-menu');
  
    if (!hamburger || !mobileMenu || !closeMenuButton) {
      console.error("One or more required elements not found in the DOM.");
      return;
    }
  
    // Open the mobile menu and disable vertical scrolling
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.add('open');
      document.body.classList.add('menu-open');
    });
  
    // Close the mobile menu and re-enable vertical scrolling
    closeMenuButton.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
  