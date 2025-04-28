function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.style.left === '0px') {
      menu.style.left = '-220px';
    } else {
      menu.style.left = '0px';
    }
  }
  function toggleMenu(event) {
    event.stopPropagation(); // Prevent the event from bubbling to document
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
  
    if (menu.style.left === '0px') {
      closeMenu();
    } else {
      menu.style.left = '0px';
      overlay.style.display = 'block';
    }
  }
  
  function closeMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
  
    menu.style.left = '-220px';
    overlay.style.display = 'none';
  }
  