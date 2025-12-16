// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Visitor counter
    const visitorCount = document.getElementById('visitor-count');
    const incrementBtn = document.getElementById('increment-btn');
    
    // Load from localStorage
    let count = localStorage.getItem('visitorCount') || 0;
    visitorCount.textContent = count;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        visitorCount.textContent = count;
        localStorage.setItem('visitorCount', count);
        
        // Add visual feedback
        visitorCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            visitorCount.style.transform = 'scale(1)';
        }, 300);
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // CTA button click
    document.querySelector('.cta-button').addEventListener('click', function() {
        document.querySelector('#features').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.focus();
        }
    });

    // Initialize with console log
    console.log('Website loaded successfully!');
    console.log('Features:');
    console.log('- Mobile responsive navigation');
    console.log('- Smooth scrolling');
    console.log('- Visitor counter with localStorage');
    console.log('- Contact form validation');
    console.log('- Back to top button');
    console.log('- Accessibility features included');
});