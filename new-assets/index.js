// navbar code
const navbar = document.getElementById('nav');
const logo = document.getElementById('logo');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarLinks = document.querySelectorAll('.nav-page');
const searchDiv = document.querySelector('.search-div');
const searchBtn = document.getElementById('search-btn');
const closeSearchBtn = document.getElementById('close-search');
let isScrolling = false;

function applyScrolledStyles() {
    navbar.style.setProperty('background-color', 'white', 'important');
    navbar.style.setProperty('color', 'black', 'important');
    navbar.style.marginTop = 0;
    logo.src = 'new-assets/media/logo.webp';

    document.querySelectorAll('.nav-page').forEach(link => {
        link.style.setProperty('color', 'black', 'important');
    });
    isScrolling = true;
}

function applyDefaultStyles() {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.color = 'var(--text-color)';
    logo.src = 'new-assets/media/logo-white.png';
    navbar.style.marginTop = '75px';
    document.querySelectorAll('.nav-page').forEach(link => {
        link.style.color = 'white';
    });
    isScrolling = false
}

window.addEventListener('scroll', () => {
    isScrolling = true;
    if (window.scrollY > 1) {
        applyScrolledStyles();
        searchDiv.style.top = '12vh';
    } else {
        applyDefaultStyles();
        searchDiv.style.top = '21.375vh';
    }
});
navbar.addEventListener('mouseenter', () => {
    if (!isScrolling) {
        logo.src = 'new-assets/media/logo.webp';
    }
});

navbar.addEventListener('mouseleave', () => {
    if (!isScrolling) {
        logo.src = 'new-assets/media/logo-white.png';
    }
});


searchBtn.addEventListener('click', function () {
    searchDiv.classList.toggle('d-none');

    if (!searchDiv.classList.contains('d-none')) {
        isScrolling = true
        navbar.style.setProperty('background-color', 'white', 'important');
        navbar.style.setProperty('color', 'black', 'important');
        logo.src = 'new-assets/media/logo.webp';

        document.querySelectorAll('.nav-page').forEach(link => {
            link.style.setProperty('color', 'black', 'important');
        });

    }
});

closeSearchBtn.addEventListener('click', function () {
    searchDiv.classList.add('d-none');
});

// if(!searchDiv.classList.contains('d-none')){
//     applyScrolledStyles()
// }

document.getElementById("open-sideNav").addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "80%";
});

// Attach event listener to close button
document.getElementById("close-sideNav").addEventListener("click", () => {
    document.getElementById("mySidenav").style.width = "0";
});
// second section code
const prodCards = document.querySelectorAll('.prod-card');
prodCards.forEach(prodCard => {
    const img = prodCard.querySelector('.main-img');
    const originalSrc = img.src;
    const hoverSrc = originalSrc.replace('.avif', '-hover.webp');

    prodCard.addEventListener('mouseenter', () => {
        img.src = hoverSrc;
    });

    prodCard.addEventListener('mouseleave', () => {
        img.src = originalSrc;
    });
});


// video code
const video = document.getElementById("secondVideo");
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", () => {
    video.controls = true;
    video.play();
    playButton.style.display = "none";
});


// split screen code
document.addEventListener('DOMContentLoaded', function () {
    var parent = document.querySelector('.split-view'),
        topPanel = parent.querySelector('.top-split-img'),
        handle = parent.querySelector('.handle'),
        isDragging = false;

    // const leftImage = document.querySelector('.top-split-img img');
    // const rightImage = document.querySelector('.bottom-split-img img');

    // function updateHandleHeight() {
    //     const leftHeight = leftImage.offsetHeight;
    //     const rightHeight = rightImage.offsetHeight;

    //     handle.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    // }
    // updateHandleHeight();

    parent.addEventListener('mousedown', function () {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
    });


    document.addEventListener('mouseup', function () {
        isDragging = false;
        document.body.style.cursor = 'default'; // Reset cursor
    });

    document.addEventListener('mousemove', function (event) {
        if (!isDragging) return;

        handle.style.left = event.clientX + 'px';

        topPanel.style.width = event.clientX + 'px';
    });

    parent.addEventListener('touchstart', function (event) {
        isDragging = true;
        document.body.style.cursor = 'ew-resize';
        event.preventDefault();
    });

    parent.addEventListener('touchend', function () {
        isDragging = false;
        document.body.style.cursor = 'default';
    });

    parent.addEventListener('touchmove', function (event) {
        if (!isDragging) return;
        var touch = event.touches[0];
        handle.style.left = touch.clientX + 'px';
        topPanel.style.width = touch.clientX + 'px';
    });

    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
})





