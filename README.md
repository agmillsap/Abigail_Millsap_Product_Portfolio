# Abigail Millsap | Product Portfolio

An interactive portfolio presenting three product strategy and decision-intelligence case studies by Abigail Millsap:

1. **Field Sales Portfolio Optimization:** interactive territory and account-portfolio planning demo built with representative/sample data.
2. **Market Opportunity Navigator:** interactive market prioritization and decision-support demo built with representative/sample data.
3. **ABIQ Sports Decision Intelligence:** standalone static HTML/JavaScript showcase with NFL decision dashboards and an interactive SEC / Big Ten survivor-planning prototype.

The two enterprise product demos use **illustrative data**, not confidential company systems. The ABIQ experience is an independent public showcase, not an authenticated production instance. NFL example forecasts are frozen; college scenarios and probabilities are synthetic illustrative inputs. The published site does not depend on Streamlit staying active.

## View the live portfolio

Once GitHub Pages is enabled for the repository, the website will appear at:

**https://agmillsap.github.io/Abigail_Millsap_Product_Portfolio/**

If the repository is renamed to `abigail-millsap-product-portfolio`, its Pages URL should change to:

**https://agmillsap.github.io/abigail-millsap-product-portfolio/**

## Publish with GitHub Pages

Open **Settings → Pages** in this repository. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/docs** and save. GitHub will provide the published Pages address when the deployment finishes.

## Structure

- `docs/index.html`: portfolio loader; includes links to all three demos.
- `docs/parts/`: original interactive portfolio HTML split into fourteen chunks to preserve its original large self-contained demo payloads.
- `docs/abiq-embed.js` and `docs/abiq-embed.css`: portfolio-native ABIQ overlay.
- `docs/abiq/`: standalone ABIQ static showcase with local brand assets under `docs/abiq/assets/`.

## Public/private boundary

No proprietary employer data, authenticated business systems, private ABIQ production code, user accounts, or paid-provider secrets are intended for publication. Historical performance and example scenarios are clearly distinguished.
