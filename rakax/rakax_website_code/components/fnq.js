(function() {
    const headerElement = document.getElementById('fnq');
    
    headerElement.innerHTML = `

            <div class="faq-container">
        <h1 class="faq-title">Questions? Answers.</h1>
        
        <div class="faq-list">
            <div class="faq-item">
                <div class="faq-question">
                    <span>What makes Rakax.in different from agencies or freelancers?</span>
                    <div class="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        We’re not just another agency—we’re a trusted website design & development partner for businesses across India. While others may charge high fees with slow turnaround times or lack reliability, we deliver high-quality, fast, and scalable solutions backed by dedicated support.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What platforms do you develop websites on?</span>
                    <div class="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        We work with Framer, WordPress, Shopify, and custom-coded solutions to match your specific needs. We recommend the best platform based on your goals, ensuring scalability and ease of management.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How do we collaborate during the project?</span>
                    <div class="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        We keep things simple and transparent. You'll get a dedicated project manager and access to our collaboration tools (Whatsapp, Notion, or Trello) to track progress, share feedback, and stay in the loop.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How fast will my website be ready?</span>
                    <div class="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        Speed matters! Our structured process ensures that simple websites are delivered in as little as 1-2 weeks, while more complex projects are completed within 3-4 weeks—without compromising on quality.
                    </div>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What if I need my website done urgently?</span>
                    <div class="faq-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        We understand deadlines! With our Superfast Priority Service, we can accelerate your project and deliver a high-quality website in record time.
                    </div>
                </div>
            </div>
        </div>
    </div>


    `;
     
     document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            const otherAnswer = otherItem.querySelector('.faq-answer');
                            otherAnswer.style.maxHeight = '0px';
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                        answer.style.maxHeight = '0px';
                    } else {
                        item.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                });
            });

            // Optional: Open first FAQ item by default
            // const firstItem = faqItems[0];
            // if (firstItem) {
            //     firstItem.classList.add('active');
            //     const firstAnswer = firstItem.querySelector('.faq-answer');
            //     firstAnswer.style.maxHeight = firstAnswer.scrollHeight + 'px';
            // }
        });

        // Add smooth scrolling and resize handling
        window.addEventListener('resize', () => {
            const activeItems = document.querySelectorAll('.faq-item.active');
            activeItems.forEach(item => {
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            });
        });

})();