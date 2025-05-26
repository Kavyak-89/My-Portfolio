// Smooth highlight active nav link on scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main.container section, header.hero');
  const navLinks = document.querySelectorAll('nav a');

  function activateNavLink() {
    let scrollPos = window.scrollY || window.pageYOffset;

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.id || 'summary'; // Fallback id if missing

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', activateNavLink);
  activateNavLink(); // call once on load

  // Scroll to top button (optional)
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑';
  scrollBtn.id = 'scrollTopBtn';
  Object.assign(scrollBtn.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 15px',
    fontSize: '1.5rem',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ff0080',
    color: '#fff',
    cursor: 'pointer',
    display: 'none',
    boxShadow: '0 0 10px #ff0080',
    zIndex: 1000,
  });
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  // Fade in up animation on scroll for elements with 'fadeInUp' class
  const faders = document.querySelectorAll('.fadeInUp');

  function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;

    faders.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;

      if (elTop < triggerBottom) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
      }
    });
  }

  window.addEventListener('scroll', checkFade);
  checkFade(); // initial call
});
