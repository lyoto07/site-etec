const menuBtn = document.querySelector('#menu');
// const navMenu = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.lista__nav-menu');

hamburger.addEventListener('click', function () {
    if(temClasse() === false){
        openbtn();
    }else{
        closebtn();
    }

});

function temClasse(){
    return hamburger.classList.contains('active');
}
function openbtn(){
    navMenu.classList.remove('disable');
    hamburger.classList.toggle('active');
    navMenu.classList.add('active');
}

function closebtn(){
    navMenu.classList.add('disable');
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}
// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function() {
//    console.log('ioi')
    // navMenu.classList.add('disable');
    // menuBtn.classList.remove('active');
    // navMenu.classList.remove('active');
    // document.getElementById("mySidenav").style.display = "0px";
// }));


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