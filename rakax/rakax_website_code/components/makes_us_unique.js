(function() {
    const headerElement = document.getElementById('makes_us_unique');
    
    headerElement.innerHTML = `


        <!-- makes_us_unique Section -->
        <section class="makes_us_unique-section">
            <div class="makes_us_unique-card">
                <h1 class="makes_us_unique-title">All Your Website Needs, Expertly Handled</h1>
                <p class="makes_us_unique-subtitle">End-to-end website solutions ✨ that ensure your website looks great, functions flawlessly, and drives results. ✨</p>
                <button class="book-call-btn">BOOK A CALL</button>
            </div>
            
            <div class="services-list">
                <div class="service-item">END-TO-END WEB DEVELOPMENT</div>
                <div class="service-item">CUSTOM WEBSITE DESIGN</div>
                <div class="service-item">LANDING PAGE</div>
                <div class="service-item">E-COMMERCE WEBSITE</div>
                <div class="service-item">WEBSITE OPTIMIZATION</div>
                <div class="service-item">SEO (SEARCH ENGINE OPTIMIZATION)</div>
            </div>
        </section>

        <!-- Main Section -->
        <section class="main-section">
            <h2 class="main-title">What makes us unique?</h2>
            <button class="intro-btn">Book an Intro Call →</button>
        </section>

        <!-- Comparison Headers -->
        <div class="comparison-headers">
            <div class="comparison-header with-brand">😊 With Rakax.in:</div>
            <div class="comparison-header without-brand">😰 Without Rakax.in:</div>
        </div>

        <!-- Comparison Cards -->
        <div class="comparison-row">
            <div class="comparison-card">
                <div class="card-icon positive-icon">😊</div>
                <h3 class="card-title">Expert Developer and Designer.</h3>
                <p class="card-description">Experience and expertise at your fingertips, ensuring exceptional design quality.</p>
            </div>
            <div class="comparison-card">
                <div class="card-icon negative-icon">😰</div>
                <h3 class="card-title">Junior Developer and Designer.</h3>
                <p class="card-description">Inexperienced designers may compromise on quality and attention to detail.</p>
            </div>
        </div>

        <div class="comparison-row">
            <div class="comparison-card">
                <div class="card-icon positive-icon">😊</div>
                <h3 class="card-title">Easy Project Management.</h3>
                <p class="card-description">Simple processes & clear communication for a hassle-free experience.</p>
            </div>
            <div class="comparison-card">
                <div class="card-icon negative-icon">😰</div>
                <h3 class="card-title">Tedious & Hard to Keep Up.</h3>
                <p class="card-description">Disorganized processes and poor communication lead to frustration.</p>
            </div>
        </div>

        <div class="comparison-row">
            <div class="comparison-card">
                <div class="card-icon positive-icon">😊</div>
                <h3 class="card-title">Cost Efficient.</h3>
                <p class="card-description">Transparent pricing and optimized resources for maximum value.</p>
            </div>
            <div class="comparison-card">
                <div class="card-icon negative-icon">😰</div>
                <h3 class="card-title">Never-ending Invoices.</h3>
                <p class="card-description">Unclear pricing and hidden costs can drain your budget & your bank.</p>
            </div>
        </div>

        <div class="comparison-row">
            <div class="comparison-card">
                <div class="card-icon positive-icon">😊</div>
                <h3 class="card-title">Updates every 24-Hours.</h3>
                <p class="card-description">Regular progress and timely delivery, so you're always in the loop.</p>
            </div>
            <div class="comparison-card">
                <div class="card-icon negative-icon">😰</div>
                <h3 class="card-title">Slow & Rushed Work.</h3>
                <p class="card-description">Delays and rushed deliveries can impact your project's overall success.</p>
            </div>
        </div>
    


    `;

        document.querySelectorAll('.comparison-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });

        // Add button hover effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Smooth scroll animations for cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.comparison-card').forEach(card => {
            observer.observe(card);
        });


})();