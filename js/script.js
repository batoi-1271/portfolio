// ================== TYPING animation =======================

var typed = new Typed(".typing", {
    strings: ["", "Web design", "Web Developer", "Graphic Designer"],
    typeSpeed: 200,
    BackSpeed: 60,
    loop: true
})

// =============== ASIDE =================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

        removerBackSection();

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {

                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglebtn();
        }
    })
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function removerBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removerBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglebtn();
})

function asideSectionTogglebtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

function sendMail() {
    Email.send({
        SecureToken: "cc07a28e-bb7b-4af4-80f2-dfa1132ac143",
        Host: "smtp.elasticemail.com",
        Username: "batoi1271.doe@gmail.com",
        Password: "3838564F36BEE3519348AE0AB5D317DAB54A",
        To: 'batoi1271.doe@gmail.com',
        From: "batoi1271.doe@gmail.com",
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value +
            "<br/> Email: " + document.getElementById("email").value +
            "<br/> Message: " + document.getElementById("message").value

    }).then(
        message => alert("Message send succesfully")
    );
}

function requestMail() {
    Email.send({
        SecureToken: "cc07a28e-bb7b-4af4-80f2-dfa1132ac143",
        Host: "smtp.elasticemail.com",
        Username: "batoi1271.doe@gmail.com",
        Password: "3838564F36BEE3519348AE0AB5D317DAB54A",
        To: document.getElementById("email").value,
        From: "batoi1271.doe@gmail.com",
        Subject: "Thanks you for your email",
        Body : " Hi " + document.getElementById("name").value +
            "<br/> <br/> How are things ? Thank you for your email." +
            "<br/> <br/> Your message is important to me and I will respond as soon as possible." +
            "<br/> <br/> If you would like any further information, please don’ t hesitate to contact me." +
            "<br/> Thank You!" +
            "<br/> Best wishes " +
            "<br/> <i>Ba Toi Nguyen</i> " 
    })
}