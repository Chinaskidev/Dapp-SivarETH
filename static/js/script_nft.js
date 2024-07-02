document.addEventListener('DOMContentLoaded', function () {
    // Efecto de fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});
