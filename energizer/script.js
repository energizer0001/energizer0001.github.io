const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode"
    } else {
        modeText.innerText = "Dark Mode"

    }
});

var swiper = new Swiper("#about .slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    dynamicBullets: "true",
    pagination: {
        el: "#about .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#about .swiper-button-next",
        prevEl: "#about .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,

        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,

        },
    }
});

var swiper = new Swiper("#products .slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    dynamicBullets: "true",
    pagination: {
        el: "#products .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#products .swiper-button-next",
        prevEl: "#products .swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,

        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,

        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,

        },
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzwb5ODLglMoESpwsHAYAwGbsHbjB4K7CxJZNkPFq5bp2gX7-XXlZAMTydSHbUP2XLx_w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})