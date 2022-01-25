"use strict";

let isNavOpen = false; 

docSlider.init({
    speed : 500,
    easing : 'ease-in-out',
    docSlider: true,
    pageChangeReset: true
});

function navigateToSlide(element) {
    let slide = element.currentTarget.hash;
    docSlider.jumpPage(slide);
    navClose();
    element.preventDefault();
}

function navOpen() {
    if(isNavOpen) {
        navClose();
    } else{
        document.querySelector(".menu").style.width = "15em";       
        //document.querySelector(".menu").style.display = "inherit";       
        document.querySelector("#overlay").style.display = "inherit";
        isNavOpen = true;
    }
}

function navClose() {
    document.querySelector(".menu").style.width = "0";
    //document.querySelector(".menu").style.display = "none";  
    document.querySelector("#overlay").style.display = "none";
    isNavOpen = false;
}

function setPageTheme(theme) {
    document.querySelector("html").setAttribute("data-theme", theme);
    
    document.querySelector('a#themeSwitcher > i')
        .setAttribute("class", theme === "dark" ? "fas fa-lightbulb" : "fas fa-moon");

    localStorage["theme"] = theme;
    theme = theme === "dark" ? "light" : "dark"
    document.querySelector('a#themeSwitcher > span').textContent = theme[0].toUpperCase() + theme.substring(1);
}

function togglePageTheme() {
    setPageTheme(getNextThemeToggle());
}

function getNextThemeToggle() {
    return getCurrentTheme().match("dark") ? "light" : "dark";
}

function getCurrentTheme() {
    return document.querySelector("html").getAttribute("data-theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[rel="noopen"]')
        .forEach(element => element.onclick = navigateToSlide);

    document.querySelector('#menuLink').onclick = navOpen;
    document.querySelector('#menuClose').onclick = navClose;
    document.querySelector('#overlay').onclick = navClose;
    document.querySelector('#themeSwitcher').onclick = togglePageTheme;

    if(!localStorage["theme"]) {
        let defTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        setPageTheme(defTheme);
    } else {
        setPageTheme(localStorage["theme"]);
    }
});