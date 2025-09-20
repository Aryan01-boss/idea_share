// Footer Component
(function() {
    const footerElement = document.getElementById('footer');
    
    footerElement.innerHTML = `

     <footer class="footer">
        <div class="floating-elements" id="floatingElements"></div>
        
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="logo">RAKAX</div>
                    <p class="description">
                        We craft digital experiences that help startups, businesses, and entrepreneurs thrive from websites, apps, branding to marketing & automation.
                    </p>
                </div>

                <div class="footer-section">
                    <h3 class="section-title">Connect</h3>
                    <div class="social-icons">
                        <a href="#" class="social-icon" title="Facebook">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon" title="Twitter">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon" title="Instagram">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297C4.045 14.814 3.577 13.663 3.577 12.366c0-1.297.468-2.448 1.546-3.326.877-.807 2.029-1.297 3.326-1.297 1.297 0 2.448.49 3.326 1.297 1.078.878 1.546 2.029 1.546 3.326 0 1.297-.468 2.448-1.546 3.325-.878.807-2.029 1.297-3.326 1.297zm7.83 1.23c-.807 0-1.297-.49-1.297-1.297V9.094c0-.807.49-1.297 1.297-1.297.807 0 1.297.49 1.297 1.297v7.827c0 .807-.49 1.297-1.297 1.297z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-icon" title="LinkedIn">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="footer-section">
                    <h3 class="section-title">Newsletter</h3>
                    <div class="email-subscribe">
                        <p class="description" style="margin-bottom: 15px;">
                            Stay updated with our latest news and exclusive offers.
                        </p>
                        <form class="subscribe-form" id="subscribeForm">
                            <input type="email" class="email-input" placeholder="Enter your email" required>
                            <button type="submit" class="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">

            
            
                <p class="copyright">
                    © 2025 RAKAX. All rights reserved. |  <a href="#" >Privacy Policy</a> | <a href="#" >Terms of Service</a>
                </p>
            </div>
        </div>
    </footer>

    <svg style="position: absolute; width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="noise">
                <feTurbulence baseFrequency="0.9" numOctaves="4" result="noise"/>
                <feColorMatrix in="noise" type="saturate" values="0"/>
                <feBlend in="SourceGraphic" in2="noise" mode="multiply" opacity="0.3"/>
            </filter>
        </defs>
    </svg>

    `;
    
     function createFloatingElement() {
            const element = document.createElement('div');
            element.className = 'floating-element';
            
            const size = Math.random() * 8 + 4;
            element.style.width = size + 'px';
            element.style.height = size + 'px';
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDuration = (Math.random() * 15 + 10) + 's';
            element.style.animationDelay = Math.random() * 5 + 's';
            
            document.getElementById('floatingElements').appendChild(element);
            
            setTimeout(() => {
                element.remove();
            }, 25000);
        }

        // Create floating elements periodically
        setInterval(createFloatingElement, 3000);

        // Newsletter subscription
        document.getElementById('subscribeForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.email-input').value;
            const button = this.querySelector('.subscribe-btn');
            
            button.textContent = 'Subscribing...';
            button.style.background = 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)';
            
            setTimeout(() => {
                button.textContent = 'Subscribed!';
                this.querySelector('.email-input').value = '';
                
                setTimeout(() => {
                    button.textContent = 'Subscribe';
                    button.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                }, 2000);
            }, 1500);
        });

        // Social icon hover effects
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1) rotate(5deg)';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            });
        });

        // Logo click animation
        document.querySelector('.logo').addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
            
            // Create sparkle effect
            for (let i = 0; i < 6; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'absolute';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = 'white';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '1000';
                
                const rect = this.getBoundingClientRect();
                sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
                sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
                
                
                
                sparkle.animate([
                    { opacity: 1, transform: 'scale(1) translateY(0)' },
                    { opacity: 0, transform: 'scale(0) translateY(-20px)' }
                ], {
                    duration: 800,
                    easing: 'ease-out'
                }).onfinish = () => sparkle.remove();
            }
        });

        // Smooth scroll effect for footer sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.footer-section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });

})();