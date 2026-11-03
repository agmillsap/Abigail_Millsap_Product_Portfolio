
const FANTASY_METRICS = {standard_mae_reduction:44.8580,half_ppr_mae_reduction:45.4352,ppr_mae_reduction:45.7589};
const PAYLOAD_LOGO_SLUGS = {ARI:"ari",CIN:"cin",CLE:"cle",DET:"det",JAX:"jax",LAC:"lac",NO:"no",PHI:"phi",TB:"tb",WAS:"wsh"};
const _asset_data_uri = path => "./" + path;
const _team_logo = team => "https://a.espncdn.com/i/teamlogos/nfl/500/" + (PAYLOAD_LOGO_SLUGS[team] || team.toLowerCase()) + ".png";
const _display_probability = n => (Math.round((n*100+Number.EPSILON)*10)/10).toFixed(1)+"%";
const _game = (left,lp,right,rp,time) => ({left:{team:left,logo:_team_logo(left),probability:_display_probability(lp)},right:{team:right,logo:_team_logo(right),probability:_display_probability(rp)},date:"SUN",time});
const _recommendation = (team,opponent,probability,confidence) => ({team,opponent,logo:_team_logo(team),probability:_display_probability(probability),confidence});
const _rank = (label,v) => ({label,value:v*100,display:_display_probability(v)});
const _slate_forecast = (favorite,underdog,probability,close_game_probability,kickoff) => ({favorite,underdog,probability:probability*100,display:_display_probability(probability),close_game_probability:close_game_probability*100,close_game_display:_display_probability(close_game_probability),kickoff});
const data = {
        "display_name": "Abigail Millsap",
        "initials": "AM",
        "current_week": 1,
        "weeks": [{"week": 1, "label": "2026 · Week 1 · Sep 9–14"}],
        "logo_data_uri": _asset_data_uri("assets/brand/abiq_wordmark.webp"),
        "iq_data_uri": _asset_data_uri("assets/brand/abiq_iq_hero.webp"),
        "base_texture_data_uri": _asset_data_uri("assets/textures/abiq_texture_base.webp"),
        "accent_texture_data_uri": _asset_data_uri("assets/textures/abiq_texture_accent.webp"),
        "hero_description": "Explore NFL forecast examples and interactive college-football survivor " + "scenarios in one weekly decision view. NFL Week 1 inputs are frozen, " + "while all CFB matchups and probabilities are illustrative rather than live.",
        "kpis": [
            {"icon": "trend", "title": "TOP WIN PROBABILITY", "value": "81.1%", "subtext": "Highest current signal"},
            {"icon": "shield", "title": "CONFIDENCE LEVEL", "value": "High", "subtext": "Strongest weekly tier"},
            {"icon": "check", "title": "GAMES FORECAST", "value": "16", "subtext": "Full weekly slate"},
            {"icon": "target", "title": "REPLAY ACCURACY", "value": "66.05%", "subtext": "2025 point-in-time replay"},
            {"icon": "bars", "title": "PROBABILITY QUALITY", "value": "0.2144", "subtext": "Brier score · 0 perfect / 1 maximum inaccuracy"},
        ],
        "games": [
            _game("ARI", 0.1812, "LAC", 0.8105, "4:25 PM ET"),
            _game("CLE", 0.2318, "JAX", 0.7584, "1:00 PM ET"),
            _game("NO", 0.2711, "DET", 0.7174, "1:00 PM ET"),
            _game("WAS", 0.3386, "PHI", 0.6499, "4:25 PM ET"),
        ],
        "recommendations": [
            _recommendation("LAC", "ARI", 0.8105, "High"),
            _recommendation("JAX", "CLE", 0.7584, "High"),
            _recommendation("DET", "NO", 0.7174, "High"),
            _recommendation("PHI", "WAS", 0.6499, "Medium"),
        ],
        "weekly_rankings": [
            _rank("LAC · ARI", 0.8105),
            _rank("JAX · CLE", 0.7584),
            _rank("DET · NO", 0.7174),
            _rank("PHI · WAS", 0.6499),
            _rank("CIN · TB", 0.6377),
        ],
        "forecast_slate": [
            _slate_forecast("LAC", "ARI", 0.8105062817258883, 0.5291666666666667, "Sep 13 · 4:25 PM"),
            _slate_forecast("JAX", "CLE", 0.7583659013444582, 0.7044047619047620, "Sep 13 · 1:00 PM"),
            _slate_forecast("DET", "NO", 0.7173501086956521, 0.8975000000000000, "Sep 13 · 1:00 PM"),
            _slate_forecast("PHI", "WAS", 0.6499492481688928, 0.8829761904761906, "Sep 13 · 4:25 PM"),
            _slate_forecast("CIN", "TB", 0.6376855125218404, 0.8250000000000000, "Sep 13 · 1:00 PM"),
            _slate_forecast("LV", "MIA", 0.6309443508139196, 0.6508333333333334, "Sep 13 · 4:25 PM"),
            _slate_forecast("SEA", "NE", 0.6249795348837209, 0.6608333333333334, "Sep 9 · 8:20 PM"),
            _slate_forecast("LAR", "SF", 0.6243454398382204, 0.7725000000000000, "Sep 10 · 8:35 PM"),
            _slate_forecast("BAL", "IND", 0.6093015410958904, 0.8975000000000000, "Sep 13 · 1:00 PM"),
            _slate_forecast("PIT", "ATL", 0.6090102739726028, 0.9500000000000000, "Sep 13 · 1:00 PM"),
            _slate_forecast("KC", "DEN", 0.5759675797219950, 0.9500000000000000, "Sep 14 · 8:15 PM"),
            _slate_forecast("TEN", "NYJ", 0.5670167255659856, 0.5905952380952381, "Sep 13 · 1:00 PM"),
            _slate_forecast("DAL", "NYG", 0.5656664605190503, 0.8528571428571428, "Sep 13 · 8:20 PM"),
            _slate_forecast("CHI", "CAR", 0.5651663169519602, 0.9500000000000000, "Sep 13 · 1:00 PM"),
            _slate_forecast("BUF", "HOU", 0.5154683850931677, 0.9465476190476190, "Sep 13 · 1:00 PM"),
            _slate_forecast("MIN", "GB", 0.5117435188090689, 0.8182142857142857, "Sep 13 · 4:25 PM"),
        ],
        "performance_metrics": [
            {"label": "NFL REPLAY", "value": "272 games", "detail": "18-week expanding 2025 regular-season replay"},
            {"label": "WINNER ACCURACY", "value": "66.05%", "detail": "179 of 271 non-tie winners"},
            {"label": "PROBABILITY QUALITY", "value": "0.2144", "detail": "Brier score measures how accurate the model's predicted probabilities are. It ranges from 0 to 1, where 0 is perfect and 1 represents maximum inaccuracy. Confidently wrong forecasts are penalized more severely than cautious misses."},
            {"label": "TEMPORAL INTEGRITY", "value": "0 violations", "detail": "37 prediction-time football features"},
        ],
        "confidence_reliability": [
            {"threshold": "55%+", "games": 213, "predicted": 68.16, "observed": 69.48},
            {"threshold": "60%+", "games": 172, "predicted": 70.79, "observed": 71.51},
            {"threshold": "65%+", "games": 130, "predicted": 73.42, "observed": 74.62},
            {"threshold": "70%+", "games": 82, "predicted": 76.91, "observed": 78.05},
        ],
        "fantasy_holdout": [
            {"label": "Standard", "value": FANTASY_METRICS["standard_mae_reduction"], "display": "−44.86%"},
            {"label": "Half-PPR", "value": FANTASY_METRICS["half_ppr_mae_reduction"], "display": "−45.44%"},
            {"label": "PPR", "value": FANTASY_METRICS["ppr_mae_reduction"], "display": "−45.76%"},
        ],
        "platform_pipeline": [
            {"verb": "OBSERVE", "title": "Data", "copy": "Open and governed football sources normalized into reproducible inputs."},
            {"verb": "TRANSFORM", "title": "Features", "copy": "Prediction-time transforms with explicit temporal cutoffs and provenance."},
            {"verb": "FORECAST", "title": "Models", "copy": "Frozen champion and challenger evaluation with probabilistic metrics."},
            {"verb": "ASSESS", "title": "Risk", "copy": "Win probability, uncertainty and upset exposure translated into comparable signals."},
            {"verb": "EXPLAIN", "title": "Product", "copy": "Fan-first interfaces that surface the decision and preserve analytical depth."},
        ],
    };

const ICONS = {
  home: `<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"></path><path d="M5.5 10v10h13V10"></path><path d="M9.5 20v-6h5v6"></path></svg>`,
  forecast: `<svg viewBox="0 0 24 24"><path d="M3 18l5-6 4 3 6-9"></path><path d="M15 6h3v3"></path><path d="M4 21h16"></path></svg>`,
  chart: `<svg viewBox="0 0 24 24"><path d="M5 20V12h3v8M11 20V7h3v13M17 20V3h3v17"></path></svg>`
};

const NAV_ITEMS = [
  ["Dashboard", "home"],
  ["Forecasts", "forecast"],
  ["Performance", "chart"]
];

const TEAM_LOGO_SLUGS = {
  ARI: "ari", CIN: "cin", CLE: "cle", DET: "det", JAX: "jax",
  LAC: "lac", NO: "no", PHI: "phi", TB: "tb", WAS: "wsh"
};

const FORECAST_READS = {
  LAC: "Clear top-line favorite in the static weekly view.",
  JAX: "Strong favorite signal with less uncertainty than the middle tier.",
  DET: "Detroit leads while a meaningful underdog path remains visible.",
  PHI: "Tighter forecast with more upset pressure than the leading favorites.",
  CIN: "Closest featured favorite and the slate's strongest upset-watch candidate."
};

const UPSET_READS = {
  TB: "The narrowest featured favorite keeps Tampa live in the representative weekly slate.",
  WAS: "A relatively tight forecast makes Washington worth monitoring behind the headline pick.",
  NO: "Detroit remains favored, but the gap is small enough to keep New Orleans on the watch list."
};

const KPI_ICONS = {
  trend: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"></circle><path d="M9 27l8-11 6 7 8-12"></path></svg>`,
  shield: `<svg viewBox="0 0 40 40"><path d="M20 4l14 5v9c0 9-5 14-14 18C11 32 6 27 6 18V9l14-5z"></path></svg>`,
  check: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="17"></circle><path d="M11 20l6 6 13-14"></path></svg>`,
  target: `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16"></circle><circle cx="20" cy="20" r="10"></circle><circle cx="20" cy="20" r="3"></circle></svg>`,
  bars: `<svg viewBox="0 0 40 40"><rect x="6" y="24" width="6" height="11"></rect><rect x="17" y="16" width="6" height="19"></rect><rect x="28" y="7" width="6" height="28"></rect></svg>`
};

function hideStreamlitChrome() {
  const saved = [];
  const set = (el, prop, value) => {
    if (!el) return;
    saved.push([el, prop, el.style[prop]]);
    el.style[prop] = value;
  };
  set(document.querySelector('[data-testid="stSidebar"]'), "display", "none");
  set(document.querySelector('[data-testid="stHeader"]'), "display", "none");
  set(document.querySelector('[data-testid="stToolbar"]'), "display", "none");
  set(document.querySelector('[data-testid="stStatusWidget"]'), "display", "none");
  const block = document.querySelector('[data-testid="stMainBlockContainer"]') || document.querySelector('.block-container');
  set(block, "maxWidth", "none");
  set(block, "width", "100%");
  set(block, "padding", "0");
  set(block, "margin", "0");
  const main = document.querySelector('[data-testid="stMain"]');
  set(main, "background", "#111313");
  return () => saved.reverse().forEach(([el, prop, value]) => { el.style[prop] = value; });
}

