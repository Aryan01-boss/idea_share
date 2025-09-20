// Gallery Component with Pure Infinite Slider and Faded Edges
(function() {
    const galleryElement = document.getElementById('gallery');
    
    // Gallery images data
    const galleryImages = [
        { src: "images/6AOLYHipUp7ytbEAWQySH3dy4I.avif", },
        { src: "images/EXxc0O2fFL37dbQfsHLJClQejDw.avif",},
        { src: "images/Lg9vAngNG0i1ZvolUh4QbsRkM.avif",  },
        { src: "images/tllluElTfQ3bvjePo7BHluWjfA.avif",  },
        
    ];
    
    // Generate gallery markup with fade overlays
    galleryElement.innerHTML = `

        <div class="gallery-container">
            <div class="gallery-track-wrapper">
                <!-- Fade overlays for edges -->
                <div class="gallery-fade gallery-fade-left"></div>
                <div class="gallery-fade gallery-fade-right"></div>
                
                <div class="gallery-track">
                    ${generateSlides(galleryImages)}
                </div>
            </div>
        </div>
    `;
    
    // Generate slides with duplicates for smooth infinite scrolling
    function generateSlides(images) {
        // Create slides HTML - duplicate each image twice for seamless looping
        const duplicatedImages = [...images, ...images, ...images];
        
        return duplicatedImages.map((image, index) => `
            <div class="gallery-slide" data-index="${index}">
                <div class="gallery-img-container">
                    <img src="${image.src}" alt="${image.title}" class="gallery-img">
                    <div class="gallery-overlay">
                       
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Get DOM elements
    const track = galleryElement.querySelector('.gallery-track');
    const slides = Array.from(galleryElement.querySelectorAll('.gallery-slide'));
    
    // Initialize variables
    const originalSlidesCount = galleryImages.length;
    let slideWidth;
    let currentPosition = 0;
    let animationId;
    let isPaused = false;
    
    // Calculate dimensions and set initial state
    function initSlider() {
        // Get dimensions after DOM is fully loaded
        slideWidth = slides[0].getBoundingClientRect().width;
        
        // Position in the middle set initially
        currentPosition = -originalSlidesCount * slideWidth;
        track.style.transform = `translateX(${currentPosition}px)`;
    }
    
    // Animation function for continuous sliding
    function animateSlider() {
        if (!isPaused) {
            // Move slightly on each frame
            currentPosition -= 0.5;
            track.style.transform = `translateX(${currentPosition}px)`;
            
            // Check if we need to reset position
            const totalWidth = slideWidth * originalSlidesCount;
            if (Math.abs(currentPosition) >= totalWidth + slideWidth * originalSlidesCount) {
                // Reset to the middle set without animation
                currentPosition += totalWidth;
                track.style.transition = 'none';
                track.style.transform = `translateX(${currentPosition}px)`;
                // Force reflow to make sure the position reset is applied immediately
                void track.offsetWidth;
                track.style.transition = '';
            }
        }
        
        // Continue animation loop
        animationId = requestAnimationFrame(animateSlider);
    }
    
    // Pause slider when hovering
    track.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    track.addEventListener('mouseleave', () => {
        isPaused = false;
    });
    
    // Touch interaction
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let lastTouchX = 0;
    let isDragging = false;
    let startPosition = 0;
    
    track.addEventListener('touchstart', (e) => {
        isPaused = true;
        isDragging = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        lastTouchX = touchStartX;
        startPosition = currentPosition;
        
        // Disable any transitions during touch
        track.style.transition = 'none';
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Calculate horizontal swipe movement
        const deltaX = touchX - lastTouchX;
        lastTouchX = touchX;
        
        // Update position based on touch movement
        currentPosition += deltaX;
        track.style.transform = `translateX(${currentPosition}px)`;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        isDragging = false;
        
        // Resume animation transition
        track.style.transition = '';
        
        // Resume automatic animation after short delay
        setTimeout(() => {
            isPaused = false;
        }, 1000);
    });
    
    // Handle window resizing
    window.addEventListener('resize', () => {
        // Recalculate dimensions
        cancelAnimationFrame(animationId);
        
        // Wait for resize to finish
        setTimeout(() => {
            initSlider();
            animationId = requestAnimationFrame(animateSlider);
        }, 200);
    });
    
    // Initialize slider when content is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initSlider();
            // Start animation
            animationId = requestAnimationFrame(animateSlider);
        });
    } else {
        initSlider();
        // Start animation
        animationId = requestAnimationFrame(animateSlider);
    }
})();