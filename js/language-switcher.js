// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle button
    const languageToggle = document.querySelector('.language-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get current page path
            let currentPath = window.location.pathname;
            let newPath;
            
            // Handle root URL case
            if (currentPath === '/' || currentPath === '') {
                // We're at the root URL, redirect to index-es.html
                newPath = '/index-es.html';
            }
            // Handle index.html case
            else if (currentPath === '/index.html') {
                newPath = '/index-es.html';
            }
            // Normal -es.html case
            else if (currentPath.endsWith('-es.html')) {
                // Switch to English
                newPath = currentPath.replace('-es.html', '.html');
            } 
            // Normal .html case
            else {
                // Switch to Spanish
                newPath = currentPath.replace('.html', '-es.html');
            }
            
            // On mobile, close the menu before redirecting
            if (window.innerWidth <= 768 && navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            // Redirect to new path
            window.location.href = newPath;
        });
    }
}); 