function setPage(parentElement, pageName) {
  parentElement.querySelectorAll('.abiq-page').forEach((page) => {
    page.classList.toggle('active', page.dataset.page === pageName);
  });
  parentElement.querySelectorAll('.abiq-nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.page === pageName);
  });
  const toggle = parentElement.querySelector('#abiq-mobile-nav-toggle');
  if (toggle) toggle.checked = false;
  parentElement.querySelector('.abiq-main')?.scrollIntoView({behavior: 'instant', block: 'start'});
}

function renderNav(parentElement) {
  const nav = parentElement.querySelector('#abiq-nav');
  nav.replaceChildren();
  for (const [label, icon] of NAV_ITEMS) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.page = label;
    button.className = 'abiq-nav-item' + (label === 'Dashboard' ? ' active' : '');
    const iconWrap = document.createElement('span');
    iconWrap.className = 'abiq-nav-icon';
    iconWrap.innerHTML = ICONS[icon];
    const text = document.createElement('span');
    text.textContent = label;
    button.append(iconWrap, text);
    button.onclick = () => setPage(parentElement, label);
    nav.appendChild(button);
  }
  parentElement.querySelectorAll('[data-page-target]').forEach((button) => {
    button.onclick = () => setPage(parentElement, button.dataset.pageTarget);
  });
  const preview = parentElement.querySelector('#abiq-preview-button');
  if (preview) preview.onclick = () => setPage(parentElement, 'Forecasts');
}

function renderWeeks(parentElement, data) {
  const select = parentElement.querySelector('#abiq-week-select');
  select.replaceChildren();
  for (const item of data.weeks ?? []) {
    const option = document.createElement('option');
    option.value = String(item.week);
    option.textContent = item.label;
    if (Number(item.week) === Number(data.current_week)) option.selected = true;
    select.appendChild(option);
  }
}

function renderKpis(parentElement, data) {
  const container = parentElement.querySelector('#abiq-kpis');
  container.replaceChildren();
  for (const item of data.kpis ?? []) {
    const card = document.createElement('article');
    card.className = 'abiq-kpi abiq-surface';
    const icon = document.createElement('div'); icon.className = 'abiq-kpi-icon'; icon.innerHTML = KPI_ICONS[item.icon] ?? '';
    const title = document.createElement('div'); title.className = 'abiq-kpi-title'; title.textContent = item.title;
    const value = document.createElement('div'); value.className = 'abiq-kpi-value'; value.textContent = item.value;
    const sub = document.createElement('div'); sub.className = 'abiq-kpi-sub'; sub.textContent = item.subtext;
    card.append(icon, title, value, sub); container.appendChild(card);
  }
}

function renderGames(parentElement, data) {
  const container = parentElement.querySelector('#abiq-games');
  container.replaceChildren();
  for (const item of data.games ?? []) {
    const row = document.createElement('div'); row.className = 'abiq-game-row';
    const left = document.createElement('div'); left.className = 'abiq-team-cell';
    const leftLogo = document.createElement('img'); leftLogo.src = item.left.logo; leftLogo.alt = '';
    const leftCopy = document.createElement('div');
    const leftCode = document.createElement('div'); leftCode.className = 'abiq-team-code'; leftCode.textContent = item.left.team;
    const leftProb = document.createElement('div'); leftProb.className = 'abiq-team-prob'; leftProb.textContent = item.left.probability;
    leftCopy.append(leftCode, leftProb); left.append(leftLogo, leftCopy);
    const kickoff = document.createElement('div'); kickoff.className = 'abiq-kickoff'; kickoff.innerHTML = `${item.date}<br>${item.time}`;
    const right = document.createElement('div'); right.className = 'abiq-team-cell right';
    const rightCopy = document.createElement('div'); rightCopy.style.textAlign = 'right';
    const rightCode = document.createElement('div'); rightCode.className = 'abiq-team-code'; rightCode.textContent = item.right.team;
    const rightProb = document.createElement('div'); rightProb.className = 'abiq-team-prob'; rightProb.textContent = item.right.probability;
    rightCopy.append(rightCode, rightProb);
    const rightLogo = document.createElement('img'); rightLogo.src = item.right.logo; rightLogo.alt = '';
    right.append(rightCopy, rightLogo);
    const chevron = document.createElement('span'); chevron.className = 'abiq-row-chevron'; chevron.textContent = '›';
    row.append(left, kickoff, right, chevron); container.appendChild(row);
  }
}

function renderRecommendations(parentElement, data) {
  const container = parentElement.querySelector('#abiq-recommendations');
  container.replaceChildren();
  for (const item of data.recommendations ?? []) {
    const row = document.createElement('div'); row.className = 'abiq-rec-row';
    const check = document.createElement('div'); check.className = 'abiq-rec-check'; check.textContent = '✓';
    const team = document.createElement('div'); team.className = 'abiq-rec-team';
    const logo = document.createElement('img'); logo.src = item.logo; logo.alt = '';
    const teamCopy = document.createElement('div');
    const name = document.createElement('div'); name.className = 'abiq-rec-name'; name.textContent = item.team;
    const sub = document.createElement('div'); sub.className = 'abiq-rec-sub'; sub.textContent = `vs ${item.opponent}`;
    teamCopy.append(name, sub); team.append(logo, teamCopy);
    const probability = document.createElement('div'); probability.className = 'abiq-rec-probability'; probability.textContent = item.probability;
    const probabilitySub = document.createElement('span'); probabilitySub.textContent = 'Win Probability'; probability.appendChild(probabilitySub);
    const confidence = document.createElement('div'); confidence.className = 'abiq-confidence'; confidence.textContent = item.confidence;
    const confidenceSub = document.createElement('span'); confidenceSub.textContent = 'Confidence'; confidence.appendChild(confidenceSub);
    row.append(check, team, probability, confidence); container.appendChild(row);
  }
}

function renderBars(container, rows) {
  container.replaceChildren();
  for (const item of rows ?? []) {
    const row = document.createElement('div'); row.className = 'abiq-bar-row';
    const label = document.createElement('span'); label.textContent = item.label;
    const track = document.createElement('div'); track.className = 'abiq-bar-track';
    const fill = document.createElement('div'); fill.className = 'abiq-bar-fill'; fill.style.width = `${item.value}%`; track.appendChild(fill);
    const value = document.createElement('strong'); value.textContent = item.display;
    row.append(label, track, value); container.appendChild(row);
  }
}

function teamLogo(team) {
  const slug = TEAM_LOGO_SLUGS[team] ?? team.toLowerCase();
  return `https://a.espncdn.com/i/teamlogos/nfl/500/${slug}.png`;
}

function forecastFromRanking(item) {
  const [favorite, underdog] = String(item.label ?? '').split('·').map((part) => part.trim());
  const probability = Number(item.value ?? 0);
  const upsetPressure = Math.max(0, Math.min(100, Math.round(200 - 2 * probability)));
  return {
    favorite,
    underdog,
    probability,
    display: item.display ?? `${probability.toFixed(1)}%`,
    confidence: probability >= 70 ? 'High' : 'Medium',
    upsetPressure,
    read: FORECAST_READS[favorite] ?? 'Representative forecast signal for the static weekly slate.'
  };
}

function renderForecastBoard(parentElement, data) {
  const board = parentElement.querySelector('#abiq-forecast-board');
  board.replaceChildren();
  (data.weekly_rankings ?? []).forEach((item, index) => {
    const forecast = forecastFromRanking(item);
    const row = document.createElement('div'); row.className = 'abiq-forecast-row';
    const rank = document.createElement('div'); rank.className = 'abiq-forecast-rank'; rank.textContent = String(index + 1).padStart(2, '0');

    const matchup = document.createElement('div'); matchup.className = 'abiq-forecast-matchup';
    const logos = document.createElement('div'); logos.className = 'abiq-logo-pair';
    const favoriteLogo = document.createElement('img'); favoriteLogo.src = teamLogo(forecast.favorite); favoriteLogo.alt = `${forecast.favorite} logo`;
    const underdogLogo = document.createElement('img'); underdogLogo.src = teamLogo(forecast.underdog); underdogLogo.alt = `${forecast.underdog} logo`;
    logos.append(favoriteLogo, underdogLogo);
    const matchupCopy = document.createElement('div');
    const favorite = document.createElement('strong'); favorite.textContent = forecast.favorite;
    const opponent = document.createElement('span'); opponent.textContent = `over ${forecast.underdog}`;
    matchupCopy.append(favorite, opponent); matchup.append(logos, matchupCopy);

    const signal = document.createElement('div'); signal.className = 'abiq-forecast-signal';
    const signalTop = document.createElement('div'); signalTop.className = 'abiq-forecast-signal-top';
    const probability = document.createElement('strong'); probability.textContent = forecast.display;
    const probabilityLabel = document.createElement('span'); probabilityLabel.textContent = 'win forecast';
    signalTop.append(probability, probabilityLabel);
    const track = document.createElement('div'); track.className = 'abiq-forecast-track';
    const fill = document.createElement('div'); fill.className = 'abiq-forecast-fill'; fill.style.width = `${forecast.probability}%`; track.appendChild(fill);
    signal.append(signalTop, track);

    const confidence = document.createElement('div');
    confidence.className = `abiq-forecast-confidence ${forecast.confidence.toLowerCase()}`;
    confidence.textContent = forecast.confidence;

    const read = document.createElement('div'); read.className = 'abiq-forecast-read'; read.textContent = forecast.read;
    row.append(rank, matchup, signal, confidence, read); board.appendChild(row);
  });
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, String(value)));
  return element;
}

