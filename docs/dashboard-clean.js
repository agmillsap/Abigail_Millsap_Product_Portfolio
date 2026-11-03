/* Targeted public-demo anonymization. Preserves the original dashboards. */
(function () {
  'use strict';

  function debrandText(source) {
    return source
      .replace(/Lowe\\['\u2019]s/gi, 'Retailer')
      .replace(/Lowe(?:['\u2019]|&#(?:0?39|x27);|&apos;)s/gi, 'Retailer')
      .replace(/--lowes\b/gi, '--accent')
      .replace(/\bLowes\b/gi, 'Retailer');
  }

  window.portfolioCleanDashboard = function (key, source) {
    if (key !== 'field' && key !== 'market') return source;
    let html = source;
    let css = '';

    if (key === 'field') {
      html = html
        .replace(/<img id="logo"\s*\/?\s*>/i, '<span id="logo" class="portfolio-neutral-logo">PRO</span>')
        .replace(/"logo":"data:image\/png;base64,[A-Za-z0-9+/=]+"/, '"logo":""');
      css = '.logoCrop{overflow:visible!important;align-items:center!important}' +
        '.portfolio-neutral-logo{display:block!important;font:bold 26px/34px Arial,sans-serif!important;' +
        'letter-spacing:.10em;color:#fff!important;white-space:nowrap}';
    } else {
      html = html.replace(
        /<img alt="Lowe['\u2019]s Pro Construction Insights" src="data:image\/png;base64,[A-Za-z0-9+/=]+"\s*\/?\s*>/i,
        '<div class="portfolio-neutral-market-brand"><strong>PRO</strong><span>Construction Insights</span></div>'
      );
      css = '.portfolio-neutral-market-brand{display:flex;flex-direction:column;gap:5px;' +
        'align-self:center;color:#fff;white-space:nowrap}' +
        '.portfolio-neutral-market-brand strong{font:bold 25px/1 Arial,sans-serif;letter-spacing:.07em}' +
        '.portfolio-neutral-market-brand span{font:700 11px/1.2 Arial,sans-serif;color:#d8e9fa}' +
        'html body #app{height:calc(100vh - 40px)!important;min-height:0!important;overflow:hidden!important}' +
        '#app>.sidebar{top:0!important;height:100%!important;min-height:0!important}' +
        '#app>.main{height:100%!important;min-height:0!important;overflow:auto!important;position:relative!important}' +
        '#app>.main>.toolbar{top:0!important;margin-top:0!important;position:sticky!important}';
    }

    html = debrandText(html);
    return html.replace(/<\/body>/i, '<style id="portfolio-enterprise-anonymization">' + css + '</style></body>');
  };
})();
