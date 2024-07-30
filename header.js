// const nav_menu = document.querySelector('.material-symbols-outlined');
// const ham_menu = document.querySelector('.hamburger-menu');

// nav_menu.addEventListener('click', () => {
//     nav_menu.classList.toggle('active');
//     ham_menu.classList.toggle('active');
// });

// function openNav() {
//     document.getElementById("hamburger-menu").style.width = "100%";
// }
  
// function closeNav() {
//     document.getElementById("hamburger-menu").style.width = "0%";
// }
/* Set the width of the sidebar to 250px (show it) */
// function openNav() {
//     document.getElementById("hamburger-menu").style.width = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 (hide it) */
//   function closeNav() {
//     document.getElementById("hamburger-menu").style.width = "0";
//   }
// function toggleMobileMenu(menu){
//     menu.classList.toggle('open');
// }

//
//
// function toggleMobileMenu() {
//     var menu = document.querySelector('.mobile-menu');
//     if (menu.style.display === 'block') {
//         menu.style.display = 'none';
//     } else {
//         menu.style.display = 'block';
//     }
// }

function toggleMobileMenu() {
    var icon = document.getElementById('hamburger-icon');
    var menu = document.querySelector('.mobile-menu');
    icon.classList.toggle('open');
    menu.classList.toggle('open');
}
