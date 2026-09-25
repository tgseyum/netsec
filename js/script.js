document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');
  const pageName = document.body.dataset.page;

  const setActiveNav = () => {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const page = href.replace('.html', '').replace('./', '');
      if (pageName === page || (pageName === 'home' && page === 'index')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    if (backToTop) {
      if (window.scrollY > 450) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  };

  setActiveNav();
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  document.querySelectorAll('.needs-validation').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const fields = form.querySelectorAll('input, select, textarea');
      let isValid = true;

      fields.forEach((field) => {
        const errorNode = field.parentElement?.querySelector('.form-error');
        const hasValue = field.value.trim();

        if (field.hasAttribute('required') && !hasValue) {
          isValid = false;
          field.classList.add('is-invalid');
          if (errorNode) errorNode.style.display = 'block';
        } else if (field.type === 'email' && hasValue) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(field.value.trim())) {
            isValid = false;
            field.classList.add('is-invalid');
            if (errorNode) errorNode.style.display = 'block';
          } else {
            field.classList.remove('is-invalid');
            if (errorNode) errorNode.style.display = 'none';
          }
        } else {
          field.classList.remove('is-invalid');
          if (errorNode) errorNode.style.display = 'none';
        }
      });

      const messageBox = form.querySelector('.form-message');
      if (isValid) {
        messageBox.textContent = 'Thank you for your inquiry. This demo form is ready to be connected to a future form-processing service.';
        form.reset();
      } else {
        messageBox.textContent = 'Please complete all required fields before submitting.';
      }
    });
  });
});
