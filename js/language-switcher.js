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
            const currentPath = window.location.pathname;
            let newPath;
            
            // Check if path ends with -es.html (Spanish)
            if (currentPath.endsWith('-es.html')) {
                // Switch to English
                newPath = currentPath.replace('-es.html', '.html');
            } else {
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