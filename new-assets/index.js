// navbar code
const navbar = document.getElementById('nav');
const logo = document.querySelector('.navbar-brand img');
const navbarToggler = document.querySelector('.navbar-toggler'); 
const navbarLinks = document.querySelectorAll('.nav-link');

navbar.addEventListener('mouseenter', () => {
    logo.src = 'new-assets/media/logo.webp'; 
});

navbar.addEventListener('mouseleave', () => {
    logo.src = 'new-assets/media/logo-white.png'; 
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) { // عند التمرير لمسافة معينة
        navbar.style.setProperty('background-color', 'white', 'important');
        navbar.style.setProperty('color', 'black', 'important');
        navbar.style.marginTop=0;
        logo.src = 'new-assets/media/logo.webp'; // الصورة بعد التمرير

        // تغيير لون النص والروابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.setProperty('color', 'black', 'important');
        });
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'var(--text-color)';
        logo.src = 'new-assets/media/logo-white.png'; // الصورة الافتراضية
        navbar.style.marginTop='75px';
        // استعادة الألوان الأصلية للروابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.setProperty('color', 'var(--text-color)', 'important');
        });
    }
});


// التأكد من ظهور زر التبديل بشكل صحيح
navbarToggler.addEventListener('click', () => {
    if (!navbarToggler.classList.contains('collapsed')) {
        navbar.style.setProperty('background-color', 'white', 'important');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.setProperty('color', 'black', 'important');
        });
    } else {
        navbar.style.setProperty('background-color', 'transparent', 'important');
        document.querySelectorAll('.nav-link').forEach(link => {
            link.style.setProperty('color', 'var(--text-color)', 'important');
        });
    }
});
// end navbar code

// second section code
// حدد جميع عناصر prod-card
const prodCards = document.querySelectorAll('.prod-card');

prodCards.forEach(prodCard => {
    const img = prodCard.querySelector('.main-img');
    const originalSrc = img.src; // حفظ مصدر الصورة الأصلية
    const hoverSrc = originalSrc.replace('.avif', '-hover.webp'); // افترض أنك ستستخدم نفس الاسم مع -hover

    // إضافة حدث عند دخول الماوس
    prodCard.addEventListener('mouseenter', () => {
        img.src = hoverSrc; // تغيير الصورة إلى صورة hover
    });

    // إضافة حدث عند مغادرة الماوس
    prodCard.addEventListener('mouseleave', () => {
        img.src = originalSrc; // العودة إلى الصورة الأصلية
    });
});


// video code
const video = document.getElementById("secondVideo");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    video.controls = true; // إظهار الـ controls
    video.play(); // تشغيل الفيديو
    playButton.style.display = "none"; // إخفاء الزر بعد التشغيل
});


// split screen code

// window.onload = function() {
//     Split(['.split-left', '.split-right'], {
//         gutterSize: 2, 
//         sizes: [50, 50],
//         cursor: 'ew-resize'
//     });
// };

const leftProduct = document.querySelector('.split-left');
        const rightProduct = document.querySelector('.split-right');
        const gutter = document.querySelector('.gutter');
        const splitProducts = document.querySelector('.split-products');

        let isDragging = false;

        gutter.addEventListener('mousedown', function() {
            isDragging = true;
        });

        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            
            const containerWidth = splitProducts.offsetWidth;
            const offsetX = e.clientX - splitProducts.getBoundingClientRect().left;
            const leftWidthPercent = (offsetX / containerWidth) * 100;

            // تأكد من بقاء النسب بين 10% و 90%:
            if (leftWidthPercent < 10 || leftWidthPercent > 90) return;
            
            // تحديث تخطيط الشبكة بناءً على السحب:
            splitProducts.style.gridTemplateColumns = `${leftWidthPercent}% 10px ${100 - leftWidthPercent}%`;
        });

        document.addEventListener('mouseup', function() {
            isDragging = false;
        });

