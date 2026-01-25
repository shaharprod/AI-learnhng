// Site search form – redirect to search page with query
(function () {
    var form = document.getElementById('site-search');
    if (!form) return;
    var base = (window.location.href.indexOf('/pages/') !== -1) ? '../' : '';
    form.action = base + 'search.html';
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = (form.querySelector('[name=q]') || {}).value;
        if (!q || !String(q).trim()) return false;
        window.location.href = form.action + '?q=' + encodeURIComponent(String(q).trim());
        return false;
    });
})();

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow on scroll
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Animation on scroll (simple fade in)
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

// Apply animation to cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

console.log('AI Learning Website Loaded Successfully! 🤖');

// Quiz Functionality
function initQuiz() {
    const quizForm = document.getElementById('quiz-form');
    if (!quizForm) return;

    const submitBtn = document.getElementById('quiz-submit');
    const resultsDiv = document.getElementById('quiz-results');
    const scoreSpan = document.getElementById('quiz-score');
    const percentSpan = document.getElementById('quiz-percent');
    const messageSpan = document.getElementById('quiz-message');
    const retryBtn = document.getElementById('quiz-retry');

    submitBtn.addEventListener('click', () => {
        const questions = quizForm.querySelectorAll('.quiz-question');
        let score = 0;
        let answered = 0;

        questions.forEach((question, index) => {
            const selected = question.querySelector('input[type="radio"]:checked');
            const options = question.querySelectorAll('.quiz-option');
            const correctAnswer = question.dataset.correct;

            // Reset styles
            options.forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });

            if (selected) {
                answered++;
                const selectedValue = selected.value;
                const selectedLabel = selected.closest('.quiz-option');

                if (selectedValue === correctAnswer) {
                    score++;
                    selectedLabel.classList.add('correct');
                } else {
                    selectedLabel.classList.add('incorrect');
                    // Show correct answer
                    options.forEach(opt => {
                        const input = opt.querySelector('input');
                        if (input.value === correctAnswer) {
                            opt.classList.add('correct');
                        }
                    });
                }
            } else {
                // Mark unanswered - show correct
                options.forEach(opt => {
                    const input = opt.querySelector('input');
                    if (input.value === correctAnswer) {
                        opt.classList.add('correct');
                    }
                });
            }
        });

        // Calculate percentage
        const totalQuestions = questions.length;
        const percent = Math.round((score / totalQuestions) * 100);

        // Display results
        scoreSpan.textContent = score + '/' + totalQuestions;
        percentSpan.textContent = percent + '%';

        // Set message based on score
        let message = '';
        let emoji = '';
        if (percent >= 90) {
            message = 'מצוין! שליטה מרשימה בחומר!';
            emoji = '🏆';
        } else if (percent >= 70) {
            message = 'כל הכבוד! הבנה טובה של הנושא';
            emoji = '👏';
        } else if (percent >= 50) {
            message = 'לא רע! כדאי לחזור על החומר';
            emoji = '📚';
        } else {
            message = 'מומלץ לקרוא שוב את המאמר';
            emoji = '💪';
        }
        messageSpan.textContent = emoji + ' ' + message;

        // Show results
        resultsDiv.style.display = 'block';
        submitBtn.style.display = 'none';

        // Disable all inputs
        quizForm.querySelectorAll('input[type="radio"]').forEach(input => {
            input.disabled = true;
        });

        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    retryBtn.addEventListener('click', () => {
        // Reset quiz
        quizForm.querySelectorAll('input[type="radio"]').forEach(input => {
            input.checked = false;
            input.disabled = false;
        });
        quizForm.querySelectorAll('.quiz-option').forEach(opt => {
            opt.classList.remove('correct', 'incorrect');
        });
        resultsDiv.style.display = 'none';
        submitBtn.style.display = 'block';

        // Scroll to quiz top
        document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth' });
    });
}

// Initialize quiz when DOM is ready
document.addEventListener('DOMContentLoaded', initQuiz);
