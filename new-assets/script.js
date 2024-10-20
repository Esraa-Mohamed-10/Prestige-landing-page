let nav = document.getElementById('nav')

function changeStyle() {
    nav.style.backgroundColor = 'white';
    nav.style.position = 'fixed';
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
        changeStyle();
    } else {
        nav.style.backgroundColor = 'transparent'; // Reset opacity to 100%
    }
});


var swiper = new Swiper('.hero-swiper', {
    loop: true, // Allows the slider to loop
    autoplay: {
        delay: 10000, // 5 seconds delay for autoplay
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allows clicking on the pagination bullets
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}
);


var swiper = new Swiper(".main-products", {
    slidesPerView: 4,
    grid: {
        rows: 2,
        fill: "row",
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
