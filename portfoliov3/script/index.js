// Menu open close
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

//Smooth Scroll
$(document).ready(function() {
    $("header a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
    $(".app__navigation a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});

// Cursor animation
var cursor1 = document.querySelector(".cursor1-2");
var cursor2 = document.querySelector(".cursor2-2");
document.addEventListener("mousemove", function(e) {
    cursor1.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//Navbar links animation
var ulDiv = document.getElementById("navLinks");
var aTags = Array.from(ulDiv.getElementsByClassName("link"))
var dots = document.querySelectorAll('.navigation-dot');

aTags.forEach((link, index1) => {
    link.addEventListener('click', () => {
        if (link.classList.contains("active")) {
            return
        } else {
            aTags.forEach((link1, index) => {
                if (link1.classList.contains('active')) {
                    link1.classList.remove('active')
                    dots[index].classList.remove('activeDot')
                }
                link.classList.add('active')
                dots[index1].classList.add('activeDot')
            })
        }
    })
});

dots.forEach((link, index1) => {
    link.addEventListener('click', () => {
        if (link.classList.contains("activeDot")) {
            return
        } else {
            dots.forEach((link1, index) => {
                if (link1.classList.contains('activeDot')) {
                    link1.classList.remove('activeDot')
                    aTags[index].classList.remove('active')
                }
                link.classList.add('activeDot')
                aTags[index1].classList.add('active')
            })
        }
    })
});



// Changing active button classes on work section

let webdevDiv = document.getElementById("webdev")
let webdevBtn = document.querySelector(".webdevBtn")

let brandDiv = document.getElementById("brand")
let brandBtn = document.querySelector(".brandBtn")

let graphicDiv = document.getElementById("graphic")
let graphicBtn = document.querySelector(".graphicBtn")

let marketDiv = document.getElementById("market")
let marketBtn = document.querySelector(".marketBtn")

brandBtn.addEventListener('click', (e) => {
    brandBtn.classList.add('activeBtn')
    webdevBtn.classList.remove('activeBtn')
    graphicBtn.classList.remove('activeBtn')
    marketBtn.classList.remove('activeBtn')

    brandDiv.parentElement.classList.remove("displayNone")
    brandDiv.parentElement.classList.add("displayBlock")

    Array.from(brandDiv.parentElement.parentElement.children).forEach((element) => {
        if (element.classList.contains("displayBlock") && element.children[0].id != brandDiv.id) {
            element.classList.remove("displayBlock")
            element.classList.add("displayNone")
        }
    })

    e.preventDefault()
})

webdevBtn.addEventListener('click', (e) => {
    brandBtn.classList.remove('activeBtn')
    webdevBtn.classList.add('activeBtn')
    graphicBtn.classList.remove('activeBtn')
    marketBtn.classList.remove('activeBtn')

    webdevDiv.parentElement.classList.remove("displayNone")
    webdevDiv.parentElement.classList.add("displayBlock")

    Array.from(webdevDiv.parentElement.parentElement.children).forEach((element) => {
        if (element.classList.contains("displayBlock") && element.children[0].id != webdevDiv.id) {
            element.classList.remove("displayBlock")
            element.classList.add("displayNone")
        }
    })
    e.preventDefault()
})

graphicBtn.addEventListener('click', (e) => {
    brandBtn.classList.remove('activeBtn')
    webdevBtn.classList.remove('activeBtn')
    graphicBtn.classList.add('activeBtn')
    marketBtn.classList.remove('activeBtn')

    graphicDiv.parentElement.classList.remove("displayNone")
    graphicDiv.parentElement.classList.add("displayBlock")

    Array.from(graphicDiv.parentElement.parentElement.children).forEach((element) => {
        if (element.classList.contains("displayBlock") && element.children[0].id != graphicDiv.id) {
            element.classList.remove("displayBlock")
            element.classList.add("displayNone")
        }
    })
    e.preventDefault()
})

marketBtn.addEventListener('click', (e) => {
    brandBtn.classList.remove('activeBtn')
    webdevBtn.classList.remove('activeBtn')
    graphicBtn.classList.remove('activeBtn')
    marketBtn.classList.add('activeBtn')

    marketDiv.parentElement.classList.remove("displayNone")
    marketDiv.parentElement.classList.add("displayBlock")

    Array.from(marketDiv.parentElement.parentElement.children).forEach((element) => {
        if (element.classList.contains("displayBlock") && element.children[0].id != marketDiv.id) {
            element.classList.remove("displayBlock")
            element.classList.add("displayNone")
        }
    })
    e.preventDefault()
})


// --------------------- Anime js ---------------------------------
// Hero-tagline
anime({
    targets: "#demo-svg path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 5000,
    delay: anime.stagger(2000),
    direction: 'alternate',
    loop: true
});

//nav dots
anime({
    targets: '.app__navigation .navigation-dot',
    translateY: 120,
    easing: 'easeInOutBack',
    delay: anime.stagger(400, { direction: 'reverse' })
});

// About Section
//grids
let t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
})

t1.add({
    targets: '.section div',
    width: '100%',
    backgroundColor: '#121212',
    delay: anime.stagger(100),
    loop: true
})

t1.add({
    targets: '.section div',
    width: '90%',
    backgroundColor: '#121212',
    loop: true
})

t1.add({
    targets: '.contentAbout',
    top: '20%',
    opacity: 1,
    duration: 4000,

}, "-=2000")

let rotate = anime({
    targets: '#about .section div',
    width: '100%',
    backgroundColor: '#121212',
    delay: anime.stagger(100),
    duration: 1000,
    autoplay: false,
    loop: true
})

//About line anim
let lineAnime = anime({
    targets: '.about-head-hr',
    width: ['0%', '60%'],
    duration: 4000,
    autoplay: false,
})

//About name color change
let aboutNameAnime = anime({
    targets: '.about-name',
    color: "#f4ae95",
    duration: 4000,
    autoplay: false,
})

// about section logo
let aboutLogo1 = anime({
    targets: '#about svg path',
    scale: 0.85,
    translateY: "60%",
    rotate: '-30deg',
    duration: 4000,
    autoplay: false,
    loop: 1
})

let aboutLogo2 = anime({
    targets: '#about svg rect',
    scale: 0.85,
    translateY: "60%",
    rotate: '-30deg',
    duration: 4000,
    autoplay: false,
    loop: 1
})

// Work section
let t3 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 8000,
    autoplay: false,
})

t3.add({
    targets: '.work-content .work-head',
    opacity: [0, 1],
    easing: "easeInQuart",
    duration: 1000,
})

t3.add({
    targets: '.work-content .work-categories li',
    opacity: [0, 1],
    delay: anime.stagger(500),
    easing: 'easeOutQuart',
    duration: 700,
}, "+=500")

t3.add({
    targets: '.work-content .card-outer',
    opacity: [0, 1],
    easing: 'easeOutQuart',
    duration: 1000,
}, "-=500")

anime({
    targets: '#webdev',
    opacity: [0, 1],
    translateY: ["100%", "0%"],
    duration: 100,
})

let cardAnime = anime({
    targets: '.work-cards',
    opacity: [0, 1],
    translateY: ["10rem", "0%"],
    duration: 100,
    easing: 'linear',
    delay: anime.stagger(100),
    autoplay: false
})

// skills 
let t2 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 8000,
    autoplay: false,
})

