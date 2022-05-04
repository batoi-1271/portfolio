// ============= toggler style switcher ===================
const styeSwitcherToggle = document.querySelector(".style-switcher-toggler");
styeSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})

// ============= toggler style switcher ===================

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ============= theme colors ===================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
            
        }
    })
}

// ============= theme light and dark mode ===================
const dayNight = document.querySelector(".day-night");
const Image_Id = document.getElementById('logo');

dayNight.addEventListener("click", ()=> {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    if (Image_Id.src.match("logo1.png")) {
        Image_Id.src = "./images/logo2.png";
    }
    else {
        Image_Id.src = "./images/logo1.png";
    }

})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");

    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

//SONG
const mySong = document.getElementById("mysong");
const play = document.getElementById("play");

play.onclick = function() {
    if (mySong.paused) {
        mySong.play()
        play.src ="./images/pasue2.png";
        play.classList.add("spin");
    } else {
        mySong.pause();
        play.src ="./images/play1.png";
        play.classList.remove("spin");
    }
}