(() => {
  "use strict";
  const config = window.GIS12_CONFIG;
  const grid = document.getElementById("exerciseGrid");
  const search = document.getElementById("searchInput");
  const empty = document.getElementById("emptyState");
  let activeFilter = "all";
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const validUrl = value => { try { const url = new URL(value); return ["https:", "http:"].includes(url.protocol); } catch { return false; } };
  const categoryLabel = { imagery: "REMOTE SENSING", gis: "GIS FOUNDATIONS", analysis: "SPATIAL ANALYSIS" };
  function action(url, label, className) {
    return validUrl(url) ? `<a class="${className}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : `<span class="${className} disabled" title="Link not added yet">${label} · Soon</span>`;
  }
  function card(ex) {
    return `<article class="exercise-card"><div class="card-top"><span class="card-number">${String(ex.number).padStart(2, "0")}</span><span class="card-category ${escapeHtml(ex.category)}">${categoryLabel[ex.category] || "EXERCISE"}</span></div><h3>${escapeHtml(ex.title)}</h3><p>${escapeHtml(ex.description)}</p><div class="card-topics">${ex.topics.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div><div class="card-actions">${action(ex.tutorialUrl, "View tutorial ↗", "card-primary")}${action(ex.wordUrl, "Word ↓", "card-secondary")}</div></article>`;
  }
  function render() {
    const query = search.value.trim().toLowerCase();
    const results = config.exercises.filter(ex => (activeFilter === "all" || ex.category === activeFilter) && [ex.title, ex.description, ...ex.topics, String(ex.number)].join(" ").toLowerCase().includes(query));
    grid.innerHTML = results.map(card).join("");
    empty.hidden = results.length !== 0;
  }
  search.addEventListener("input", render);
  document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter").forEach(b => { const selected = b === btn; b.classList.toggle("active", selected); b.setAttribute("aria-pressed", String(selected)); });
    render();
  }));
  const dataLink = document.getElementById("projectDataLink");
  if (validUrl(config.projectDataUrl)) dataLink.href = config.projectDataUrl;
  else { dataLink.removeAttribute("href"); dataLink.removeAttribute("target"); dataLink.classList.add("disabled"); document.getElementById("projectDataStatus").textContent = "Folder link will be added soon"; }
  const menu = document.getElementById("menuToggle");
  const nav = document.getElementById("navLinks");
  menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", String(open)); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }));
  render();
})();
