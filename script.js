document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        observer.observe(section);
    });
});

// Barra de progresso de rolagem
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progress-bar');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        backToTopBtn.blur();
    });
} 