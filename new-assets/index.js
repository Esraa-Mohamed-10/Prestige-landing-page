// navbar code
const navbar = document.getElementById('nav');
const logo = document.querySelector('.navbar-brand img');

navbar.addEventListener('mouseenter', () => {
    logo.src = 'new-assets/media/logo.webp'; // الصورة عند التحويم
});

navbar.addEventListener('mouseleave', () => {
    logo.src = 'new-assets/media/logo-white.png'; // الصورة الافتراضية
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
const video = document.getElementById('secondVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
    // Hide the button
    playButton.style.display = 'none';
    // Show the video controls
    video.setAttribute('controls', 'controls');
    // Play the video
    video.play();
});