function renderUpsetMatrix(parentElement, data) {
  const container = parentElement.querySelector('#abiq-upset-matrix');
  container.replaceChildren();
  const forecasts = (data.weekly_rankings ?? []).map(forecastFromRanking);
  const width = 620;
  const height = 330;
  const pad = {left: 58, right: 22, top: 30, bottom: 52};
  const xMin = 60;
  const xMax = 85;
  const yMin = 30;
  const yMax = 80;
  const x = (value) => pad.left + ((value - xMin) / (xMax - xMin)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - ((value - yMin) / (yMax - yMin)) * (height - pad.top - pad.bottom);

  const svg = svgElement('svg', {viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': 'Upset risk matrix comparing favorite win probability and relative upset pressure'});
  svg.classList.add('abiq-upset-svg');

  const zone = svgElement('rect', {x: x(60), y: y(80), width: x(68) - x(60), height: y(60) - y(80), rx: 10});
  zone.classList.add('abiq-upset-zone'); svg.appendChild(zone);
  const zoneLabel = svgElement('text', {x: x(60) + 12, y: y(77)}); zoneLabel.classList.add('abiq-upset-zone-label'); zoneLabel.textContent = 'UPSET ALERT ZONE'; svg.appendChild(zoneLabel);

  [40, 50, 60, 70, 80].forEach((tick) => {
    const line = svgElement('line', {x1: pad.left, x2: width - pad.right, y1: y(tick), y2: y(tick)}); line.classList.add('abiq-chart-grid'); svg.appendChild(line);
    const label = svgElement('text', {x: pad.left - 12, y: y(tick) + 4, 'text-anchor': 'end'}); label.classList.add('abiq-chart-tick'); label.textContent = String(tick); svg.appendChild(label);
  });
  [60, 65, 70, 75, 80, 85].forEach((tick) => {
    const line = svgElement('line', {x1: x(tick), x2: x(tick), y1: pad.top, y2: height - pad.bottom}); line.classList.add('abiq-chart-grid'); svg.appendChild(line);
    const label = svgElement('text', {x: x(tick), y: height - 28, 'text-anchor': 'middle'}); label.classList.add('abiq-chart-tick'); label.textContent = `${tick}%`; svg.appendChild(label);
  });

  const xLabel = svgElement('text', {x: (pad.left + width - pad.right) / 2, y: height - 6, 'text-anchor': 'middle'}); xLabel.classList.add('abiq-chart-axis-label'); xLabel.textContent = 'Favorite win probability →'; svg.appendChild(xLabel);
  const yLabel = svgElement('text', {x: 15, y: height / 2, transform: `rotate(-90 15 ${height / 2})`, 'text-anchor': 'middle'}); yLabel.classList.add('abiq-chart-axis-label'); yLabel.textContent = 'Upset pressure →'; svg.appendChild(yLabel);

  const offsets = [
    {dx: 10, dy: -11}, {dx: 10, dy: 18}, {dx: 10, dy: -10}, {dx: -10, dy: -12, anchor: 'end'}, {dx: -10, dy: 18, anchor: 'end'}
  ];
  forecasts.forEach((forecast, index) => {
    const group = svgElement('g');
    const tier = forecast.upsetPressure >= 72 ? 'high' : forecast.upsetPressure >= 55 ? 'medium' : 'low';
    const circle = svgElement('circle', {cx: x(forecast.probability), cy: y(forecast.upsetPressure), r: 7}); circle.classList.add('abiq-upset-dot', tier);
    const title = svgElement('title'); title.textContent = `${forecast.underdog} upset watch vs ${forecast.favorite}: favorite ${forecast.display}, pressure ${forecast.upsetPressure}`; circle.appendChild(title);
    group.appendChild(circle);
    const offset = offsets[index] ?? {dx: 9, dy: -9};
    const label = svgElement('text', {x: x(forecast.probability) + offset.dx, y: y(forecast.upsetPressure) + offset.dy, 'text-anchor': offset.anchor ?? 'start'});
    label.classList.add('abiq-upset-label'); label.textContent = `${forecast.favorite}–${forecast.underdog}`; group.appendChild(label);
    svg.appendChild(group);
  });
  container.appendChild(svg);
}

function renderUpsetAlerts(parentElement, data) {
  const container = parentElement.querySelector('#abiq-upset-alerts');
  container.replaceChildren();
  const forecasts = (data.weekly_rankings ?? []).map(forecastFromRanking).sort((a, b) => b.upsetPressure - a.upsetPressure).slice(0, 3);
  forecasts.forEach((forecast) => {
    const tier = forecast.upsetPressure >= 72 ? 'High watch' : forecast.upsetPressure >= 62 ? 'Elevated' : 'Monitor';
    const card = document.createElement('article'); card.className = 'abiq-upset-alert abiq-surface';
    const top = document.createElement('div'); top.className = 'abiq-upset-alert-top';
    const teams = document.createElement('div'); teams.className = 'abiq-upset-teams';
    const underdogLogo = document.createElement('img'); underdogLogo.src = teamLogo(forecast.underdog); underdogLogo.alt = `${forecast.underdog} logo`;
    const favoriteLogo = document.createElement('img'); favoriteLogo.src = teamLogo(forecast.favorite); favoriteLogo.alt = `${forecast.favorite} logo`;
    teams.append(underdogLogo, favoriteLogo);
    const badge = document.createElement('span'); badge.className = 'abiq-upset-tier'; badge.textContent = tier;
    top.append(teams, badge);
    const title = document.createElement('h3'); title.textContent = `${forecast.underdog} over ${forecast.favorite}`;
    const meta = document.createElement('div'); meta.className = 'abiq-upset-meta'; meta.textContent = `${forecast.favorite} favorite ${forecast.display} · Upset pressure ${forecast.upsetPressure}`;
    const copy = document.createElement('p'); copy.textContent = UPSET_READS[forecast.underdog] ?? 'A closer forecast raises the representative underdog watch level.';
    card.append(top, title, meta, copy); container.appendChild(card);
  });
}

function renderForecasts(parentElement, data) {
  renderBars(parentElement.querySelector('#abiq-weekly-bars'), data.weekly_rankings?.slice(0, 3));
  renderForecastBoard(parentElement, data);
  renderUpsetMatrix(parentElement, data);
  renderUpsetAlerts(parentElement, data);
}

function renderReliability(parentElement, data) {
  const container = parentElement.querySelector('#abiq-reliability-chart');
  container.replaceChildren();
  for (const item of data.confidence_reliability ?? []) {
    const row = document.createElement('div');
    row.className = 'abiq-reliability-row';

    const label = document.createElement('div');
    label.className = 'abiq-reliability-label';
    const threshold = document.createElement('strong'); threshold.textContent = item.threshold;
    const games = document.createElement('span'); games.textContent = `${item.games} games`;
    label.append(threshold, games);

    const plot = document.createElement('div');
    plot.className = 'abiq-reliability-plot';

    const makeSeries = (kind, labelText, value) => {
      const series = document.createElement('div');
      series.className = `abiq-reliability-series ${kind}`;
      const seriesLabel = document.createElement('span'); seriesLabel.textContent = labelText;
      const track = document.createElement('div'); track.className = 'abiq-reliability-track';
      const fill = document.createElement('div'); fill.className = 'abiq-reliability-fill'; fill.style.width = `${value}%`; track.appendChild(fill);
      const display = document.createElement('strong'); display.textContent = `${value.toFixed(1)}%`;
      series.append(seriesLabel, track, display);
      return series;
    };

    plot.append(
      makeSeries('predicted', 'Model', Number(item.predicted)),
      makeSeries('observed', 'Actual', Number(item.observed))
    );
    row.append(label, plot);
    container.appendChild(row);
  }
}

function renderPipeline(parentElement, data) {
  const pipeline = parentElement.querySelector('#abiq-platform-pipeline');
  pipeline.replaceChildren();
  (data.platform_pipeline ?? []).forEach((item, index) => {
    const card = document.createElement('article'); card.className = 'abiq-pipe';
    const num = document.createElement('div'); num.className = 'abiq-pipe-num'; num.textContent = `${String(index+1).padStart(2,'0')} · ${item.verb}`;
    const title = document.createElement('div'); title.className = 'abiq-pipe-title'; title.textContent = item.title;
    const copy = document.createElement('div'); copy.className = 'abiq-pipe-copy'; copy.textContent = item.copy;
    card.append(num, title, copy); pipeline.appendChild(card);
  });
}

function renderPerformance(parentElement, data) {
  const grid = parentElement.querySelector('#abiq-performance-metrics');
  grid.replaceChildren();
  for (const item of data.performance_metrics ?? []) {
    const card = document.createElement('article'); card.className = 'abiq-metric-card abiq-surface';
    const label = document.createElement('div'); label.className = 'abiq-metric-label'; label.textContent = item.label;
    const value = document.createElement('div'); value.className = 'abiq-metric-value'; value.textContent = item.value;
    const detail = document.createElement('div'); detail.className = 'abiq-metric-detail'; detail.textContent = item.detail;
    card.append(label, value, detail); grid.appendChild(card);
  }
  renderReliability(parentElement, data);
  renderPipeline(parentElement, data);
}

function initialize(component) {
  const { parentElement, data } = component;
  const root = parentElement.querySelector('#abiq-dashboard-root');
  if (!root) return;
  if (data.base_texture_data_uri) root.style.setProperty('--base-texture', `url("${data.base_texture_data_uri}")`);
  if (data.accent_texture_data_uri) root.style.setProperty('--accent-texture', `url("${data.accent_texture_data_uri}")`);
  parentElement.querySelector('#abiq-brand-logo').src = data.logo_data_uri ?? '';
  parentElement.querySelector('#abiq-hero-iq').src = data.iq_data_uri ?? '';
  parentElement.querySelectorAll('[data-iq]').forEach((img) => { img.src = data.iq_data_uri ?? ''; });
  parentElement.querySelector('#abiq-profile-avatar').textContent = data.initials ?? 'AM';
  parentElement.querySelector('#abiq-profile-name').textContent = data.display_name ?? 'Abigail Millsap';
  parentElement.querySelector('#abiq-hero-description').textContent = data.hero_description ?? '';
  renderNav(parentElement);
  renderWeeks(parentElement, data);
  renderKpis(parentElement, data);
  renderGames(parentElement, data);
  renderRecommendations(parentElement, data);
  renderForecasts(parentElement, data);
  renderPerformance(parentElement, data);
}



/* Final live-site QA behavior overrides.
   Loaded after showcase_exec.js so the existing initialization flow calls these
   refined renderers without duplicating the full component implementation. */

renderUpsetMatrix = function(parentElement, data) {
  const container = parentElement.querySelector('#abiq-upset-matrix');
  container.replaceChildren();
  const forecasts = (data.weekly_rankings ?? []).map(forecastFromRanking);
  const width = 620;
  const height = 350;
  const pad = {left: 64, right: 28, top: 36, bottom: 62};
  const xMin = 60;
  const xMax = 85;
  const yMin = 30;
  const yMax = 80;
  const x = (value) => pad.left + ((value - xMin) / (xMax - xMin)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - ((value - yMin) / (yMax - yMin)) * (height - pad.top - pad.bottom);

  const svg = svgElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': 'Upset risk matrix comparing favorite win probability and relative upset pressure'
  });
  svg.classList.add('abiq-upset-svg');

  const backgroundLayer = svgElement('g');
  const markerLayer = svgElement('g');
  const leaderLayer = svgElement('g');
  const labelLayer = svgElement('g');

  const zone = svgElement('rect', {
    x: x(60),
    y: y(80),
    width: x(68) - x(60),
    height: y(60) - y(80),
    rx: 10
  });
  zone.classList.add('abiq-upset-zone');
  backgroundLayer.appendChild(zone);

  [40, 50, 60, 70, 80].forEach((tick) => {
    const line = svgElement('line', {
      x1: pad.left,
      x2: width - pad.right,
      y1: y(tick),
      y2: y(tick)
    });
    line.classList.add('abiq-chart-grid');
    backgroundLayer.appendChild(line);

    const label = svgElement('text', {
      x: pad.left - 12,
      y: y(tick) + 4,
      'text-anchor': 'end'
    });
    label.classList.add('abiq-chart-tick');
    label.textContent = String(tick);
    backgroundLayer.appendChild(label);
  });

  [60, 65, 70, 75, 80, 85].forEach((tick) => {
    const line = svgElement('line', {
      x1: x(tick),
      x2: x(tick),
      y1: pad.top,
      y2: height - pad.bottom
    });
    line.classList.add('abiq-chart-grid');
    backgroundLayer.appendChild(line);

    const label = svgElement('text', {
      x: x(tick),
      y: height - 34,
      'text-anchor': 'middle'
    });
    label.classList.add('abiq-chart-tick');
    label.textContent = `${tick}%`;
    backgroundLayer.appendChild(label);
  });

  const xLabel = svgElement('text', {
    x: (pad.left + width - pad.right) / 2,
    y: height - 8,
    'text-anchor': 'middle'
  });
  xLabel.classList.add('abiq-chart-axis-label');
  xLabel.textContent = 'Favorite win probability →';
  backgroundLayer.appendChild(xLabel);

  const yLabel = svgElement('text', {
    x: 18,
    y: height / 2,
    transform: `rotate(-90 18 ${height / 2})`,
    'text-anchor': 'middle'
  });
  yLabel.classList.add('abiq-chart-axis-label');
  yLabel.textContent = 'Upset pressure →';
  backgroundLayer.appendChild(yLabel);

  const zoneLabel = svgElement('text', {x: x(60) + 12, y: y(77)});
  zoneLabel.classList.add('abiq-upset-zone-label');
  zoneLabel.textContent = 'UPSET ALERT ZONE';
  labelLayer.appendChild(zoneLabel);

  /* Labels remain below their markers. Short leader lines make the point-to-label
     relationship explicit; the two closest points are pushed apart horizontally
     and vertically so PHI–WAS and CIN–TB cannot be confused. */
  const labelLayout = [
    {dx: 0, dy: 25},
    {dx: 0, dy: 25},
    {dx: 0, dy: 25},
    {dx: 40, dy: 31},
    {dx: -40, dy: 57}
  ];

  forecasts.forEach((forecast, index) => {
    const tier = forecast.upsetPressure >= 72 ? 'high' : forecast.upsetPressure >= 55 ? 'medium' : 'low';
    const markerX = x(forecast.probability);
    const markerY = y(forecast.upsetPressure);
    const circle = svgElement('circle', {
      cx: markerX,
      cy: markerY,
      r: 7
    });
    circle.classList.add('abiq-upset-dot', tier);
    const title = svgElement('title');
    title.textContent = `${forecast.underdog} upset watch vs ${forecast.favorite}: favorite ${forecast.display}, pressure ${forecast.upsetPressure}`;
    circle.appendChild(title);
    markerLayer.appendChild(circle);

    const layout = labelLayout[index] ?? {dx: 0, dy: 25};
    const labelX = markerX + layout.dx;
    const labelY = markerY + layout.dy;
    const leaderY = labelY - 13;
    const leader = svgElement('polyline', {
      points: `${markerX},${markerY + 8} ${markerX},${leaderY} ${labelX},${leaderY}`
    });
    leader.classList.add('abiq-upset-leader');
    leaderLayer.appendChild(leader);

    const label = svgElement('text', {
      x: labelX,
      y: labelY,
      'text-anchor': 'middle'
    });
    label.classList.add('abiq-upset-label');
    label.textContent = `${forecast.favorite}–${forecast.underdog}`;
    labelLayer.appendChild(label);
  });

  svg.append(backgroundLayer, markerLayer, leaderLayer, labelLayer);
  container.appendChild(svg);
};

renderReliability = function(parentElement, data) {
  const container = parentElement.querySelector('#abiq-reliability-chart');
  container.replaceChildren();

  const points = (data.confidence_reliability ?? []).map((item) => ({
    threshold: Number(String(item.threshold).replace(/[^0-9.]/g, '')),
    thresholdLabel: item.threshold,
    observed: Number(item.observed)
  }));
  if (!points.length) return;

  const width = 720;
  const height = 380;
  const pad = {left: 82, right: 74, top: 48, bottom: 86};
  const xMin = 53;
  const xMax = 72;
  const yMin = 64;
  const yMax = 81.5;
  const x = (value) => pad.left + ((value - xMin) / (xMax - xMin)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - ((value - yMin) / (yMax - yMin)) * (height - pad.top - pad.bottom);

  const svg = svgElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': 'Observed win accuracy rises as ABIQ forecast confidence increases'
  });
  svg.classList.add('abiq-reliability-svg');

  [65, 70, 75, 80].forEach((tick) => {
    const grid = svgElement('line', {
      x1: pad.left,
      x2: width - pad.right,
      y1: y(tick),
      y2: y(tick)
    });
    grid.classList.add('abiq-reliability-grid');
    svg.appendChild(grid);

    const label = svgElement('text', {
      x: pad.left - 14,
      y: y(tick) + 4,
      'text-anchor': 'end'
    });
    label.classList.add('abiq-reliability-tick');
    label.textContent = `${tick}%`;
    svg.appendChild(label);
  });

  const xAxis = svgElement('line', {
    x1: pad.left,
    x2: width - pad.right,
    y1: height - pad.bottom,
    y2: height - pad.bottom
  });
  xAxis.classList.add('abiq-reliability-axis');
  svg.appendChild(xAxis);

  const yAxis = svgElement('line', {
    x1: pad.left,
    x2: pad.left,
    y1: pad.top,
    y2: height - pad.bottom
  });
  yAxis.classList.add('abiq-reliability-axis');
  svg.appendChild(yAxis);

  points.forEach((point) => {
    const tick = svgElement('line', {
      x1: x(point.threshold),
      x2: x(point.threshold),
      y1: height - pad.bottom,
      y2: height - pad.bottom + 7
    });
    tick.classList.add('abiq-reliability-axis');
    svg.appendChild(tick);

    const label = svgElement('text', {
      x: x(point.threshold),
      y: height - pad.bottom + 27,
      'text-anchor': 'middle'
    });
    label.classList.add('abiq-reliability-tick');
    label.textContent = point.thresholdLabel;
    svg.appendChild(label);
  });

  const polyline = svgElement('polyline', {
    points: points.map((point) => `${x(point.threshold)},${y(point.observed)}`).join(' ')
  });
  polyline.classList.add('abiq-reliability-line');
  svg.appendChild(polyline);

  points.forEach((point) => {
    const marker = svgElement('circle', {
      cx: x(point.threshold),
      cy: y(point.observed),
      r: 4.5
    });
    marker.classList.add('abiq-reliability-point');
    svg.appendChild(marker);

    const value = svgElement('text', {
      x: x(point.threshold),
      y: y(point.observed) - 13,
      'text-anchor': 'middle'
    });
    value.classList.add('abiq-reliability-value');
    value.textContent = `${point.observed.toFixed(1)}%`;
    svg.appendChild(value);
  });

  const xTitle = svgElement('text', {
    x: (pad.left + width - pad.right) / 2,
    y: height - 15,
    'text-anchor': 'middle'
  });
  xTitle.classList.add('abiq-reliability-axis-title');
  xTitle.textContent = 'Forecast confidence threshold →';
  svg.appendChild(xTitle);

  const yTitle = svgElement('text', {
    x: 22,
    y: (pad.top + height - pad.bottom) / 2,
    transform: `rotate(-90 22 ${(pad.top + height - pad.bottom) / 2})`,
    'text-anchor': 'middle'
  });
  yTitle.classList.add('abiq-reliability-axis-title');
  yTitle.textContent = 'Observed win % →';
  svg.appendChild(yTitle);

  container.appendChild(svg);
};

/* Static full-slate context for the public Week 1 Showcase.
   These matchup probabilities mirror the frozen Week 1 values already used by
   the Showcase. They contain no pool selections, user state, or private strategy. */

const ABIQ_SLATE_CONFIDENCE = [
  {label: 'MIN–GB', value: 51.2, featured: false},
  {label: 'BUF–HOU', value: 51.5, featured: false},
  {label: 'CHI–CAR', value: 56.5, featured: false},
  {label: 'DAL–NYG', value: 56.6, featured: false},
  {label: 'TEN–NYJ', value: 56.7, featured: false},
  {label: 'KC–DEN', value: 57.6, featured: false},
  {label: 'PIT–ATL', value: 60.9, featured: false},
  {label: 'BAL–IND', value: 60.9, featured: false},
  {label: 'LAR–SF', value: 62.4, featured: false},
  {label: 'SEA–NE', value: 62.5, featured: false},
  {label: 'LV–MIA', value: 63.1, featured: false},
  {label: 'CIN–TB', value: 63.8, featured: true},
  {label: 'PHI–WAS', value: 65.0, featured: true},
  {label: 'DET–NO', value: 71.7, featured: true},
  {label: 'JAX–CLE', value: 75.8, featured: true},
  {label: 'LAC–ARI', value: 81.1, featured: true}
];

function ensureSlateConfidenceCard(parentElement) {
  const grid = parentElement.querySelector('#page-forecasts .abiq-forecast-visual-grid');
  const upsetPanel = parentElement.querySelector('#page-forecasts .abiq-upset-panel');
  if (!grid || !upsetPanel) return null;

  let stack = grid.querySelector('.abiq-forecast-side-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.className = 'abiq-forecast-side-stack';
    grid.insertBefore(stack, upsetPanel);
    stack.appendChild(upsetPanel);
  } else if (upsetPanel.parentElement !== stack) {
    stack.prepend(upsetPanel);
  }

  let card = stack.querySelector('.abiq-slate-profile');
  if (!card) {
    card = document.createElement('article');
    card.className = 'abiq-slate-profile abiq-surface abiq-secondary-surface';
    card.innerHTML = `
      <div class="abiq-visual-heading abiq-slate-heading">
        <div><div class="abiq-eyebrow">SLATE CONFIDENCE PROFILE</div><h3>How concentrated is confidence across the full week?</h3></div>
        <span>16 GAMES</span>
      </div>
      <div class="abiq-slate-summary" aria-label="Week 1 favorite confidence distribution">
        <div class="abiq-slate-summary-card"><span>TIGHT</span><strong>6</strong><small>50–59.9%</small></div>
        <div class="abiq-slate-summary-card"><span>MODERATE</span><strong>7</strong><small>60–69.9%</small></div>
        <div class="abiq-slate-summary-card"><span>STRONG</span><strong>3</strong><small>70%+</small></div>
      </div>
      <div class="abiq-slate-chart" aria-label="Week 1 favorite win probability spectrum"></div>
      <div class="abiq-slate-legend"><span><i class="featured"></i>Featured board</span><span><i></i>Remaining slate</span></div>
      <p class="abiq-chart-note abiq-slate-note">Only 3 of 16 static favorites clear 70%, showing how concentrated the strongest weekly signals are.</p>
    `;
    stack.appendChild(card);
  }
  return card;
}

function renderSlateConfidenceProfile(parentElement) {
  const card = ensureSlateConfidenceCard(parentElement);
  if (!card) return;
  const container = card.querySelector('.abiq-slate-chart');
  if (!container) return;
  container.replaceChildren();

  const width = 620;
  const height = 230;
  const pad = {left: 34, right: 24, top: 32, bottom: 48};
  const xMin = 50;
  const xMax = 85;
  const x = (value) => pad.left + ((value - xMin) / (xMax - xMin)) * (width - pad.left - pad.right);
  const plotTop = pad.top;
  const plotBottom = height - pad.bottom;

  const svg = svgElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': 'Distribution of favorite win probabilities across all 16 static Week 1 Showcase games'
  });
  svg.classList.add('abiq-slate-svg');

  [
    {from: 50, to: 60, tier: 'tight'},
    {from: 60, to: 70, tier: 'moderate'},
    {from: 70, to: 85, tier: 'strong'}
  ].forEach((band) => {
    const rect = svgElement('rect', {
      x: x(band.from), y: plotTop,
      width: x(band.to) - x(band.from),
      height: plotBottom - plotTop,
      rx: 4
    });
    rect.classList.add('abiq-slate-band', band.tier);
    svg.appendChild(rect);
  });

  [50, 60, 70, 80, 85].forEach((tick) => {
    const line = svgElement('line', {x1: x(tick), x2: x(tick), y1: plotTop, y2: plotBottom});
    line.classList.add('abiq-slate-grid');
    svg.appendChild(line);
    const label = svgElement('text', {x: x(tick), y: height - 18, 'text-anchor': 'middle'});
    label.classList.add('abiq-slate-tick');
    label.textContent = `${tick}%`;
    svg.appendChild(label);
  });

  const lanes = [62, 91, 120, 149];
  const lastX = [-999, -999, -999, -999];
  const sorted = [...ABIQ_SLATE_CONFIDENCE].sort((a, b) => a.value - b.value || a.label.localeCompare(b.label));

  sorted.forEach((point) => {
    const pointX = x(point.value);
    let lane = lastX.findIndex((previous) => pointX - previous >= 30);
    if (lane < 0) {
      lane = lastX.reduce((best, previous, index, values) => previous < values[best] ? index : best, 0);
    }
    lastX[lane] = pointX;

    const marker = svgElement('circle', {cx: pointX, cy: lanes[lane], r: point.featured ? 7.5 : 5.5});
    marker.classList.add('abiq-slate-dot', point.featured ? 'featured' : 'context');
    const title = svgElement('title');
    title.textContent = `${point.label}: ${point.value.toFixed(1)}% favorite win probability${point.featured ? ' · featured above' : ''}`;
    marker.appendChild(title);
    svg.appendChild(marker);
  });

  container.appendChild(svg);
}

