AOS.init();

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 7,
    spaceBetween: 100,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
});

var swiper0 = new Swiper(".mySwiper0", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
    },
    breakpoints: {
        1000: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: "auto",
    spaceBetween: 70,
    centeredSlides: true,
    loop: true,
});

swiper3.controller.control = swiper0;
swiper0.controller.control = swiper3;
