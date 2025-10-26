// 2026 YKS Rehberi - JavaScript Functionality

// DOM Elements
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// 2026 YKS TYT Tarihi (Tahmini - Haziran ayının 2. Cumartesi)
const examDate = new Date('2026-06-14T09:00:00'); // Tahmini tarih

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = examDate.getTime() - now;

    if (distance < 0) {
        // Sınav tarihi geçmişse
        daysElement.textContent = '000';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(3, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Countdown timer'ı her saniye güncelle
setInterval(updateCountdown, 1000);
updateCountdown(); // İlk yükleme

// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-active');
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Toggle Functionality
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Puan Hesaplama Simülasyonları
function calculateEA() {
    const resultBox = document.getElementById('eaResult');
    
    // Örnek hesaplama (basitleştirilmiş)
    const tytNetleri = {
        turkce: 30,
        sosyal: 15,
        matematik: 25,
        fen: 10
    };
    
    const aytNetleri = {
        matematik: 30,
        edebiyat: 20,
        tarih1: 8,
        cografya1: 5
    };
    
    const obp = 90;
    
    // Basitleştirilmiş puan hesaplama
    const tytPuan = (tytNetleri.turkce * 1.5) + (tytNetleri.sosyal * 1.2) + 
                   (tytNetleri.matematik * 1.8) + (tytNetleri.fen * 1.3);
    
    const aytPuan = (aytNetleri.matematik * 2.0) + (aytNetleri.edebiyat * 1.8) + 
                   (aytNetleri.tarih1 * 1.5) + (aytNetleri.cografya1 * 1.4);
    
    const obpEkPuan = obp * 0.12;
    const yerlesmePuani = (tytPuan * 0.4) + (aytPuan * 0.6) + obpEkPuan;
    
    resultBox.innerHTML = `
        <h4>Hesaplama Sonucu:</h4>
        <p><strong>TYT Puanı:</strong> ${tytPuan.toFixed(2)}</p>
        <p><strong>AYT Puanı:</strong> ${aytPuan.toFixed(2)}</p>
        <p><strong>OBP Ek Puanı:</strong> ${obpEkPuan.toFixed(2)}</p>
        <p><strong>Yerleştirme Puanı:</strong> ${yerlesmePuani.toFixed(2)}</p>
        <p><em>Not: Bu hesaplama örnek amaçlıdır. Gerçek puan hesaplama daha karmaşıktır.</em></p>
    `;
    resultBox.classList.add('show');
}

function calculateSAY() {
    const resultBox = document.getElementById('sayResult');
    
    // Örnek hesaplama (basitleştirilmiş)
    const tytNetleri = {
        turkce: 25,
        sosyal: 12,
        matematik: 35,
        fen: 15
    };
    
    const aytNetleri = {
        matematik: 35,
        fizik: 10,
        kimya: 10,
        biyoloji: 8
    };
    
    const obp = 85;
    
    // Basitleştirilmiş puan hesaplama
    const tytPuan = (tytNetleri.turkce * 1.5) + (tytNetleri.sosyal * 1.2) + 
                   (tytNetleri.matematik * 1.8) + (tytNetleri.fen * 1.3);
    
    const aytPuan = (aytNetleri.matematik * 2.2) + (aytNetleri.fizik * 2.0) + 
                   (aytNetleri.kimya * 1.9) + (aytNetleri.biyoloji * 1.8);
    
    const obpEkPuan = obp * 0.12;
    const yerlesmePuani = (tytPuan * 0.4) + (aytPuan * 0.6) + obpEkPuan;
    
    resultBox.innerHTML = `
        <h4>Hesaplama Sonucu:</h4>
        <p><strong>TYT Puanı:</strong> ${tytPuan.toFixed(2)}</p>
        <p><strong>AYT Puanı:</strong> ${aytPuan.toFixed(2)}</p>
        <p><strong>OBP Ek Puanı:</strong> ${obpEkPuan.toFixed(2)}</p>
        <p><strong>Yerleştirme Puanı:</strong> ${yerlesmePuani.toFixed(2)}</p>
        <p><em>Not: Bu hesaplama örnek amaçlıdır. Gerçek puan hesaplama daha karmaşıktır.</em></p>
    `;
    resultBox.classList.add('show');
}

// Intersection Observer for Animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section, .exam-card, .strategy-card, .step-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Local Storage for User Preferences
function saveUserPreference(key, value) {
    localStorage.setItem(`yks_${key}`, JSON.stringify(value));
}

function getUserPreference(key) {
    const item = localStorage.getItem(`yks_${key}`);
    return item ? JSON.parse(item) : null;
}

// Theme Toggle (if needed in future)
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    saveUserPreference('theme', newTheme);
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getUserPreference('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
});

// Print Functionality
function printPage() {
    window.print();
}

// Share Functionality
async function sharePage() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: '2026 YKS Kapsamli Rehberi',
                text: '2026 YKS\'ye hazirlanan ogrenciler icin kapsamli rehber',
                url: window.location.href
            });
        } catch (err) {
            console.log('Paylaşım iptal edildi');
        }
    } else {
        // Fallback: Copy to clipboard
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link panoya kopyalandı!');
        } catch (err) {
            console.log('Kopyalama başarısız');
        }
    }
}

// Performance Monitoring
function measurePerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Sayfa yükleme süresi:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
            }, 0);
        });
    }
}

measurePerformance();

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript hatası:', e.error);
});

// Service Worker Registration (for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const nav = document.querySelector('.nav');
        if (nav.classList.contains('mobile-active')) {
            nav.classList.remove('mobile-active');
        }
    }
    
    // Enter key for FAQ items
    if (e.key === 'Enter' && e.target.classList.contains('faq-question')) {
        toggleFAQ(e.target);
    }
});

// Lazy Loading for Images (if any are added later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Utility Functions
const utils = {
    // Format number with Turkish locale
    formatNumber: (num) => {
        return new Intl.NumberFormat('tr-TR').format(num);
    },
    
    // Format date with Turkish locale
    formatDate: (date) => {
        return new Intl.DateTimeFormat('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    },
    
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle: (func, limit) => {
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
};

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils, calculateEA, calculateSAY, toggleFAQ };
}
