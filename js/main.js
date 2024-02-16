const menuItems = document.querySelectorAll('.menu__item');
const hamburger = document.querySelector('.menu__burger');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    document.getElementById("menu__toggle").checked = false; 
  });
});
