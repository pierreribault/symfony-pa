/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/admin/admin.scss';

import 'jquery'
import 'select2/dist/js/select2.full.min'
import 'select2/dist/css/select2.min.css'

import './js/map.js'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all"

const selects = document.getElementsByTagName("select")

selects.forEach(select => $(select).select2())

const buttonsDropdown = document.querySelectorAll(".dropdown-section button")

buttonsDropdown.forEach(button => {
    button.addEventListener("click", function (e){
        console.log(e)
        const menu = button.parentNode.parentNode.querySelector(".dropdown-menu");
        menu.classList.toggle("hidden")
    })
})

