const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('.closebtn');


window.onresize = function () {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w < 800) {
        
        document.getElementById('mySidenav').classList.add('sidenav')
        menuMobile();

    } if(w> 800) {
        document.getElementById('mySidenav').classList.remove('sidenav')
        console.log('nao')
    // }else{
    }
};


function menuMobile() {
    menuBtn.addEventListener('click', function () {
        openNav();
    });

    closeBtn.addEventListener('click', function () {
        closeNav();
    });
}

function openNav() {
    document.getElementById("mySidenav").style.width = "75%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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