t2.add({
    targets: '.skills-head',
    opacity: [0, 1],
    easing: 'easeOutBack',
    duration: 2000,
})

t2.add({
        targets: '.skills-head-hr',
        width: ['0%', '90%'],
        border: "1px solid",
        opacity: [0, 1],
        color: "#f4ae95",
        duration: 1800,
    },
    "-=1800")

t2.add({
        targets: '.skills-desc',
        height: ["0", "372.75px"],
        opacity: [0, 1],
        borderLeft: "1px solid",
        color: "#f4ae95",
        easing: 'easeOutBack',
        duration: 2000,

    },
    "-=1300")

t2.add({
        targets: '.skills-logos img',
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 100 }, { from: 'center' }),
        easing: 'easeOutBack',
        translateX: ["100%", "0%"],
        duration: 500,
    },
    "-=1000")


t2.add({
        targets: '.skills-desc .skills-year',
        opacity: [0, 1],
        delay: anime.stagger(500, { start: 100 }),
        translate: 0,
        duration: 1000,
    },
    "-=1000")


// contact
let t4 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 8000,
    autoplay: false,
})

t4.add({
    targets: '.contact-head',
    opacity: [0, 1],
    // translateX: ["-100%", "0%"],
    easing: 'easeOutBack',
    duration: 2000,
})

t4.add({
        targets: '.contact-head-hr',
        width: ['0%', '60%'],
        border: "1px solid",
        opacity: [0, 1],
        color: "#f4ae95",
        duration: 1800,
    },
    "-=1800")

t4.add({
        targets: '.contact-phone',
        opacity: [0, 1],
        delay: anime.stagger(1000),
        easing: 'easeOutBack',
        duration: 1800,
    },
    "-=1800")
t4.add({
        targets: '.contact-email',
        opacity: [0, 1],
        delay: anime.stagger(1000),
        easing: 'easeOutBack',
        duration: 1800,
    },
    "-=1800")

t4.add({
        targets: '.contact-logo',
        opacity: [0, 1],
        easing: 'easeOutBack',
        translateX: ["-100%", "0%"],
        duration: 2000,

    },
    "-=800")

t4.add({
        targets: '.contact-form',
        opacity: [0, 1],
        easing: 'easeInOutBack',
        translateX: ["100%", "0%"],
        duration: 2000,

    },
    "-=3000")
t4.add({
        targets: '.contact-form div',
        easing: 'easeOutBack',
        opacity: [0, 1],
        delay: anime.stagger(500),
        duration: 2000,

    },
    "-=1000")
t4.add({
        targets: '.btn-submit',
        easing: 'easeOutBack',
        opacity: [0, 1],
        duration: 2000,

    },
    "-=1500")

