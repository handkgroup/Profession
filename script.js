"use strict"
const burger = document.querySelector(".burger");
const offScreenMenu = document.querySelector(".off_screen__menu");

burger.addEventListener("click", ()=>{
    console.log("clicked");
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active")
})