// WebZen Main JavaScript File

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeNavigation();
    initializeSmoothScrolling();
    initializeBackgroundTransitions();
    initializeFAQAccordion();
    initializeContactForm();
    initializeAnimations();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeMobileContactLinks();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Background image transitions based on scroll
function initializeBackgroundTransitions() {
    const sections = document.querySelectorAll('.section-bg');
    
    // Create intersection observer for smooth background transitions
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const bgType = section.dataset.bg;
                
                // Apply background transition with fade effect
                section.style.opacity = '0.7';
                
                setTimeout(() => {
                    section.style.opacity = '1';
                }, 100);
                
                // Add subtle parallax effect for hero section
                if (bgType === 'hero') {
                    handleParallaxEffect(section);
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Parallax effect for hero section
function handleParallaxEffect(section) {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (section.classList.contains('section-bg')) {
            const yPos = -(scrolled * parallaxSpeed);
            section.style.backgroundPosition = `center ${yPos}px`;
        }
    });
}

// FAQ Accordion functionality
function initializeFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', function() {
            const isOpen = question.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherQuestion.querySelector('i');
                
                otherQuestion.classList.remove('active');
                otherAnswer.classList.remove('active');
                otherAnswer.style.display = 'none';
                otherIcon.style.transform = 'rotate(0deg)';
            });
            
            // Toggle current item
            if (!isOpen) {
                question.classList.add('active');
                answer.classList.add('active');
                answer.style.display = 'block';
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!validateForm(name, email, message)) {
                return;
            }
            
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Submit to Formspree
            const submissionData = new FormData(contactForm);
            
            fetch('https://formspree.io/f/xdkzvzno', {
                method: 'POST',
                body: submissionData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    showSuccessMessage();
                    contactForm.reset();
                    console.log('Form submitted successfully to your email!');
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                showErrorMessage();
            })
            .finally(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
    
    function validateForm(name, email, message) {
        const errors = [];
        
        console.log('Validating form:', { name, email, message }); // Debug log
        
        if (!name || name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!email || !isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!message || message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            console.log('Validation errors:', errors); // Debug log
            showValidationErrors(errors);
            return false;
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        console.log('Email validation:', { email, isValid }); // Debug log
        return isValid;
    }
    
    function showValidationErrors(errors) {
        errorMessage.textContent = errors.join('. ');
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 5000);
    }
    
    function showSuccessMessage() {
        successMessage.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }
    
    function showErrorMessage() {
        errorMessage.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 5000);
    }
}

// Animation on scroll
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .loading');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'loaded');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
                
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
                
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Mobile contact link handling
function initializeMobileContactLinks() {
    // Handle mobile compatibility for contact links
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const phoneLink = document.querySelector('a[href^="tel:"]');
    
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // For mobile devices, ensure proper email client handling
            if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // Mobile device detected
                setTimeout(() => {
                    if (document.hasFocus()) {
                        // If still focused, try alternative approach
                        window.open(this.href, '_self');
                    }
                }, 100);
            }
        });
    }
    
    if (phoneLink) {
        phoneLink.addEventListener('click', function(e) {
            // For mobile devices, ensure proper phone dialer handling
            if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // Mobile device detected
                setTimeout(() => {
                    if (document.hasFocus()) {
                        // If still focused, try alternative approach
                        window.open(this.href, '_self');
                    }
                }, 100);
            }
        });
    }
}

// Additional scroll effects
function initializeScrollEffects() {
    // Add scroll-based animations for service cards
    const serviceCards = document.querySelectorAll('.card-hover');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Add progress indicator for page scroll
    createScrollProgressIndicator();
}

// Create scroll progress indicator
function createScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(to right, #2563eb, #9333ea);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Handle keyboard navigation for accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjOTk5Ii8+Cjwvc3ZnPgo=';
        e.target.alt = 'Image failed to load';
    }
}, true);

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll performance with throttling
const optimizedScrollHandler = throttle(function() {
    // Any scroll-based calculations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Initialize additional features when needed
if ('IntersectionObserver' in window) {
    initializeLazyLoading();
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
    // Replace with your analytics service
    console.log(`Event: ${eventName}`, properties);
}

// Track form submissions
document.getElementById('contact-form')?.addEventListener('submit', function() {
    trackEvent('form_submit', {
        form_type: 'contact',
        page: window.location.pathname
    });
});

// Track navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('navigation_click', {
            target: this.getAttribute('href'),
            text: this.textContent
        });
    });
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Handle online/offline status
window.addEventListener('online', function() {
    console.log('Back online');
    // Show success message
});

window.addEventListener('offline', function() {
    console.log('Gone offline');
    // Show offline message
});

// Preload critical resources
function preloadCriticalResources() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadCriticalResources();

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
}

// Console welcome message
console.log(`
🚀 WebZen Website Loaded Successfully!
✨ Built with modern web technologies
🎨 Designed for performance and accessibility
📱 Fully responsive and mobile-friendly
🔧 Need help? Contact: reachout.webzen@gmail.com
`);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeSmoothScrolling,
        initializeBackgroundTransitions,
        initializeFAQAccordion,
        initializeContactForm,
        initializeAnimations,
        initializeMobileMenu,
        initializeScrollEffects
    };
}
