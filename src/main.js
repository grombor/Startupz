'use strict';

const hamburgerMenu = document.getElementById('nav-menu-toggle');
const links = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
  links.classList.toggle('active');
  console.log(links)
});