t4.add({
        targets: '.contact-social-media i',
        easing: 'easeOutBack',
        opacity: [0, 1],
        delay: anime.stagger(500),
        direction: "reverse",
        loop: true,
        duration: 1000,
    },
    "-=5000")
t4.add({
        targets: '.copyright p',
        easing: 'easeOutBack',
        opacity: [0, 1],
        delay: anime.stagger(500),
        direction: "reverse",
        loop: true,
        duration: 1000,
    },
    "-=4000")

t4.add({
        targets: ".contact-logo svg path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 3000,
        delay: anime.stagger(2000),
        direction: 'alternate',
        autoplay: false,
    },
    "-=2000");

t4.add({
        targets: ".contact-logo svg path",
        easing: 'easeInOutQuad',
        duration: 3000,
        fill: "#363636",
        opacity: '0.6',
        stroke: '#363636',
        delay: anime.stagger(3000),
        direction: 'alternate',
        autoplay: false,
    },
    "-=4000");

let hireModalClose = anime({
    targets: '#overlay',
    easing: 'linear',
    translateX: ["0%", "200%"],
    opacity: 0,
    duration: 1000,
    autoplay: false
})

let hireModalOpen = anime({
    targets: '#overlay',
    easing: 'linear',
    translateX: ["200%", "0%"],
    opacity: [0, 1],
    duration: 100,
    autoplay: false
})

let visitedAbout = true;
let visitedSkills = true;
let visitedContacts = true;
let clickedLogoContact = true;
let clickedLogo = true;
let workVisited = true;

document.querySelector(".brandBtn").addEventListener('click', () => {
    cardAnime.play()
})
document.querySelector(".webdevBtn").addEventListener('click', () => {
    cardAnime.play()
})
document.querySelector(".graphicBtn").addEventListener('click', () => {
    cardAnime.play()
})
document.querySelector(".marketBtn").addEventListener('click', () => {
    cardAnime.play()
})

document.querySelector(".about-hireMe").addEventListener('click', () => {
    hireModalOpen.play()
})

document.querySelector(".close-about").addEventListener('click', () => {
    hireModalClose.play()
    document.querySelector("#tagline").value = ""
    document.querySelector("#note").value = ""
})


document.querySelector('#about svg rect').addEventListener('mousemove', () => {
    if (clickedLogo) {
        clickedLogo = false
        aboutLogo2.play()
        aboutLogo1.play()
    }
})

const sections = document.querySelectorAll("section")

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-200px",
}


const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        }
        if (entry.target.id == "home") {
            rotate.pause()
        }
        if (entry.target.id == "about") {
            rotate.play()
            if (visitedAbout) {
                visitedAbout = false
                lineAnime.play()
                aboutNameAnime.play()
            }
        }

        if (entry.target.id == "work") {
            rotate.pause()
            if (workVisited) {
                workVisited = false
                t3.play()
            }
        }
        if (entry.target.id == "skills") {
            if (visitedSkills) {
                visitedSkills = false
                t2.play()
            }
        }
        if (entry.target.id == "contact") {
            if (visitedContacts) {
                visitedContacts = false
                t4.play()
            }
        }

        let currentNavIcon = document.querySelector(`.${entry.target.id}`)
        let currentDotIcon = document.querySelector(`.${entry.target.id}Dot`)
        var aTags = Array.from(ulDiv.getElementsByClassName("link"))
        var dots = document.querySelectorAll('.navigation-dot')

        aTags.forEach((tag) => {
            if (!tag.classList.contains(entry.target.id)) {
                if (tag.classList.contains("active")) {
                    tag.classList.remove("active")
                }
            }
        })

        dots.forEach((dot) => {
            if (!dot.classList.contains(`${entry.target.id}Dot`)) {
                if (dot.classList.contains("activeDot")) {
                    dot.classList.remove("activeDot")
                }
            }
        })

        if (!currentNavIcon.classList.contains("active")) {
            currentNavIcon.classList.add("active")
        }
        if (!currentDotIcon.classList.contains("activeDot")) {
            currentDotIcon.classList.add("activeDot")
        }
    })
}, options)

sections.forEach((section) => {
    observer.observe(section)
})

const images = document.querySelectorAll('[data-src]')

function preLoadImage(img) {
    src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 500px 0px"
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {

    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return
        } else {
            preLoadImage(entry.target)
            imgObserver.unobserve(entry.target)
        }

    })

}, imgOptions)

images.forEach(image => {
        imgObserver.observe(image)
    })
    // -------------------

document.querySelectorAll("[data-hover]").forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        document.querySelector("[data-cursor1]").classList.add("cursor1")
        document.querySelector("[data-cursor1]").classList.remove("cursor1-2")
        document.querySelector("[data-cursor2]").classList.add("cursor2")
        document.querySelector("[data-cursor2]").classList.remove("cursor2-2")
    })
    ele.addEventListener("mouseout", () => {
        document.querySelector("[data-cursor1]").classList.remove("cursor1")
        document.querySelector("[data-cursor1]").classList.add("cursor1-2")
        document.querySelector("[data-cursor2]").classList.remove("cursor2")
        document.querySelector("[data-cursor2]").classList.add("cursor2-2")
    })
})