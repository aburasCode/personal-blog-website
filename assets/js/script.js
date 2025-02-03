'use strict';

// Navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = function () { 
    nav.classList.toggle('active'); 
}

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// Theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let i = 0; i < themeBtn.length; i++) {
    themeBtn[i].addEventListener('click', function () {
        // Toggle `light-theme` & `dark-theme` class from `body` when clicked `theme-btn`
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        // Toggle theme for all `theme-btn`
        for (let i = 0; i < themeBtn.length; i++) {
            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');
        }
    });
}
