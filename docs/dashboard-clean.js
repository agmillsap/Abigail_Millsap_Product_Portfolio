/* Targeted public-demo anonymization. Preserves the original dashboards. */
(function () {
  'use strict';

  // Use the demo's own NAM roster as the source of truth, ensuring that
  // the same private employee always receives the same neutral label.
  function anonymizeNAMNames(source) {
    const match = source.match(/"nam_options"\s*:\s*(\[[^\]]*\])/);
    if (!match) throw new Error('Market demo NAM roster could not be verified.');
    const names = JSON.parse(match[1]);
    if (!Array.isArray(names) || !names.length ||
        names.some(name => typeof name !== 'string' || !name.trim()) ||
        new Set(names).size !== names.length) {
      throw new Error('Market demo NAM roster is invalid.');
    }
    let cleaned = source;
    names.map((name, i) => ({name, label: 'National AM ' + (i + 1)}))
      .sort((a, b) => b.name.length - a.name.length)
      .forEach(({name, label}) => {
        if (!cleaned.includes(name)) throw new Error('NAM name missing during anonymization.');
        cleaned = cleaned.split(name).join(label);
      });
    return cleaned;
  }

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
        .replace(/<img id="logo"\s*\/?\s*>/i, '<span id="logo" aria-hidden="true"></span>')
        .replace(/"logo":"data:image\/png;base64,[A-Za-z0-9+/=]+"/, '"logo":""');
      css = '.logoCrop #logo{display:none!important}';
    } else {
      html = anonymizeNAMNames(html);
      html = html.replace(
        /<img alt="Lowe['\u2019]s Pro Construction Insights" src="data:image\/png;base64,[A-Za-z0-9+/=]+"\s*\/?\s*>/i,
        '<div class="portfolio-neutral-market-brand" aria-hidden="true"></div>'
      );
      css = '.portfolio-neutral-market-brand{display:block!important;width:100%;height:100%;}' +
        'html body #app{height:calc(100vh - 40px)!important;min-height:0!important;overflow:hidden!important}' +
        '#app>.sidebar{top:0!important;height:100%!important;min-height:0!important}' +
        '#app>.main{height:100%!important;min-height:0!important;overflow:auto!important;position:relative!important}' +
        '#app>.main>.toolbar{top:0!important;margin-top:0!important;position:sticky!important}';
    }

    html = debrandText(html);
    return html.replace(/<\/body>/i, '<style id="portfolio-enterprise-anonymization">' + css + '</style></body>');
  };
})();
