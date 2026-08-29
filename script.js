// Theme Toggle Logic
const toggleBtn = document.getElementById('themeToggle');

// Check stored theme or default to system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setTheme('dark');
} else {
    setTheme('light');
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Mobile Hamburger Navigation Logic
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
        });
    });
}
