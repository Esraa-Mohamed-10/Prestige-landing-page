
// var slideTimeout;

// var swiper = new Swiper(".hero-swiper", {
//     loop: true,
//     autoplay: false,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     on: {

//         init: function () {
//             handleSlideChange();
//         },

//         slideChange: function () {
//             var videos = document.querySelectorAll(".hero-slide-video video");
//             videos.forEach(function (video) {
//                 video.pause();
//             });
//             clearTimeout(slideTimeout);
//         },

//         slideChangeTransitionEnd: function () {
//             handleSlideChange();
//         },
//     },
// });


// function handleSlideChange() {
//     var activeSlide = document.querySelector(".swiper-slide-active");
//     var video = activeSlide.querySelector("video");

//     if (video) {
//         video.play();

//         slideTimeout = setTimeout(() => {
//             swiper.slideNext();
//         }, 16000);
//     } else {

//         slideTimeout = setTimeout(() => {
//             swiper.slideNext();
//         }, 3000);
//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    var slideTimeout;

    var swiper = new Swiper(".hero-swiper", {
        loop: true,
        autoplay: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function () {
                handleSlideChange();
            },
            slideChange: function () {
                var videos = document.querySelectorAll(".hero-slide-video video");
                videos.forEach(function (video) {
                    video.pause();
                    video.currentTime = 0; // Reset video to the start
                });
                clearTimeout(slideTimeout);
            },
            slideChangeTransitionEnd: function () {
                handleSlideChange();
            },
        },
    });

    function handleSlideChange() {
        var activeSlide = document.querySelector(".swiper-slide-active");
        var video = activeSlide ? activeSlide.querySelector("video") : null;

        if (video) {
            video.play();
            slideTimeout = setTimeout(() => {
                swiper.slideNext();
            }, 16000); // Play for 16 seconds
        } else {
            slideTimeout = setTimeout(() => {
                swiper.slideNext();
            }, 3000); // Change slide after 3 seconds
        }
    }
});


// var slideTimeout; // متغير لتخزين المؤقت

// var swiper = new Swiper(".hero-swiper", {
//     loop: true,
//     autoplay: false, // تعطيل التشغيل التلقائي
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     on: {
//         // عند تهيئة الـ Swiper لأول مرة، قم بتشغيل السلايد الأولى
//         init: function () {
//             handleSlideChange();
//         },
//         // عند تغيير السلايد، تأكد من إيقاف جميع الفيديوهات وإلغاء المؤقت السابق
//         slideChange: function () {
//             // إيقاف الفيديوهات
//             var videos = document.querySelectorAll(".hero-slide-video video");
//             videos.forEach(function (video) {
//                 video.pause();
//             });

//             // إضافة فئة لإخفاء المحتوى
//             var slideContents = document.querySelectorAll(".slide-content");
//             slideContents.forEach(function (content) {
//                 content.classList.remove("show");
//                 content.classList.add("hide");
//             });

//             clearTimeout(slideTimeout); // إلغاء المؤقت السابق
//         },
//         // تشغيل الفيديو عندما تظهر السلايد الخاصة به
//         slideChangeTransitionEnd: function () {
//             handleSlideChange();
//         },
//     },
// });

// // دالة لتشغيل السلايد بناءً على نوع المحتوى
// function handleSlideChange() {
//     var activeSlide = document.querySelector(".swiper-slide-active");
//     var video = activeSlide.querySelector("video");
//     var content = activeSlide.querySelector(".slide-content");

//     // إضافة فئة لإظهار المحتوى
//     if (content) {
//         content.classList.remove("hide");
//         content.classList.add("show");
//     }

//     if (video) {
//         video.play();
//         // الانتظار حتى ينتهي الفيديو ثم الانتقال للسلايد التالية
//         slideTimeout = setTimeout(() => {
//             swiper.slideNext();
//         }, 16000); // مدة تشغيل الفيديو 26 ثانية
//     } else {
//         // إذا كانت السلايد صورة، الانتقال بعد 5 ثواني
//         slideTimeout = setTimeout(() => {
//             swiper.slideNext();
//         }, 3000); // مدة تشغيل السلايد 5 ثواني
//     }
// }


// main product swiper - section 2
var swiper = new Swiper(".main-product-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// main product swiper - section 5
var swiper = new Swiper(".featured-prod-swipper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// best-seller-swiper swiper - section 9
var swiper = new Swiper(".best-seller-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// latest-prod-swiper swiper - section 12
var swiper = new Swiper(".latest-prod-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// discover swiper - section 11
var swiper = new Swiper(".discover-swipper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
});

// why-choose-us swiper - section 15
var swiper = new Swiper(".why-choose-us-swipper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// mouse wheel
var swiper = new Swiper(".mouse-wheel-swipper", {
    direction: "vertical",
    slidesPerView: 1,
    // mousewheel: true,
    mousewheel: {
        releaseOnEdges: true, 
    },
    speed:1500,
    // breakpoints: {
    //     768: {
    //         direction: "vertical", 
    //     }
    // }
});