const renderForecastsBeforeSlateProfile = renderForecasts;
renderForecasts = function(parentElement, data) {
  renderForecastsBeforeSlateProfile(parentElement, data);
  renderSlateConfidenceProfile(parentElement);
};


/* Forecasts v2: full-slate decision surface.
   Loaded after the prior visual overrides so this renderer becomes the single
   active Forecasts implementation without disturbing Dashboard or Performance. */

function forecastV2Slate(data) {
  return [...(data.forecast_slate ?? [])]
    .map((item) => ({
      favorite: String(item.favorite ?? ''),
      underdog: String(item.underdog ?? ''),
      probability: Number(item.probability ?? 0),
      display: String(item.display ?? ''),
      closeGameProbability: Number(item.close_game_probability ?? 0),
      closeGameDisplay: String(item.close_game_display ?? ''),
      kickoff: String(item.kickoff ?? '')
    }))
    .filter((item) => item.favorite && item.underdog)
    .sort((left, right) => right.probability - left.probability);
}

function forecastV2Tier(probability) {
  if (probability >= 70) return {label: 'High', className: 'high'};
  if (probability >= 60) return {label: 'Medium', className: 'medium'};
  return {label: 'Tight', className: 'tight'};
}

function forecastV2MatchupLabel(item) {
  return `${item.favorite}–${item.underdog}`;
}

