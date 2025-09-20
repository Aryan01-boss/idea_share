(function() {
    const projectsElement = document.getElementById('our-projects');
    
    projectsElement.innerHTML = `
        <div class="projects-container">
            <div class="projects-header">
                <h2 class="projects-title">Our Projects</h2>
                <p class="projects-subtitle">Explore our portfolio of innovative solutions and creative work</p>
            </div>
            
            <div class="projects-timeline">
                <!-- Project 1 -->
                <div class="project-item">
                    <div class="project-year">2024</div>
                    <div class="project-card">
                        <div class="project-content">
                            <span class="project-category">Web Development</span>
                            <h3 class="project-name">E-Commerce Redesign</h3>
                            <p class="project-description">Complete overhaul of an e-commerce platform with focus on user experience and conversion optimization.</p>
                            <div class="project-stats">
                                <div class="stat">
                                    <span class="stat-value">45%</span>
                                    <span class="stat-label">Increased Conversion</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">2.5x</span>
                                    <span class="stat-label">Mobile Traffic</span>
                                </div>
                            </div>
                            <a href="#" class="project-link">View Case Study</a>
                        </div>
                        <div class="project-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexbcuTMhhQC6wK7Tje7nO14A_hHLcx50LrQ&s" alt="E-Commerce Redesign">
                        </div>
                    </div>
                </div>
                
                <!-- Project 2 -->
                <div class="project-item right">
                    <div class="project-year">2023</div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexbcuTMhhQC6wK7Tje7nO14A_hHLcx50LrQ&s" alt="Mobile App Development">
                        </div>
                        <div class="project-content">
                            <span class="project-category">Mobile Development</span>
                            <h3 class="project-name">Health & Fitness App</h3>
                            <p class="project-description">A cross-platform mobile application for tracking fitness goals, nutrition, and personal wellness metrics.</p>
                            <div class="project-stats">
                                <div class="stat">
                                    <span class="stat-value">100K+</span>
                                    <span class="stat-label">Downloads</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">4.8</span>
                                    <span class="stat-label">App Store Rating</span>
                                </div>
                            </div>
                            <a href="#" class="project-link">View Case Study</a>
                        </div>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="project-item">
                    <div class="project-year">2023</div>
                    <div class="project-card">
                        <div class="project-content">
                            <span class="project-category">Branding</span>
                            <h3 class="project-name">Corporate Rebrand</h3>
                            <p class="project-description">Complete brand identity redesign including logo, color palette, typography, and brand guidelines for a tech company.</p>
                            <div class="project-stats">
                                <div class="stat">
                                    <span class="stat-value">35%</span>
                                    <span class="stat-label">Brand Recognition</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">12</span>
                                    <span class="stat-label">Design Awards</span>
                                </div>
                            </div>
                            <a href="#" class="project-link">View Case Study</a>
                        </div>
                        <div class="project-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexbcuTMhhQC6wK7Tje7nO14A_hHLcx50LrQ&s" alt="Corporate Rebrand">
                        </div>
                    </div>
                </div>
                
                <!-- Project 4 -->
                <div class="project-item right">
                    <div class="project-year">2022</div>
                    <div class="project-card">
                        <div class="project-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexbcuTMhhQC6wK7Tje7nO14A_hHLcx50LrQ&s" alt="IoT Platform">
                        </div>
                        <div class="project-content">
                            <span class="project-category">IoT Development</span>
                            <h3 class="project-name">Smart City Platform</h3>
                            <p class="project-description">Development of an IoT platform for smart city infrastructure management, including sensors, data analytics, and visualization.</p>
                            <div class="project-stats">
                                <div class="stat">
                                    <span class="stat-value">30%</span>
                                    <span class="stat-label">Reduced Energy Use</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-value">15M</span>
                                    <span class="stat-label">Data Points Daily</span>
                                </div>
                            </div>
                            <a href="#" class="project-link">View Case Study</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="projects-footer">
                <a href="#" class="view-all-projects">Explore More Projects</a>
            </div>
        </div>
    `;
})();


