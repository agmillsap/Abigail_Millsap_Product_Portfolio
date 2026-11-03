/* Open the static ABIQ showcase in the same full-page dashboard shell used
   by the Field Sales and Market Opportunity demos. No modal and no Streamlit. */
(() => {
  const url = './abiq/';
  const title = 'ABIQ | Sports Decision Intelligence';

  function openABIQ() {
    const shell = document.getElementById('demoShell');
    const frame = document.getElementById('demoFrame');
    const heading = document.getElementById('demoTitle');

    // If the portfolio shell ever changes, the standalone showcase still works.
    if (!shell || !frame || !heading) {
      window.location.assign(url);
      return;
    }

    // Reuse the original portfolio's active-demo state so its existing Back
    // button and Escape-key handling continue to work without duplication.
    activeDemo = 'abiq';
    heading.textContent = title;
    shell.classList.add('open');
    document.body.classList.add('demo-open');

    // srcdoc overrides src in an iframe, including when it is empty.
    // Clearing it is necessary after a different demo has been closed.
    frame.removeAttribute('srcdoc');
    frame.src = url;
    history.replaceState(null, '', '#abiq-demo');
  }

  document.addEventListener('click', event => {
    const link = event.target.closest?.('a[href="./abiq/"]');
    if (!link) return;
    if (event.defaultPrevented || event.ctrlKey || event.metaKey ||
        event.altKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    openABIQ();
  });

  // The portfolio's "Open demo in new window" control produces a standalone
  // page for ABIQ, but retains its existing behavior for the other demos.
  document.getElementById('demoNew')?.addEventListener('click', event => {
    if (activeDemo !== 'abiq') return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.open(url, '_blank', 'noopener');
  }, true);

  // Support direct links, like #field-demo and #market-demo.
  if (location.hash === '#abiq-demo') openABIQ();
})();
