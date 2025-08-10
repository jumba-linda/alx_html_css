document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbarMenu = document.getElementById('navbar-menu');
    const body = document.body;
    
    mobileMenuButton.addEventListener('click', function() {
        // Toggle menu open/close state
        body.classList.toggle('menu-open');
        
        // Toggle aria-expanded attribute for accessibility
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle aria-label for accessibility
        this.setAttribute('aria-label', 
            isExpanded ? 'Open main menu' : 'Close main menu');
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (body.classList.contains('menu-open')) {
                body.classList.remove('menu-open');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenuButton.setAttribute('aria-label', 'Open main menu');
            }
        });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && body.classList.contains('menu-open')) {
            body.classList.remove('menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.setAttribute('aria-label', 'Open main menu');
        }
    });
});
