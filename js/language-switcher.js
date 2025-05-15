// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle button
    const languageToggle = document.querySelector('.language-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get current URL and pathname
            const currentUrl = window.location.href;
            const currentPath = window.location.pathname;
            
            // Simple check based on button text instead of URL pattern
            // This makes it more reliable across different URL patterns
            const isCurrentlyEnglish = languageToggle.textContent.includes('Español');
            
            let targetUrl;
            
            // Handle the root URL specially
            if (currentPath === '/' || currentPath === '' || currentPath === '/index.html') {
                if (isCurrentlyEnglish) {
                    // Switch to Spanish version of index
                    targetUrl = window.location.origin + '/index-es.html';
                } else {
                    // Switch to English version of index
                    targetUrl = window.location.origin + '/index.html';
                }
            } else {
                // For all other pages, use the standard pattern
                if (isCurrentlyEnglish) {
                    // Switch to Spanish
                    if (currentPath.includes('.html')) {
                        targetUrl = currentUrl.replace('.html', '-es.html');
                    } else {
                        // Fallback for unusual URLs
                        targetUrl = window.location.origin + '/index-es.html';
                    }
                } else {
                    // Switch to English
                    if (currentPath.includes('-es.html')) {
                        targetUrl = currentUrl.replace('-es.html', '.html');
                    } else {
                        // Fallback for unusual URLs
                        targetUrl = window.location.origin + '/index.html';
                    }
                }
            }
            
            // On mobile, close the menu before redirecting
            if (window.innerWidth <= 768 && navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            // Redirect to the target URL
            window.location.href = targetUrl;
        });
    }
}); 