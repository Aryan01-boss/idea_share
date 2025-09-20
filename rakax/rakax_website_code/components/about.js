(function() {
    const aboutUsElement = document.getElementById('about');
    
    aboutUsElement.innerHTML = `
        <div class="about-container">
           <section class="about" id="about">
        <h2>Who We <span class="highlight">Are</span></h2>
        <p class="about-text">
            Rakax is a full-service digital agency driven by innovation and performance.
            We partner with ambitious startups and businesses to design, develop, and
            scale custom digital solutions. With a team of passionate techies and
            creatives, we turn your ideas into real digital products.
        </p>
        
        <div class="stats">
            <div class="stat-item">
                <span class="stat-number">30+</span>
                <span class="stat-label">Projects Completed</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">99%</span>
                <span class="stat-label">Success Rate</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
            </div>
        </div>

        <a href="#" class="learn-more-btn">Learn More</a>
    </section>
        </div>
    `;
})();