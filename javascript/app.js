document.addEventListener('DOMContentLoaded', function () {
  // ----- Burger menu -----
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
    });
  }

  // ----- Scroll reveal with IntersectionObserver -----
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // 15% visible
    }
  );

  // Add reveal to project cards, skill cards, education boxes & timeline entries
  const revealTargets = document.querySelectorAll(
    '.portfolio_box, .content_box, .koulutus_box, .timeline .container'
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});
