(function() {
    const headerElement = document.getElementById('header');
    
    headerElement.innerHTML = `
        <nav>
            <div class="nav-container">
                <div class="logo">R.</div>
                <ul class="nav-links" id="navLinks">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="about-page.html">ABOUT</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                    <a href="https://wa.me/+918209911670?text=Hi%20Rakax!%20I'm%20interested%20in%20your%20services." id="mobile-quote-btn">Get Quote</a>
                </ul>
                <a href="https://wa.me/+918209911670?text=Hi%20Rakax!%20I'm%20interested%20in%20your%20services." class="get-quote-btn">Get Quote</a>
                <div class="mobile-menu" id="mobileMenu">
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                    <div class="hamburger"></div>
                </div>
            </div>
        </nav>
    `;

    // Mobile Menu Toggle Function
    function toggleMenu() {
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.getElementById('mobileMenu');
        
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }

    // Make toggleMenu function globally accessible
    window.toggleMenu = toggleMenu;

    // Add click event to mobile menu (since we can't use onclick in innerHTML)
    const mobileMenuElement = document.getElementById('mobileMenu');
    mobileMenuElement.addEventListener('click', toggleMenu);

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            const mobileMenu = document.getElementById('mobileMenu');
            
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.getElementById('mobileMenu');
        const nav = document.querySelector('nav');
        
        if (nav && !nav.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const navLinks = document.getElementById('navLinks');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
})();