// Products Component
(function() {
    const productsElement = document.getElementById('services');
    
    productsElement.innerHTML = `
        <div class="products-container">
            <section class="services">
        <div class="services-container">
            <h2>Our <span class="highlight">Services</span></h2>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Web Development</h3>
                    <p>Custom websites and web applications built with cutting-edge technologies.</p>
                    <ul class="service-features">
                        <li>React & Next.js</li>
                        <li>Full-Stack Solutions</li>
                        <li>E-commerce Platforms</li>
                    </ul>
                    
                </div>
                
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>Mobile App Development</h3>
                    <p>Powerful mobile apps that drive user engagement & growth.</p>
                    <ul class="service-features">
                        <li>Android (Java/Kotlin)</li>
                        <li>iOS (Swift)</li>
                        <li>Cross-Platform (React Native, Flutter)</li>
                        <li>Progressive Web Apps (PWA)</li>
                    </ul>
                    
                </div>
                
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <h3>UI/UX & Creative Design</h3>
                    <p>Purposeful design that delivers exceptional user experiences.</p>
                    <ul class="service-features">
                        <li>Website & App Design (Figma, XD)</li>
                        <li>Wireframes & Prototypes</li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    </section>

        </div>
    `;
})();