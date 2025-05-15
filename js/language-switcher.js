// Language Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language toggle button
    const languageToggle = document.querySelector('.language-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Debug log for URL detection
    console.log('Current URL:', window.location.href);
    console.log('Current pathname:', window.location.pathname);
    
    if (languageToggle) {
        console.log('Language toggle found');
        
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Language toggle clicked');
            
            // Get current location info
            const fullUrl = window.location.href;
            const domain = window.location.origin;
            let currentPath = window.location.pathname;
            let queryString = window.location.search;
            
            console.log('Processing URL:', fullUrl);
            console.log('Domain:', domain);
            console.log('Path:', currentPath);
            
            let newPath;
            
            // Handle index or root case
            if (currentPath === '/' || currentPath === '' || currentPath.endsWith('/')) {
                console.log('Root/index case detected');
                // We're at the root URL or a directory URL, redirect to Spanish index
                newPath = '/index-es.html';
            }
            // Handle index.html case
            else if (currentPath.toLowerCase().endsWith('/index.html')) {
                console.log('Index.html case detected');
                newPath = currentPath.replace(/index\.html$/i, 'index-es.html');
            }
            // Handle Spanish to English case
            else if (currentPath.toLowerCase().includes('-es.html')) {
                console.log('Spanish to English case detected');
                // Switch to English
                newPath = currentPath.replace(/-es\.html$/i, '.html');
            } 
            // Handle English to Spanish case
            else if (currentPath.toLowerCase().includes('.html')) {
                console.log('English to Spanish case detected');
                // Switch to Spanish
                newPath = currentPath.replace(/\.html$/i, '-es.html');
            }
            // Fallback case
            else {
                console.log('Fallback case - unknown pattern');
                // If we can't determine the pattern, default to index-es.html
                newPath = '/index-es.html';
            }
            
            // Add back the query string if any
            newPath += queryString;
            
            console.log('Redirecting to:', domain + newPath);
            
            // On mobile, close the menu before redirecting
            if (window.innerWidth <= 768 && navLinks && hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            // Redirect to new path
            window.location.href = domain + newPath;
        });
    } else {
        console.error('Language toggle button not found!');
    }
}); 