function forecastV2Heading(eyebrowText, titleText, metaText = '') {
  const heading = document.createElement('div');
  heading.className = 'abiq-visual-heading abiq-v2-heading';
  const copy = document.createElement('div');
  const eyebrow = document.createElement('div');
  eyebrow.className = 'abiq-eyebrow';
  eyebrow.textContent = eyebrowText;
  const title = document.createElement('h3');
  title.textContent = titleText;
  copy.append(eyebrow, title);
  heading.appendChild(copy);
  if (metaText) {
    const meta = document.createElement('span');
    meta.textContent = metaText;
    heading.appendChild(meta);
  }
  return heading;
}

function renderPreSnapRead(parentElement, slate) {
  const takeaway = parentElement.querySelector('#page-forecasts .abiq-takeaway');
  if (!takeaway) return;

  takeaway.className = 'abiq-pre-snap abiq-surface';
  takeaway.replaceChildren();

  const strongCount = slate.filter((item) => item.probability >= 70).length;
  const highTensionCount = slate.filter((item) => item.closeGameProbability >= 80).length;
  const tightest = [...slate].sort((left, right) => left.probability - right.probability)[0];

  const heading = document.createElement('div');
  heading.className = 'abiq-pre-snap-heading';
  const copy = document.createElement('div');
  const eyebrow = document.createElement('div');
  eyebrow.className = 'abiq-eyebrow';
  eyebrow.textContent = 'PRE-SNAP READ';
  const title = document.createElement('h3');
  title.textContent = 'What the slate is telling us before kickoff.';
  const sub = document.createElement('p');
  sub.textContent = 'A quick read on separation, tension and where Week 1 is least settled.';
  copy.append(eyebrow, title, sub);
  heading.appendChild(copy);
  takeaway.appendChild(heading);

  const insights = [
    {
      label: 'CLEAR FAVORITES',
      value: String(strongCount),
      detail: `of ${slate.length} teams clear a 70% win forecast.`
    },
    {
      label: 'HIGH-TENSION GAMES',
      value: String(highTensionCount),
      detail: `of ${slate.length} carry 80%+ close-game risk.`
    },
    {
      label: 'CLOSEST CALL',
      value: tightest?.display ?? '—',
      detail: tightest ? `${forecastV2MatchupLabel(tightest)} sits nearest to a coin flip.` : 'No slate data available.'
    }
  ];

  const grid = document.createElement('div');
  grid.className = 'abiq-pre-snap-grid';
  insights.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'abiq-pre-snap-card';
    const label = document.createElement('span');
    label.textContent = item.label;
    const value = document.createElement('strong');
    value.textContent = item.value;
    const detail = document.createElement('p');
    detail.textContent = item.detail;
    card.append(label, value, detail);
    grid.appendChild(card);
  });
  takeaway.appendChild(grid);
}

function renderFullSlateBoard(parentElement, slate) {
  const host = parentElement.querySelector('#page-forecasts .abiq-forecast-visual-grid');
  if (!host) return;

  host.className = 'abiq-forecast-v2-stack';
  host.replaceChildren();

  const board = document.createElement('article');
  board.className = 'abiq-full-slate-board abiq-surface';
  board.appendChild(forecastV2Heading('THE BOARD', 'Every Week 1 matchup, ranked by forecast confidence.', `${slate.length} GAMES`));

  const columns = document.createElement('div');
  columns.className = 'abiq-full-slate-columns';
  const splitIndex = Math.ceil(slate.length / 2);
  [slate.slice(0, splitIndex), slate.slice(splitIndex)].forEach((group, columnIndex) => {
    const column = document.createElement('div');
    column.className = `abiq-full-slate-column column-${columnIndex + 1}`;
    group.forEach((item, localIndex) => {
      const overallIndex = columnIndex === 0 ? localIndex : splitIndex + localIndex;
      const tier = forecastV2Tier(item.probability);
      const row = document.createElement('div');
      row.className = 'abiq-full-slate-row';

      const rank = document.createElement('span');
      rank.className = 'abiq-full-slate-rank';
      rank.textContent = String(overallIndex + 1).padStart(2, '0');

      const matchup = document.createElement('div');
      matchup.className = 'abiq-full-slate-matchup';
      const logos = document.createElement('div');
      logos.className = 'abiq-full-slate-logos';
      const favoriteLogo = document.createElement('img');
      favoriteLogo.src = teamLogo(item.favorite);
      favoriteLogo.alt = `${item.favorite} logo`;
      const underdogLogo = document.createElement('img');
      underdogLogo.src = teamLogo(item.underdog);
      underdogLogo.alt = `${item.underdog} logo`;
      logos.append(favoriteLogo, underdogLogo);

      const matchupCopy = document.createElement('div');
      const matchupName = document.createElement('strong');
      matchupName.textContent = `${item.favorite} vs ${item.underdog}`;
      const kickoff = document.createElement('small');
      kickoff.textContent = item.kickoff;
      matchupCopy.append(matchupName, kickoff);
      matchup.append(logos, matchupCopy);

      const pick = document.createElement('div');
      pick.className = 'abiq-full-slate-pick';
      const pickLabel = document.createElement('span');
      pickLabel.textContent = 'Projected winner';
      const pickTeam = document.createElement('strong');
      pickTeam.textContent = item.favorite;
      pick.append(pickLabel, pickTeam);

      const probability = document.createElement('div');
      probability.className = 'abiq-full-slate-probability';
      const probabilityLabel = document.createElement('span');
      probabilityLabel.textContent = 'Win %';
      const probabilityValue = document.createElement('strong');
      probabilityValue.textContent = item.display;
      probability.append(probabilityLabel, probabilityValue);

      const badge = document.createElement('span');
      badge.className = `abiq-full-slate-tier ${tier.className}`;
      badge.textContent = tier.label;

      row.append(rank, matchup, pick, probability, badge);
      column.appendChild(row);
    });
    columns.appendChild(column);
  });

  board.appendChild(columns);
  host.appendChild(board);
  host.appendChild(renderPressureMap(slate));
}

function pressureReadItems(slate) {
  const cleanest = [...slate].sort(
    (left, right) =>
      (right.probability - right.closeGameProbability * 0.12) -
      (left.probability - left.closeGameProbability * 0.12)
  )[0];
  const strongTension = [...slate]
    .filter((item) => item.probability >= 70)
    .sort((left, right) => right.closeGameProbability - left.closeGameProbability)[0];
  const tossup = [...slate].sort((left, right) => left.probability - right.probability)[0];

  return [
    {
      label: 'CLEANEST FAVORITE',
      title: cleanest ? forecastV2MatchupLabel(cleanest) : '—',
      probability: cleanest?.display ?? '—',
      risk: cleanest?.closeGameDisplay ?? '—',
      copy: cleanest ? `${cleanest.display} win forecast with ${cleanest.closeGameDisplay} close-game risk.` : ''
    },
    {
      label: 'STRONG, BUT VOLATILE',
      title: strongTension ? forecastV2MatchupLabel(strongTension) : '—',
      probability: strongTension?.display ?? '—',
      risk: strongTension?.closeGameDisplay ?? '—',
      copy: strongTension ? `${strongTension.display} win forecast, but ${strongTension.closeGameDisplay} close-game risk.` : ''
    },
    {
      label: 'TRUE TOSS-UP',
      title: tossup ? forecastV2MatchupLabel(tossup) : '—',
      probability: tossup?.display ?? '—',
      risk: tossup?.closeGameDisplay ?? '—',
      copy: tossup ? `${tossup.display} leaves almost no separation between the two sides.` : ''
    }
  ];
}

function renderPressureReads(readItems, className) {
  const reads = document.createElement('div');
  reads.className = className;
  readItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'abiq-pressure-read';
    const label = document.createElement('span');
    label.textContent = item.label;
    const title = document.createElement('strong');
    title.textContent = item.title;
    const metrics = document.createElement('div');
    metrics.className = 'abiq-pressure-read-metrics';
    const win = document.createElement('span');
    win.textContent = `${item.probability} win`;
    const risk = document.createElement('span');
    risk.textContent = `${item.risk} close-game risk`;
    metrics.append(win, risk);
    const copy = document.createElement('p');
    copy.textContent = item.copy;
    card.append(label, title, metrics, copy);
    reads.appendChild(card);
  });
  return reads;
}

