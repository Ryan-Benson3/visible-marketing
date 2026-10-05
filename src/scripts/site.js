(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero spotlight: light follows the cursor ---------- */
  const hero = document.querySelector('.hero');
  if (hero && !reduced) {
    let raf = null;
    hero.addEventListener('pointermove', (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
        raf = null;
      });
    }, { passive: true });
  }

  /* ---------- Invisible → Visible demo toggle ---------- */
  const sw = document.querySelector('[data-demo-switch]');
  const card = document.querySelector('[data-demo-card]');
  if (sw && card) {
    card.classList.add('state-invisible');
    sw.addEventListener('click', () => {
      const on = sw.classList.toggle('on');
      card.classList.toggle('state-visible', on);
      card.classList.toggle('state-invisible', !on);
      sw.querySelector('.lab').textContent = on ? 'Visible' : 'Invisible';
      sw.setAttribute('aria-pressed', String(on));
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }),
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
    // Safety net: if anything is still hidden after 2.5s, show it
    setTimeout(() => revealEls.forEach((el) => el.classList.add('in')), 2500);
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }
})();
