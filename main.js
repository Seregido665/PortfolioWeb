document.addEventListener('DOMContentLoaded', () => {
    // Mobile navbar — fade out while scrolling down, fade in while scrolling up
    const navbar = document.querySelector('.navbar');
    const MOBILE_BP = 768;
    // Navbar fully hidden at 42% of total scrollable distance (a bit under half)
    const HIDE_FRACTION = 0.42;

    function updateNavbarOpacity() {
        if (window.innerWidth > MOBILE_BP) {
            navbar.style.opacity = '';
            navbar.style.pointerEvents = '';
            return;
        }
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        const hideAt = totalScrollable * HIDE_FRACTION;
        const opacity = hideAt > 0 ? Math.max(0, 1 - window.scrollY / hideAt) : 1;
        navbar.style.opacity = opacity;
        navbar.style.pointerEvents = opacity === 0 ? 'none' : '';
    }

    window.addEventListener('scroll', updateNavbarOpacity, { passive: true });
    window.addEventListener('resize', updateNavbarOpacity);
    updateNavbarOpacity();

    // Hamburger menu
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks  = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    const modal = document.getElementById('img-modal');
    const modalImg = document.getElementById('img-modal-img');

    document.querySelectorAll('.card-screenshots img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', e => {
        if (e.target !== modalImg) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