function renderPressureMap(slate) {
  const panel = document.createElement('article');
  panel.className = 'abiq-pressure-panel abiq-surface abiq-secondary-surface';
  panel.appendChild(forecastV2Heading('PRESSURE MAP', 'Where confidence and game tension collide.', 'WIN PROBABILITY × CLOSE-GAME RISK'));

  const readItems = pressureReadItems(slate);
  const layout = document.createElement('div');
  layout.className = 'abiq-pressure-layout';
  const chart = document.createElement('div');
  chart.className = 'abiq-pressure-chart';

  const width = 1120;
  const height = 430;
  const pad = {left: 78, right: 34, top: 34, bottom: 70};
  const xMin = 50;
  const xMax = 85;
  const yMin = 45;
  const yMax = 100;
  const x = (value) => pad.left + ((value - xMin) / (xMax - xMin)) * (width - pad.left - pad.right);
  const y = (value) => height - pad.bottom - ((value - yMin) / (yMax - yMin)) * (height - pad.top - pad.bottom);

  const svg = svgElement('svg', {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': 'Pressure Map comparing favorite win probability with close-game risk for all sixteen Week 1 games'
  });
  svg.classList.add('abiq-pressure-svg');

  const tensionZone = svgElement('rect', {
    x: pad.left,
    y: y(100),
    width: width - pad.left - pad.right,
    height: y(80) - y(100),
    rx: 12
  });
  tensionZone.classList.add('abiq-pressure-zone');
  svg.appendChild(tensionZone);

  [50, 60, 70, 80, 90, 100].forEach((tick) => {
    const grid = svgElement('line', {x1: pad.left, x2: width - pad.right, y1: y(tick), y2: y(tick)});
    grid.classList.add('abiq-pressure-grid');
    svg.appendChild(grid);
    const label = svgElement('text', {x: pad.left - 14, y: y(tick) + 4, 'text-anchor': 'end'});
    label.classList.add('abiq-pressure-tick');
    label.textContent = `${tick}%`;
    svg.appendChild(label);
  });

  [50, 55, 60, 65, 70, 75, 80, 85].forEach((tick) => {
    const grid = svgElement('line', {x1: x(tick), x2: x(tick), y1: pad.top, y2: height - pad.bottom});
    grid.classList.add('abiq-pressure-grid');
    svg.appendChild(grid);
    const label = svgElement('text', {x: x(tick), y: height - 38, 'text-anchor': 'middle'});
    label.classList.add('abiq-pressure-tick');
    label.textContent = `${tick}%`;
    svg.appendChild(label);
  });

  const zoneLabel = svgElement('text', {x: pad.left + 18, y: y(96)});
  zoneLabel.classList.add('abiq-pressure-zone-label');
  zoneLabel.textContent = 'HIGH-TENSION ZONE';
  svg.appendChild(zoneLabel);

  const xTitle = svgElement('text', {x: (pad.left + width - pad.right) / 2, y: height - 9, 'text-anchor': 'middle'});
  xTitle.classList.add('abiq-pressure-axis');
  xTitle.textContent = 'Favorite win probability →';
  svg.appendChild(xTitle);
  const yTitle = svgElement('text', {x: 22, y: height / 2, transform: `rotate(-90 22 ${height / 2})`, 'text-anchor': 'middle'});
  yTitle.classList.add('abiq-pressure-axis');
  yTitle.textContent = 'Close-game risk →';
  svg.appendChild(yTitle);

  const labeledGames = new Set(['LAC–ARI', 'JAX–CLE', 'DET–NO', 'BUF–HOU', 'MIN–GB']);
  const labelOffsets = {
    'LAC–ARI': {dx: -14, dy: -16, anchor: 'end'},
    'JAX–CLE': {dx: 13, dy: -13, anchor: 'start'},
    'DET–NO': {dx: 14, dy: -13, anchor: 'start'},
    'BUF–HOU': {dx: 15, dy: 22, anchor: 'start'},
    'MIN–GB': {dx: 15, dy: 22, anchor: 'start'}
  };

  slate.forEach((item) => {
    const labelText = forecastV2MatchupLabel(item);
    const marker = svgElement('circle', {
      cx: x(item.probability),
      cy: y(item.closeGameProbability),
      r: item.probability >= 70 ? 7 : 5.5
    });
    const markerClass = item.probability >= 70 ? 'strong' : item.closeGameProbability >= 80 ? 'tension' : 'standard';
    marker.classList.add('abiq-pressure-dot', markerClass);
    const title = svgElement('title');
    title.textContent = `${labelText}: ${item.display} favorite win forecast, ${item.closeGameDisplay} close-game risk`;
    marker.appendChild(title);
    svg.appendChild(marker);

    if (labeledGames.has(labelText)) {
      const offset = labelOffsets[labelText] ?? {dx: 10, dy: -10, anchor: 'start'};
      const label = svgElement('text', {
        x: x(item.probability) + offset.dx,
        y: y(item.closeGameProbability) + offset.dy,
        'text-anchor': offset.anchor
      });
      label.classList.add('abiq-pressure-label');
      label.textContent = labelText;
      svg.appendChild(label);
    }
  });

  chart.appendChild(svg);
  layout.appendChild(chart);
  layout.appendChild(renderPressureReads(readItems, 'abiq-pressure-reads'));
  panel.appendChild(layout);

  const mobile = renderPressureReads(readItems, 'abiq-pressure-mobile-list');
  panel.appendChild(mobile);

  const note = document.createElement('p');
  note.className = 'abiq-chart-note abiq-pressure-note';
  note.textContent = 'Close-game risk is a separate matchup-context signal from win probability. Higher values indicate a profile more consistent with a one-score game; it is not an upset probability.';
  panel.appendChild(note);
  return panel;
}

function renderUpsetWatchV2(parentElement, slate) {
  const section = parentElement.querySelector('#page-forecasts .abiq-upset-watch');
  const container = parentElement.querySelector('#abiq-upset-alerts');
  if (!section || !container) return;

  const heading = section.querySelector('.abiq-flow-heading');
  if (heading) {
    heading.replaceChildren();
    const eyebrow = document.createElement('div');
    eyebrow.className = 'abiq-eyebrow';
    eyebrow.textContent = 'UPSET WATCH';
    const title = document.createElement('h3');
    title.textContent = 'The matchups with the least separation and the most tension.';
    heading.append(eyebrow, title);
  }

  const candidates = [...slate]
    .filter((item) => item.probability < 65 && item.closeGameProbability >= 80)
    .sort((left, right) => (left.probability - right.probability) || (right.closeGameProbability - left.closeGameProbability))
    .slice(0, 3);

  container.replaceChildren();
  candidates.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'abiq-upset-alert abiq-surface abiq-upset-alert-v2';

    const top = document.createElement('div');
    top.className = 'abiq-upset-alert-top';
    const teams = document.createElement('div');
    teams.className = 'abiq-upset-teams';
    const underdogLogo = document.createElement('img');
    underdogLogo.src = teamLogo(item.underdog);
    underdogLogo.alt = `${item.underdog} logo`;
    const favoriteLogo = document.createElement('img');
    favoriteLogo.src = teamLogo(item.favorite);
    favoriteLogo.alt = `${item.favorite} logo`;
    teams.append(underdogLogo, favoriteLogo);
    const badge = document.createElement('span');
    badge.className = 'abiq-upset-tier';
    badge.textContent = 'Watch';
    top.append(teams, badge);

    const title = document.createElement('h3');
    title.textContent = `${item.underdog} vs ${item.favorite}`;
    const meta = document.createElement('div');
    meta.className = 'abiq-upset-meta';
    meta.textContent = `${item.favorite} forecast ${item.display} · Close-game risk ${item.closeGameDisplay}`;
    const copy = document.createElement('p');
    copy.textContent = 'Limited forecast separation plus elevated close-game risk makes this one of the slate’s least settled matchups.';
    card.append(top, title, meta, copy);
    container.appendChild(card);
  });
}

renderForecasts = function(parentElement, data) {
  const slate = forecastV2Slate(data);
  renderPreSnapRead(parentElement, slate);
  renderFullSlateBoard(parentElement, slate);
  renderUpsetWatchV2(parentElement, slate);
};

/* Public CFB Survivor Showcase.
   All schedules and probabilities are synthetic, deterministic demonstration inputs.
   This does not import private ABIQ code, CFB production picks, or paid data.
   The scenario engine solves a constrained season-long assignment: one team per
   week, no team reuse, maximize the product of illustrative win probabilities. */
const CFB_DEMO_TEAMS = {
  SEC: [
    ["Alabama",1.70],["Arkansas",.65],["Auburn",.95],["Florida",1.02],
    ["Georgia",1.83],["Kentucky",.85],["LSU",1.49],["Mississippi State",.55],
    ["Missouri",1.08],["Oklahoma",1.25],["Ole Miss",1.45],["South Carolina",1.30],
    ["Tennessee",1.42],["Texas",1.76],["Texas A&M",1.32],["Vanderbilt",.47]
  ],
  "BIG TEN": [
    ["Illinois",.97],["Indiana",1.31],["Iowa",1.13],["Maryland",.57],
    ["Michigan",1.57],["Michigan State",.78],["Minnesota",.84],["Nebraska",.96],
    ["Northwestern",.43],["Ohio State",1.84],["Oregon",1.73],["Penn State",1.57],
    ["Purdue",.39],["Rutgers",.59],["UCLA",1.14],["USC",1.36],
    ["Washington",1.14],["Wisconsin",1.03]
  ]
};
/* ESPN NCAA CDN school IDs; if an image fails, use a readable monogram.
   No odds API or private ABIQ data is used for logo assets. */
const CFB_TEAM_LOGO_IDS = {
  "Alabama":333,"Arkansas":8,"Auburn":2,"Florida":57,"Georgia":61,
  "Kentucky":96,"LSU":99,"Mississippi State":344,"Missouri":142,
  "Oklahoma":201,"Ole Miss":145,"South Carolina":2579,"Tennessee":2633,
  "Texas":251,"Texas A&M":245,"Vanderbilt":238,
  "Illinois":356,"Indiana":84,"Iowa":2294,"Maryland":120,
  "Michigan":130,"Michigan State":127,"Minnesota":135,"Nebraska":158,
  "Northwestern":77,"Ohio State":194,"Oregon":2483,"Penn State":213,
  "Purdue":2509,"Rutgers":164,"UCLA":26,"USC":30,"Washington":264,
  "Wisconsin":275
};
const CFB_WEEKS = 14;
const CFB_DEMO_STATE = {conference:"SEC", byConference:{}};

function cfbHash(input) {
  let value = 2166136261;
  for (const letter of input) {
    value ^= letter.charCodeAt(0);
    value = Math.imul(value, 16777619);
  }
  return value >>> 0;
}

function cfbGameKey(a,b) {
  return [a,b].sort().join("|");
}

function cfbPairActiveTeams(active, alreadyPlayed, week) {
  // Backtracking makes each synthetic matchup symmetric and avoids repeat opponents.
  const ordered = [...active].sort((a,b) =>
    cfbHash(a + ":" + week) - cfbHash(b + ":" + week)
  );
  function solve(remaining) {
    if (!remaining.length) return [];
    const first = remaining[0];
    const options = remaining.slice(1)
      .filter(other => !alreadyPlayed.has(cfbGameKey(first,other)))
      .sort((a,b) => cfbHash(first + a + week) - cfbHash(first + b + week));
    for (const second of options) {
      const rest = remaining.slice(1).filter(team => team !== second);
      const downstream = solve(rest);
      if (downstream) return [[first,second],...downstream];
    }
    return null;
  }
  return solve(ordered);
}

function cfbFixture(conference) {
  const teams = CFB_DEMO_TEAMS[conference];
  const strengths = Object.fromEntries(teams);
  const names = teams.map(row => row[0]);
  const byTeam = Object.fromEntries(names.map(name => [name,Array(CFB_WEEKS).fill(null)]));
  const previouslyPlayed = new Set();
  const groupSize = conference === "SEC" ? 4 : 6;
  const groups = conference === "SEC" ? 4 : 3;
  for (let week = 1; week <= CFB_WEEKS; week++) {
    const active = names.filter((team,index) => {
      const group = Math.floor(index / groupSize);
      return week !== 3 + group && week !== 10 + group;
    });
    const pairs = cfbPairActiveTeams(active,previouslyPlayed,week);
    if (!pairs || pairs.length * 2 !== active.length) {
      throw new Error("Illustrative CFB schedule could not be paired for " + conference + " Week " + week);
    }
    for (const [a,b] of pairs) {
      const home = cfbHash(a + ":" + b + ":" + week) % 2 === 0 ? a : b;
      const away = home === a ? b : a;
      const homeProbability = Math.max(.13,Math.min(.87,
        1 / (1 + Math.exp(-((strengths[home]-strengths[away])*1.58 + .17)))
      ));
      byTeam[home][week-1] = {week,team:home,opponent:away,home:true,probability:homeProbability};
      byTeam[away][week-1] = {week,team:away,opponent:home,home:false,probability:1-homeProbability};
      previouslyPlayed.add(cfbGameKey(a,b));
    }
  }
  return {names,byTeam};
}

const CFB_FIXTURES = Object.fromEntries(
  Object.keys(CFB_DEMO_TEAMS).map(conference => [conference,cfbFixture(conference)])
);

