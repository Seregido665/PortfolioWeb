document.addEventListener('DOMContentLoaded', () => {
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

        document.addEventListener('click', e => {
            if (navLinks.classList.contains('open') &&
                !navLinks.contains(e.target) &&
                !navToggle.contains(e.target)) {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
            }
        });
    }

    document.querySelectorAll('.card-screenshots').forEach(section => {
        const toggle = section.querySelector('.screenshots-toggle');
        const hide = section.querySelector('.screenshots-hide');

        toggle.addEventListener('click', () => {
            section.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
        });

        hide.addEventListener('click', () => {
            section.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

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
