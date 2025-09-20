// Contact Component
(function() {
    const contactElement = document.getElementById('contact');
    
    contactElement.innerHTML = `
       <div class="contact-section">
        <div class="section-header">
            <h1>Get In Touch</h1>
            <p>Ready to take your business to the next level? Let's connect!</p>
        </div>

        <div class="contact-container">
            <div class="contact-info">
                <div class="info-item" onclick="copyToClipboard('📍 123 Business Street, City, State 12345')">
                    <div class="info-icon">📍</div>
                    <div class="info-text">
                        <h3>Our Office</h3>
                        <p>123 Business Street, City, State 12345</p>
                    </div>
                </div>

                <div class="info-item" onclick="copyToClipboard('📞 +91 820-991-1670')">
                    <div class="info-icon">📞</div>
                    <div class="info-text">
                        <h3>Phone Number</h3>
                        <p>+91 820-991-1670</p>
                    </div>
                </div>

                <div class="info-item" onclick="copyToClipboard('✉️ rakaxservices@rakax.in')">
                    <div class="info-icon">✉️</div>
                    <div class="info-text">
                        <h3>Email Address</h3>
                        <p>rakaxservices@rakax.in</p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">⏰</div>
                    <div class="info-text">
                        <h3>Business Hours</h3>
                        <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                <div class="quick-actions">
                    <a href="https://wa.me/+918209911670?text=Hi%20Rakax!%20I'm%20interested%20in%20your%20services." 
                       class="action-btn whatsapp-btn" target="_blank">
                        💬 WhatsApp Chat
                    </a>
                    <a href="rakaxservices@rakax.in?subject=Service%20Inquiry&body=Hi%20Rakax%20team,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20services.%0A%0ARegards"
                       class="action-btn email-btn">
                        ✉️ Send Email
                    </a>
                </div>
            </div>

            <div class="contact-form-container">
                <h2 class="form-title">Send us a Message</h2>
                <form class="contact-form" onsubmit="handleSubmit(event)">
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder=" " required>
                        <label class="form-label">Your Name</label>
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-input" placeholder=" " required>
                        <label class="form-label">Email Address</label>
                    </div>

                    <div class="form-group">
                        <input type="tel" class="form-input" placeholder=" ">
                        <label class="form-label">Phone Number (Optional)</label>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-input" placeholder=" " required>
                        <label class="form-label">Subject</label>
                    </div>

                    <div class="form-group">
                        <textarea class="form-textarea" placeholder=" " required></textarea>
                        <label class="form-label">Your Message</label>
                    </div>

                    <button type="submit" class="submit-btn">Send Message 🚀</button>
                </form>
            </div>
        </div>
    </div>
   `;

    function copyToClipboard(text) {
            navigator.clipboard.writeText(text.replace(/[📍📞✉️]/g, '').trim()).then(() => {
                showNotification('Copied to clipboard!');
            });
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                color: white;
                padding: 15px 25px;
                border-radius: 50px;
                font-weight: 600;
                z-index: 1000;
                animation: slideIn 0.3s ease-out;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            `;
            
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-in forwards';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 2000);
        }

        function handleSubmit(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = event.target[0].value;
            const email = event.target[1].value;
            const phone = event.target[2].value;
            const subject = event.target[3].value;
            const message = event.target[4].value;
            
            // Here you would typically send the data to your server
            console.log('Form submitted:', { name, email, phone, subject, message });
            
            showNotification('Message sent successfully! We\'ll get back to you soon.');
            event.target.reset();
        }

        // Add some dynamic animations
        document.addEventListener('DOMContentLoaded', () => {
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes slideOut {
                    from {
                        opacity: 1;
                        transform: translateX(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                }
            `;
            document.head.appendChild(style);
        });


})();