// Rectangular Hungarian algorithm, O(weeks * teams^2).
// Costs are -log(p), so minimizing their sum maximizes all-week survival
// under an explicitly illustrative independent-game objective.
function cfbHungarian(cost) {
  const n = cost.length;
  if (!n) return [];
  const m = cost[0].length;
  if (m < n) return null;
  const u = Array(n+1).fill(0), v = Array(m+1).fill(0);
  const p = Array(m+1).fill(0), way = Array(m+1).fill(0);
  for (let i=1;i<=n;i++) {
    p[0]=i;
    let j0=0;
    const minv=Array(m+1).fill(Infinity), used=Array(m+1).fill(false);
    do {
      used[j0]=true;
      const i0=p[j0];
      let delta=Infinity,j1=0;
      for (let j=1;j<=m;j++) if (!used[j]) {
        const cur=cost[i0-1][j-1]-u[i0]-v[j];
        if (cur<minv[j]) {minv[j]=cur;way[j]=j0;}
        if (minv[j]<delta) {delta=minv[j];j1=j;}
      }
      if (!Number.isFinite(delta) || j1===0) return null;
      for (let j=0;j<=m;j++) {
        if (used[j]) {u[p[j]]+=delta;v[j]-=delta;}
        else {minv[j]-=delta;}
      }
      j0=j1;
    } while(p[j0]!==0);
    do {
      const j1=way[j0];
      p[j0]=p[j1];
      j0=j1;
    } while(j0!==0);
  }
  const result=Array(n).fill(-1);
  for(let j=1;j<=m;j++) if(p[j]>0) result[p[j]-1]=j-1;
  return result;
}

function cfbOptimize(conference, fixed={}) {
  const fixture=CFB_FIXTURES[conference], used=new Set(), path={};
  for (const [weekText,team] of Object.entries(fixed)) {
    const week=Number(weekText);
    if (!Number.isInteger(week) || week<1 || week>CFB_WEEKS ||
        !fixture.byTeam[team]?.[week-1]) {
      return {error:"That selection is not available in the illustrative Week " + week + " schedule."};
    }
    if (used.has(team)) return {error:team+" is already reserved for another week. A team can only be used once."};
    used.add(team);
    path[week]=team;
  }
  const remainingWeeks=Array.from({length:CFB_WEEKS},(_,i)=>i+1).filter(w=>!path[w]);
  const teams=fixture.names.filter(team=>!used.has(team));
  const impossible=1000000;
  const cost=remainingWeeks.map(w=>teams.map(team => {
    const option=fixture.byTeam[team][w-1];
    return option ? -Math.log(option.probability) : impossible;
  }));
  const matches=cfbHungarian(cost);
  if (!matches || matches.some((col,i)=>col<0 || cost[i][col]>=impossible)) {
    return {error:"No complete season path fits these choices. Try a different pick or reset."};
  }
  remainingWeeks.forEach((week,index)=>{path[week]=teams[matches[index]];});
  if (new Set(Object.values(path)).size!==CFB_WEEKS) {
    return {error:"The illustrative plan violated the no-reuse rule."};
  }
  const probabilities=Object.keys(path).map(week=>fixture.byTeam[path[week]][Number(week)-1].probability);
  return {path,average:probabilities.reduce((a,b)=>a+b,0)/probabilities.length};
}

function cfbScenario(conference) {
  if (!CFB_DEMO_STATE.byConference[conference]) {
    const plan=cfbOptimize(conference);
    if (plan.error) throw new Error(plan.error);
    CFB_DEMO_STATE.byConference[conference] = {
      locks:{}, path:plan.path, average:plan.average, week:1,
      team:plan.path[1], changes:[], message:""
    };
  }
  return CFB_DEMO_STATE.byConference[conference];
}

function cfbPercent(probability) {
  return (100*probability).toFixed(1)+"%";
}

function cfbNode(tag,className,text) {
  const element=document.createElement(tag);
  if(className) element.className=className;
  if(text!==undefined) element.textContent=String(text);
  return element;
}

function cfbLogoNode(team) {
  const logoId=CFB_TEAM_LOGO_IDS[team];
  const fallback=()=>cfbNode("span","abiq-cfb-logo-fallback",
    team.split(" ").map(word=>word[0]).slice(0,2).join("").toUpperCase());
  if(!logoId) return fallback();
  const img=cfbNode("img","abiq-cfb-logo");
  img.src="https://a.espncdn.com/i/teamlogos/ncaa/500/"+logoId+".png";
  img.alt=team+" team logo";
  img.loading="lazy";
  img.decoding="async";
  img.onerror=()=>img.replaceWith(fallback());
  return img;
}

function cfbOption(week,team) {
  return CFB_FIXTURES[CFB_DEMO_STATE.conference].byTeam[team]?.[week-1] ?? null;
}

function cfbOverride(week,team) {
  const s=cfbScenario(CFB_DEMO_STATE.conference);
  const previous={...s.path};
  const fixed={...s.locks};
  // A change in a later week should never silently rewrite earlier choices.
  for(let w=1;w<week;w++) fixed[w]=previous[w];
  fixed[week]=team;
  const plan=cfbOptimize(CFB_DEMO_STATE.conference,fixed);
  if(plan.error) {s.message=plan.error;return false;}
  s.locks[week]=team;
  s.path=plan.path;
  s.average=plan.average;
  s.week=week;
  s.team=team;
  s.changes=Array.from({length:CFB_WEEKS-week},(_,i)=>week+i+1)
    .filter(w=>previous[w]!==plan.path[w])
    .map(w=>({week:w,before:previous[w],after:plan.path[w]}));
  s.message=s.changes.length
    ? "Selection locked. "+s.changes.length+" future "+(s.changes.length===1?"week was":"weeks were")+" reoptimized."
    : "Selection locked. The remaining optimal path did not need to change.";
  return true;
}

function cfbMetric(label,value,sub) {
  const el=cfbNode("article","abiq-cfb-metric abiq-surface");
  el.append(cfbNode("span","",label),cfbNode("strong","",value),cfbNode("small","",sub));
  return el;
}

function cfbRender(parentElement) {
  const conference=CFB_DEMO_STATE.conference;
  const fixture=CFB_FIXTURES[conference], s=cfbScenario(conference);
  const area=parentElement.querySelector("#page-cfb-survivor");
  if(!area) return;
  for (const btn of area.querySelectorAll("[data-conference]")) {
    btn.setAttribute("aria-pressed",String(btn.dataset.conference===conference));
    btn.onclick=()=>{CFB_DEMO_STATE.conference=btn.dataset.conference;cfbRender(parentElement);};
  }
  const reset=area.querySelector("#abiq-cfb-reset");
  reset.onclick=()=>{
    delete CFB_DEMO_STATE.byConference[conference];
    cfbRender(parentElement);
  };
  const weekSelect=area.querySelector("#abiq-cfb-week");
  weekSelect.replaceChildren();
  for(let w=1;w<=CFB_WEEKS;w++){
    const option=cfbNode("option","",`Week ${w}`);
    option.value=String(w);
    weekSelect.appendChild(option);
  }
  weekSelect.value=String(s.week);
  weekSelect.onchange=()=>{s.week=Number(weekSelect.value);cfbRender(parentElement);};

  area.querySelector("#abiq-cfb-week-heading").textContent="WEEK "+s.week;
  const notice=area.querySelector("#abiq-cfb-notice");
  notice.textContent=s.message || "Try an alternate weekly pick to see the ripple effect across the season.";
  const metrics=area.querySelector("#abiq-cfb-metrics");
  metrics.replaceChildren(
    cfbMetric("FULL-SEASON PATH","14 weeks","One survivor selection every week"),
    cfbMetric("TEAMS RESERVED","14 / "+fixture.names.length,"No team reused within this conference"),
    cfbMetric("ILLUSTRATIVE PICK AVERAGE",cfbPercent(s.average),"Example inputs only · not model performance")
  );

  // A weekly recommendation is ranked by its best feasible full-season path,
  // not by win percentage alone. This also excludes previously used teams.
  const otherLocks={...s.locks};
  delete otherLocks[s.week];
  for(let w=1;w<s.week;w++) otherLocks[w]=s.path[w];
  const ranked=fixture.names.map(team=>fixture.byTeam[team][s.week-1])
    .filter(Boolean)
    .map(option=>{
      const trial=cfbOptimize(conference,{...otherLocks,[s.week]:option.team});
      if(trial.error) return null;
      const strategyScore=Object.entries(trial.path).reduce((sum,[week,team])=>
        sum+Math.log(fixture.byTeam[team][Number(week)-1].probability),0);
      return {...option,strategyScore};
    })
    .filter(Boolean)
    .sort((a,b)=>b.strategyScore-a.strategyScore || b.probability-a.probability);
  const currentTeam=s.path[s.week];
  const shortlist=ranked.slice(0,5);
  if(!shortlist.some(option=>option.team===currentTeam)) {
    // Keep the genuine top five intact; the locked custom choice is unranked.
    shortlist.push({...cfbOption(s.week,currentTeam),outsideRank:true});
  }
  const picks=area.querySelector("#abiq-cfb-picks");
  picks.replaceChildren();
  for(const [index,option] of shortlist.entries()) {
    const isCurrent=option.team===currentTeam;
    const button=cfbNode("button","abiq-cfb-pick"+(isCurrent?" selected":""));
    button.type="button";
    button.setAttribute("aria-label","Select "+option.team+" for Week "+s.week);
    button.append(
      cfbNode("span","abiq-cfb-pick-rank",option.outsideRank?"•":index+1),
      (()=>{const identity=cfbNode("span","abiq-cfb-pick-identity");
        const copy=cfbNode("span","abiq-cfb-pick-team");
        copy.append(cfbNode("strong","",option.team),
          cfbNode("small","",(option.home?"vs ":"@ ")+option.opponent));
        identity.append(cfbLogoNode(option.team),copy);return identity;})(),
      cfbNode("span","abiq-cfb-pick-prob",cfbPercent(option.probability)),
      cfbNode("span","abiq-cfb-pick-action",isCurrent?(s.locks[s.week]?"LOCKED":"IN PATH"):"TRY PICK ›")
    );
    button.onclick=()=>{cfbOverride(s.week,option.team);cfbRender(parentElement);};
    const future=fixture.byTeam[option.team].filter(g=>g && g.week>s.week);
    const bestFuture=future.length?Math.max(...future.map(g=>g.probability)):null;
    const read=bestFuture && bestFuture>option.probability+.045
      ? "Save-for-later signal: a stronger illustrative matchup is available in a future week."
      : "Competitive current-week option; availability elsewhere still shapes the season path.";
    const note=cfbNode("div","abiq-cfb-pick-note",read);
    picks.append(button,note);
  }

  const impact=area.querySelector("#abiq-cfb-impact");
  impact.replaceChildren();
  impact.append(cfbNode("h4","abiq-cfb-impact-head",s.changes.length
    ? s.changes.length+" downstream "+(s.changes.length===1?"change":"changes")
    : "Optimize beyond this week."));
  impact.append(cfbNode("p","abiq-cfb-impact-sub",s.changes.length
    ? "The highlighted weeks below now use different teams because of your manual selection."
    : "Pick a different team this week and ABIQ rebuilds the rest of the illustrative season rather than simply swapping one card."));
  const changeList=cfbNode("div","abiq-cfb-impact-list");
  for(const change of s.changes.slice(0,6)) {
    const line=cfbNode("div","abiq-cfb-change");
    const teams=cfbNode("strong","abiq-cfb-impact-teams");
    teams.append(cfbLogoNode(change.before),cfbNode("span","",change.before+" → "),
      cfbLogoNode(change.after),cfbNode("span","",change.after));
    line.append(cfbNode("span","","WK "+change.week),teams);
    changeList.appendChild(line);
  }
  if(s.changes.length>6) changeList.append(cfbNode("div","abiq-cfb-impact-sub","+"+(s.changes.length-6)+" other changed weeks; all are visible in the season outlook."));
  impact.append(changeList);

  const season=area.querySelector("#abiq-cfb-season-grid");
  season.replaceChildren();
  for(let w=1;w<=CFB_WEEKS;w++){
    const team=s.path[w], game=fixture.byTeam[team][w-1];
    const button=cfbNode("button","abiq-cfb-week-card"+
      (w===s.week?" active":"")+
      (s.changes.some(c=>c.week===w)?" changed":""));
    button.type="button";
    button.setAttribute("aria-label","View Week "+w+" survivor recommendations");
    button.append(
      cfbNode("span","","WEEK "+w),
      cfbLogoNode(team),
      cfbNode("strong","",team),
      cfbNode("small","",(game.home?"vs ":"@ ")+game.opponent+" · "+cfbPercent(game.probability))
    );
    if(s.locks[w]) button.append(cfbNode("em","","MANUAL PICK"));
    else if(s.changes.some(c=>c.week===w)) button.append(cfbNode("em","","REOPTIMIZED"));
    button.onclick=()=>{s.week=w;cfbRender(parentElement);};
    season.appendChild(button);
  }

  const teamSelect=area.querySelector("#abiq-cfb-team");
  teamSelect.replaceChildren();
  for(const team of fixture.names) {
    const option=cfbNode("option","",team);
    option.value=team;
    teamSelect.appendChild(option);
  }
  if(!fixture.byTeam[s.team]) s.team=s.path[s.week];
  teamSelect.value=s.team;
  teamSelect.onchange=()=>{s.team=teamSelect.value;cfbRender(parentElement);};

  const games=fixture.byTeam[s.team];
  const inPath=Object.keys(s.path).find(week=>s.path[week]===s.team);
  const selectedWeek=inPath?Number(inPath):null;
  area.querySelector("#abiq-cfb-team-summary").replaceChildren(
    cfbLogoNode(s.team),
    cfbNode("span","",s.team+" · 12 illustrated games and 2 bye weeks · "+
      (selectedWeek?"reserved for Week "+selectedWeek:"not currently reserved in this path"))
  );
  const table=cfbNode("table","abiq-cfb-table");
  const thead=cfbNode("thead","");
  const heads=cfbNode("tr","");
  for(const title of ["WEEK","MATCHUP","DEMO WIN CHANCE","SEASON STATUS"]) heads.append(cfbNode("th","",title));
  thead.append(heads);table.append(thead);
  const tbody=cfbNode("tbody","");
  for(let w=1;w<=CFB_WEEKS;w++){
    const game=games[w-1];
    const tr=cfbNode("tr",s.path[w]===s.team?"in-plan":"");
    tr.append(cfbNode("td","","W"+w));
    if(!game){
      tr.append(cfbNode("td","","BYE"),cfbNode("td","","—"),cfbNode("td","","No game"));
    } else {
      const matchup=cfbNode("td","");
      const pairing=cfbNode("span","abiq-cfb-table-matchup");
      pairing.append(cfbLogoNode(game.opponent),
        cfbNode("span","",(game.home?"vs ":"@ ")+game.opponent));
      matchup.append(pairing);
      tr.append(matchup,cfbNode("td","",cfbPercent(game.probability)));
      const status=cfbNode("td","");
      if(s.path[w]===s.team) status.append(cfbNode("strong","","IN PATH"));
      else {
        const tryButton=cfbNode("button","abiq-cfb-table-pick","TRY WEEK "+w);
        tryButton.type="button";
        tryButton.onclick=()=>{
          if(cfbOverride(w,s.team)) s.week=w;
          cfbRender(parentElement);
        };
        status.append(tryButton);
      }
      tr.append(status);
    }
    tbody.append(tr);
  }
  table.append(tbody);
  area.querySelector("#abiq-cfb-schedule-table").replaceChildren(table);
}

