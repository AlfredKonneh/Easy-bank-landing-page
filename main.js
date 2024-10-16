const navList = document.getElementById('nav__list');
const navOpenMenu = document.getElementById('nav__open-icon');
const navCloseMenu = document.getElementById('nav__close-icon');
const overlay = document.getElementById('overlay');

navOpenMenu.addEventListener('click', function () {
  overlay.classList.add('is-visible');
  navList.classList.add('nav__list-visible');
  navOpenMenu.classList.remove('visible');
  navOpenMenu.classList.add('hidden');
  navCloseMenu.classList.remove('hidden');
  navCloseMenu.classList.add('visible');
});

navCloseMenu.addEventListener('click', function () {
  overlay.classList.remove('is-visible');
  navList.classList.remove('nav__list-visible');
  navOpenMenu.classList.remove('hidden');
  navOpenMenu.classList.add('visible');
  navCloseMenu.classList.remove('visible');
  navCloseMenu.classList.add('hidden');
});

// // chat gbt
// const links = document.querySelectorAll('.nav__link');
// const underline = document.getElementById('underline');

// links.forEach((link) => {
//   link.addEventListener('mouseover', function () {
//     // Get the position and width of the hovered link
//     const linkRect = link.getBoundingClientRect();

//     // Set the underline width and position it under the hovered link
//     underline.style.width = `${linkRect.width}px`;
//     underline.style.left = `${linkRect.left}px`;
//     underline.style.top = `${linkRect.bottom}px`;
//   });

//   link.addEventListener('mouseout', function () {
//     // Hide the underline when not hovering
//     underline.style.width = '0';
//   });
// });
