(function() {
  const init = () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
      });
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    const featureCards = document.querySelectorAll('.group');
    featureCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    });

    const stats = document.querySelectorAll('.font-heading.text-4xl');
    stats.forEach(stat => {
      const finalText = stat.textContent;
      stat.style.opacity = '0';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            stat.style.opacity = '1';
            stat.style.transition = 'opacity 0.5s ease';
            observer.unobserve(stat);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(stat);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();