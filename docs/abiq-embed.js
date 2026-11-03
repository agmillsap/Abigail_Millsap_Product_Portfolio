
/* ABIQ showcase modal: local GitHub Pages HTML, never Streamlit. */
(() => {
  const href = './abiq/';
  let overlay = null;
  let previouslyFocused = null;
  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.classList.remove('abiq-portfolio-lock');
    overlay.setAttribute('aria-hidden', 'true');
    previouslyFocused?.focus?.();
  }
  function open() {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'abiq-portfolio-modal';
      overlay.id = 'abiq-portfolio-demo';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      overlay.setAttribute('aria-label', 'ABIQ sports decision intelligence interactive demo');
      overlay.setAttribute('aria-hidden', 'true');
      const panel = document.createElement('div');
      panel.className = 'abiq-portfolio-window';
      panel.innerHTML = '<div class="abiq-portfolio-bar"><div>ABIQ · Sports Decision Intelligence<small>Interactive static demonstration · Sample scenarios, not live forecasts</small></div><div class="abiq-portfolio-actions"><a href="./abiq/" target="_blank" rel="noopener">Open full screen</a><button type="button" aria-label="Close ABIQ demo">Close ✕</button></div></div><iframe title="ABIQ browser-based interactive showcase" src="./abiq/" loading="eager"></iframe>';
      panel.querySelector('button').addEventListener('click', close);
      overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
      overlay.appendChild(panel);
      document.body.appendChild(overlay);
    }
    previouslyFocused = document.activeElement;
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('abiq-portfolio-lock');
    overlay.querySelector('button').focus();
  }
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href="./abiq/"]');
    if (!link || link.closest('#abiq-portfolio-demo')) return;
    if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    open();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && overlay?.classList.contains('is-open')) close(); });
})();
