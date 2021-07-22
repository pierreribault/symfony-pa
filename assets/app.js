/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import '../assets/js/map.js'

import '@fortawesome/fontawesome-free/js/all.min'


const dropdown = document.getElementById("account-dropdown")
console.log(dropdown)
dropdown.addEventListener("click", () => {
    const menu = document.getElementById("account-menu")
    menu.classList.toggle("hidden")
})
