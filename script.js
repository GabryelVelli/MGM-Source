(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover: hover) and (pointer: fine)');
  const root = document.documentElement;
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('.theme-toggle');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
  const updateThemeLabel = () => {
    themeButton.setAttribute('aria-label', `Ativar tema ${isDark() ? 'claro' : 'escuro'}`);
    document.querySelector('meta[name="theme-color"]').content = isDark() ? '#090d16' : '#f3f5f9';
  };
  themeButton.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('mgm-theme', root.dataset.theme); } catch { /* Storage is optional. */ }
    updateThemeLabel();
  });
  systemTheme.addEventListener('change', updateThemeLabel);
  updateThemeLabel();
  document.querySelector('#year').textContent = new Date().getFullYear();

  const menu = document.querySelector('.mobile-menu');
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
  document.addEventListener('click', event => { if (!menu.contains(event.target)) menu.open = false; });

  // Progressive enhancement: all categories remain readable without JavaScript.
  const tabs = [...document.querySelectorAll('.product-tab')];
  const panels = [...document.querySelectorAll('[data-panel]')];
  document.querySelector('.product-tabs').setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.id = `tab-${tab.dataset.category}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', `panel-${tab.dataset.category}`);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
  });
  let active = 0;
  function selectCategory(index, animate = true) {
    active = index;
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
      panels[i].getAnimations({ subtree: true }).forEach(animation => animation.cancel());
    });
    if (animate && !reduced.matches) {
      const parts = panels[index].querySelectorAll('.product-info, .product-picture');
      parts.forEach((part, i) => part.animate([
        { opacity: 0, transform: `translateY(${i ? 16 : 8}px)` },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 250, delay: i * 40, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' }));
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectCategory(index));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (active + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (active + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); selectCategory(next, false); tabs[next].focus(); }
    });
  });
  selectCategory(0, false);

  // Entry reveals run once. No content is hidden when scripting is unavailable.
  const reveals = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .08 });
  reveals.forEach(element => {
    if (!reduced.matches) element.classList.add('reveal-pending');
    observer.observe(element);
  });
  document.addEventListener('focusin', event => {
    event.target.closest('[data-reveal]')?.classList.add('is-visible');
  });

  // Product depth gives spatial feedback; CSS transitions retarget current motion.
  const tiltElements = [...document.querySelectorAll('[data-tilt]')];
  tiltElements.forEach(element => {
    let frame = 0;
    let x = 0;
    let y = 0;
    element.style.transition = 'transform 250ms cubic-bezier(.23,1,.32,1)';
    element.addEventListener('pointermove', event => {
      if (reduced.matches || !fine.matches || event.pointerType !== 'mouse') return;
      const bounds = element.getBoundingClientRect();
      x = (event.clientX - bounds.left) / bounds.width - .5;
      y = (event.clientY - bounds.top) / bounds.height - .5;
      if (!frame) frame = requestAnimationFrame(() => {
        element.style.transform = `perspective(1000px) rotateX(${-y * 9}deg) rotateY(${x * 12}deg)`;
        frame = 0;
      });
    });
    const reset = () => { cancelAnimationFrame(frame); frame = 0; element.style.transform = ''; };
    element.addEventListener('pointerleave', reset);
    element.addEventListener('pointercancel', reset);
    reduced.addEventListener('change', reset);
    fine.addEventListener('change', reset);
    window.addEventListener('blur', reset);
  });

  const track = document.querySelector('.review-track');
  const previous = document.querySelector('.review-prev');
  const next = document.querySelector('.review-next');
  function moveReview(direction) {
    const distance = track.querySelector('.review').getBoundingClientRect().width + 22;
    track.scrollBy({ left: distance * direction, behavior: reduced.matches ? 'instant' : 'smooth' });
  }
  const updateReviewControls = () => {
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
  };
  previous.addEventListener('click', () => moveReview(-1));
  next.addEventListener('click', () => moveReview(1));
  track.addEventListener('scroll', updateReviewControls, { passive: true });
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const distance = track.querySelector('.review').getBoundingClientRect().width + 22;
      track.scrollBy({ left: distance * (event.key === 'ArrowRight' ? 1 : -1), behavior: 'instant' });
    }
  });
  new ResizeObserver(updateReviewControls).observe(track);
  updateReviewControls();

  reduced.addEventListener('change', () => {
    if (reduced.matches) {
      reveals.forEach(element => element.classList.add('is-visible'));
      document.getAnimations().forEach(animation => animation.cancel());
    }
  });
})();
