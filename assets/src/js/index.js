const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('.closebtn');

menuBtn.addEventListener('click', function () {
    document.getElementById("mySidenav").style.width = "75%";
});
closeBtn.addEventListener('click', function () {
    document.getElementById("mySidenav").style.width = "0";
});


// carrosel

const swiper = new Swiper('.swiper-card', {
    slidesPerView: "auto",
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const swiper1 = new Swiper('.promocao-swiper', {
    slidesPerView: "auto",
    autoplay: {
        delay: 2000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});