// Add the new page without changing the frozen NFL Dashboard/Forecasts renderers.
ICONS.survivor = `<svg viewBox="0 0 24 24"><path d="M12 3 4 7v5c0 5.5 3.5 8.8 8 10 4.5-1.2 8-4.5 8-10V7z"></path><path d="m8 12 2.5 2.5 5-5"></path></svg>`;
NAV_ITEMS.splice(2,0,["CFB Survivor","survivor"]);
const cfbOriginalInitialize = initialize;
initialize = function(component) {
  cfbOriginalInitialize(component);
  cfbRender(component.parentElement);
};
const cfbOriginalSetPage = setPage;
setPage = function(parentElement,pageName) {
  cfbOriginalSetPage(parentElement,pageName);
  parentElement.querySelector("#abiq-dashboard-root")?.classList.toggle("abiq-cfb-active",pageName==="CFB Survivor");
};


/* Mixed weekly Showcase board.
   Frozen public NFL Week 1 selections and constructed CFB survivor scenarios are
   deliberately separated by source. No live forecasts or provider calls. */
const ABIQ_WEEKLY_DASHBOARD = {week:1, data:null, parentElement:null};

function abiqWeeklyRows(week, data) {
  if (!Number.isInteger(week) || week<1 || week>CFB_WEEKS) return [];
  const rows=[];
  if (week===1) {
    for (const pick of (data.recommendations ?? []).slice(0,3)) {
      rows.push({sport:"NFL",conference:null,team:pick.team,opponent:pick.opponent,
        probability:pick.probability,confidence:pick.confidence,illustrative:false});
    }
  }
  for(const conference of ["SEC","BIG TEN"]) {
    const scenario=cfbScenario(conference);
    const team=scenario.path[week];
    const game=CFB_FIXTURES[conference].byTeam[team][week-1];
    if (!game) throw new Error("CFB season scenario has an unavailable Week "+week+" matchup.");
    rows.push({sport:"CFB",conference,team,opponent:game.opponent,
      home:game.home,probability:cfbPercent(game.probability),
      illustrative:true,manual:scenario.locks[week]===team});
  }
  return rows;
}

// DOM integration, after the pure board selection contract above.
function abiqWeeklyElement(tag,cls,text) {
  const node=document.createElement(tag);
  if (cls) node.className=cls;
  if (text!==undefined) node.textContent=String(text);
  return node;
}

function abiqWeeklyCard(row) {
  const card=abiqWeeklyElement("article","abiq-weekly-card abiq-surface");
  const head=abiqWeeklyElement("div","abiq-weekly-card-head");
  head.append(
    abiqWeeklyElement("span","abiq-weekly-source",row.sport==="NFL"?"NFL · FROZEN SNAPSHOT":row.conference+" · SURVIVOR DEMO"),
    abiqWeeklyElement("span","abiq-weekly-label",row.sport==="NFL"?row.confidence+" tier":(row.manual?"MANUAL PATH":"OPTIMAL PATH"))
  );
  const matchup=abiqWeeklyElement("div","abiq-weekly-matchup");
  const logos=abiqWeeklyElement("div","abiq-weekly-logos");
  if(row.sport==="NFL") {
    for(const team of [row.team,row.opponent]) {
      const img=abiqWeeklyElement("img");
      img.src=teamLogo(team);
      img.alt=team+" logo";
      img.loading="lazy";
      logos.append(img);
    }
  } else {
    logos.append(cfbLogoNode(row.team),cfbLogoNode(row.opponent));
  }
  const names=abiqWeeklyElement("div","abiq-weekly-names");
  names.append(
    abiqWeeklyElement("strong","",row.team),
    abiqWeeklyElement("small","",(row.sport==="CFB"?(row.home?"vs ":"@ "):"vs ")+row.opponent)
  );
  matchup.append(logos,names);
  const forecast=abiqWeeklyElement("div","abiq-weekly-probability");
  forecast.append(
    abiqWeeklyElement("strong","",row.probability),
    abiqWeeklyElement("span","",row.illustrative?"Illustrative win chance":"Frozen model forecast")
  );
  const action=abiqWeeklyElement("button","abiq-weekly-open",row.sport==="NFL"?"VIEW NFL FORECASTS  ›":"EXPLORE "+row.conference+"  ›");
  action.type="button";
  action.onclick=()=>{
    const root=ABIQ_WEEKLY_DASHBOARD.parentElement;
    if(row.sport==="NFL") {
      setPage(root,"Forecasts");
    } else {
      CFB_DEMO_STATE.conference=row.conference;
      cfbScenario(row.conference).week=ABIQ_WEEKLY_DASHBOARD.week;
      cfbRender(root);
      setPage(root,"CFB Survivor");
    }
  };
  card.append(head,matchup,forecast,action);
  return card;
}

function abiqWeeklyRender() {
  const {parentElement,data,week}=ABIQ_WEEKLY_DASHBOARD;
  if(!parentElement || !data) return;
  const panel=parentElement.querySelector("#abiq-weekly-command");
  if(!panel) return;
  const all=abiqWeeklyRows(week,data);
  panel.querySelector("#abiq-weekly-week").textContent="WEEK "+week;
  panel.querySelector("#abiq-weekly-nfl-title").textContent=week===1?"NFL · Frozen Week 1 example":"NFL · No snapshot for Week "+week;
  const nfl=panel.querySelector("#abiq-weekly-nfl-picks");
  nfl.replaceChildren();
  const nflRows=all.filter(row=>row.sport==="NFL");
  if(nflRows.length) nfl.append(...nflRows.map(abiqWeeklyCard));
  else nfl.append(abiqWeeklyElement("div","abiq-weekly-empty",
    "NFL forecasts for this week are not part of the frozen public Showcase. No later-week predictions have been fabricated."));
  const cfb=panel.querySelector("#abiq-weekly-cfb-picks");
  cfb.replaceChildren(...all.filter(row=>row.sport==="CFB").map(abiqWeeklyCard));
  panel.querySelector("#abiq-weekly-summary").textContent=week===1
    ?"3 frozen NFL forecast examples + 2 interactive CFB survivor selections"
    :"2 interactive CFB survivor selections · No NFL forecast issued in this public sample";
}

function abiqWeeklyInitialize(component) {
  const {parentElement,data}=component;
  ABIQ_WEEKLY_DASHBOARD.parentElement=parentElement;
  ABIQ_WEEKLY_DASHBOARD.data=data;
  const root=parentElement.querySelector("#abiq-dashboard-root");
  if(!root) return;
  root.classList.add("abiq-dashboard-active");
  // Keep the NFL payload frozen; week selection only changes local CFB demos.
  const select=parentElement.querySelector("#abiq-week-select");
  if (select) {
    select.replaceChildren();
    for(let w=1;w<=CFB_WEEKS;w++) {
      const option=document.createElement("option");
      option.value=String(w);
      option.textContent=w===1?"Week 1 · NFL + CFB":"Week "+w+" · CFB demo";
      select.appendChild(option);
    }
    select.value=String(ABIQ_WEEKLY_DASHBOARD.week);
    select.onchange=()=>{
      ABIQ_WEEKLY_DASHBOARD.week=Number(select.value);
      abiqWeeklyRender();
    };
  }
  const nav=parentElement.querySelector('.abiq-nav-item[data-page="Forecasts"] span:last-child');
  if (nav) nav.textContent="NFL Forecasts";
  abiqWeeklyRender();
}

const abiqWeeklyOriginalInitialize=initialize;
initialize=function(component) {
  abiqWeeklyOriginalInitialize(component);
  abiqWeeklyInitialize(component);
};
const abiqWeeklyOriginalSetPage=setPage;
setPage=function(parentElement,pageName) {
  abiqWeeklyOriginalSetPage(parentElement,pageName);
  parentElement.querySelector("#abiq-dashboard-root")?.classList.toggle("abiq-dashboard-active",pageName==="Dashboard");
  if(pageName==="Dashboard") abiqWeeklyRender();
};


document.addEventListener('DOMContentLoaded',()=>{try{initialize({parentElement:document,data});}catch(err){console.error('ABIQ Showcase initialization failed',err);document.getElementById('abiq-boot-error').hidden=false;}});
