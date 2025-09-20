// Testimonials Component
(function() {
    const testimonialsElement = document.getElementById('testimonials');
    
    testimonialsElement.innerHTML = `
         <div class="testimonials-container">
        <div class="testimonials-header">
            <div class="testimonials-badge">Testimonials</div>
            <h2 class="testimonials-title">Trusted by businesses worldwide</h2>
        </div>

        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">
                    I found Sunny in a moment with high urgency for a project. He was quickly available and flexible, he pick up the task easily and worked very hard on short deadlines. Recommended !
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-1">VC</div>
                    <div class="author-info">
                        <h4>Valentina Coletti</h4>
                        <p>UX Designer</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    It's really amazing! The team Brandvertise.in exceeded my expectations. The website they designed is not just visually stunning but also highly functional and user-friendly.
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-2">AA</div>
                    <div class="author-info">
                        <h4>Atheek Ahamath</h4>
                        <p>UX Consultant</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    Great work! The whole process was smooth, communication was clear, and the final result exceeded our expectations. It was a pleasure working together, and I would definitely recommend to anyone!
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-3">CL</div>
                    <div class="author-info">
                        <h4>Dr. Chia Jung Lee</h4>
                        <p>Head - 70Dental</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    Amazing job again! They truly understand what we need and deliver every time. Their attention to detail, creativity, and ability to bring our vision to life is unmatched.
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-4">A</div>
                    <div class="author-info">
                        <h4>Arrington</h4>
                        <p>Business Consultant</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    Great and fast worker! Always delivers high-quality work with incredible attention to detail. Reliable, efficient, and a pleasure to work with!
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-5">MS</div>
                    <div class="author-info">
                        <h4>Mike Selane</h4>
                        <p>Kindle Publisher</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card">
                <p class="testimonial-text">
                    He is good. Very responsive and open to feedback. Always ready to make adjustments and ensures the final result meets expectations.
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar avatar-6">SJ</div>
                    <div class="author-info">
                        <h4>Ms. Sakshi Jain</h4>
                        <p>Founder - Straya Health</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

                    
            
    `;

            const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Initially hide cards and observe them
        document.querySelectorAll('.testimonial-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Add hover effect for avatar rotation
        document.querySelectorAll('.author-avatar').forEach(avatar => {
            avatar.addEventListener('mouseenter', () => {
                avatar.style.transform = 'rotate(360deg) scale(1.1)';
                avatar.style.transition = 'all 0.3s ease';
            });
            
            avatar.addEventListener('mouseleave', () => {
                avatar.style.transform = 'rotate(0deg) scale(1)';
            });
        });

   
    
})();