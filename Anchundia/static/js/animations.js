// ================================================
// MODERN CV - ANIMATIONS AND INTERACTIVE EFFECTS
// ================================================

document.addEventListener('DOMContentLoaded', function() {
    initGridParallax();
    initIntersectionObserver();
    initTypeWriter();
    initSmoothScroll();
    initFormAnimations();
});

// ================================================
// 1. GRID PARALLAX EFFECT
// ================================================
function initGridParallax() {
    const grid = document.querySelector('.grid-background');
    if (!grid) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const speed = 0.08;
        grid.style.transform = `rotateX(70deg) scale(2.5) translateY(${scrolled * speed}px)`;
    });
    
    // Mouse movement effect
    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        grid.style.transform = `rotateX(70deg) scale(2.5) rotateY(${x * 0.1}deg) rotateX(${70 + y * 0.1}deg)`;
    });
}

// ================================================
// 2. INTERSECTION OBSERVER - ANIMATION ON SCROLL
// ================================================
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class based on element type
                if (entry.target.tagName === 'SECTION') {
                    entry.target.classList.add('fade-in');
                } else if (entry.target.classList.contains('card')) {
                    entry.target.classList.add('slide-in-left');
                } else {
                    entry.target.classList.add('fade-in');
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    document.querySelectorAll('section, .card').forEach(element => {
        observer.observe(element);
    });
}

// ================================================
// 3. TYPE WRITER EFFECT FOR TITLES
// ================================================
function initTypeWriter() {
    const h1 = document.querySelector('h1');
    if (!h1) return;
    
    const originalText = h1.textContent;
    h1.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            h1.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    typeWriter();
}

// ================================================
// 4. SMOOTH SCROLL BEHAVIOR
// ================================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ================================================
// 5. FORM ANIMATIONS & VALIDATION
// ================================================
function initFormAnimations() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add focus animation
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        // Remove focus animation
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('input-focused');
        });
        
        // Add placeholder animation
        if (this.value) {
            this.classList.add('has-value');
        }
        
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('button, input[type="submit"], .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('btn-hover');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('btn-hover');
        });
    });
}

// ================================================
// 6. SKILL BARS ANIMATION
// ================================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                if (percent) {
                    setTimeout(() => {
                        entry.target.style.width = percent + '%';
                    }, 300);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Initialize skill bars
if (document.querySelectorAll('.skill-progress').length > 0) {
    initSkillBars();
}

// ================================================
// 7. COUNTER ANIMATION FOR NUMBERS
// ================================================
function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-counter'));
        let current = 0;
        
        const increment = target / 30;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 50);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// ================================================
// 8. ADD STAGGER ANIMATION TO LIST ITEMS
// ================================================
function initListItemAnimations() {
    const lists = document.querySelectorAll('ul, ol');
    
    lists.forEach(list => {
        const items = list.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.animation = `slideInLeft 0.5s ease-out ${index * 0.1}s forwards`;
        });
    });
}

initListItemAnimations();

// ================================================
// 9. SECTION TITLE GLOW EFFECT
// ================================================
function initSectionTitleGlow() {
    const titles = document.querySelectorAll('.section-title, h2, h3');
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(126, 211, 33, 0.8)';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

initSectionTitleGlow();

// ================================================
// 10. NOTIFICATION/MESSAGE AUTO-DISMISS
// ================================================
function initMessageDismissal() {
    const messages = document.querySelectorAll('.message');
    
    messages.forEach(message => {
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            message.style.animation = 'fadeOut 0.5s ease-out forwards';
            setTimeout(() => {
                message.remove();
            }, 500);
        }, 5000);
    });
}

initMessageDismissal();

// ================================================
// 11. RESPONSIVE GRID ADJUSTMENT
// ================================================
function initResponsiveGrid() {
    const gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) return;
    
    function adjustGrid() {
        if (window.innerWidth <= 768) {
            gridContainer.style.gridTemplateColumns = '1fr';
        } else if (window.innerWidth <= 1024) {
            gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
            gridContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
        }
    }
    
    adjustGrid();
    window.addEventListener('resize', adjustGrid);
}

initResponsiveGrid();

// ================================================
// 12. LINK HOVER EFFECTS
// ================================================
function initLinkEffects() {
    const links = document.querySelectorAll('a:not([href^="http"])');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 10px rgba(126, 211, 33, 0.7)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

initLinkEffects();

// ================================================
// 13. DARK MODE TOGGLE (Optional)
// ================================================
function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('[data-toggle-dark-mode]');
    if (!darkModeToggle) return;
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'false' : 'true');
    });
    
    // Check saved preference
    if (localStorage.getItem('darkMode') === 'false') {
        document.body.classList.add('light-mode');
    }
}

initDarkModeToggle();

// ================================================
// 14. ANALYTICS - Track scroll depth
// ================================================
let maxScroll = 0;

window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        // Log to analytics if needed
        console.log(`Scroll depth: ${Math.round(maxScroll)}%`);
    }
});

// ================================================
// 15. PRELOAD ANIMATIONS ON PAGE LOAD
// ================================================
window.addEventListener('load', function() {
    // Remove loading state if it exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Trigger animations
    document.body.style.opacity = '1';
});