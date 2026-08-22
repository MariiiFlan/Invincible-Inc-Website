/* =====================================================================
   site.js — shared announcement bar + header + footer for every page.
   EDIT THE NAV / LINKS / BANNER IN ONE PLACE HERE. It updates everywhere.

   Each page just needs:
     <body data-page="home">           <- matches a NAV key below
     <div id="site-header"></div>      <- banner + header drop in here
     ... page content ...
     <div id="site-footer"></div>      <- footer drops in here
     <script src="/site.js"></script>
   ===================================================================== */

/* Add / rename / reorder pages here. key = data-page value. */
const NAV = [
  { key: "home",       label: "Home",       href: "/"           },
  { key: "wiki",       label: "Wiki",       href: "/wiki"       },
  { key: "server",     label: "Server",     href: "/server"     },
  { key: "shop",       label: "Shop",       href: "/shop"       },
  { key: "changelogs", label: "Changelogs", href: "/changelogs" },
  { key: "forum",      label: "Forum",      href: "/forum"      },
];

/* External links used in the header + footer. */
const LINKS = {
  discord:    "https://discord.gg/R9QC25BS8n",
  youtube:    "https://www.youtube.com/@DarknessDxD",
  patreon:    "https://www.patreon.com/c/u95879664",
  curseforge: "https://www.curseforge.com/minecraft/mc-mods/invinciblemod",
  install:    "/install",
  changelogs: "/changelogs",
};

/* ---------------------------------------------------------------------
   ANNOUNCEMENT BAR — set BANNER.on = false to hide it site-wide.
   Bump BANNER.id whenever you change the message so it re-shows for
   everyone who dismissed the previous one.
   --------------------------------------------------------------------- */
const BANNER = {
  on:    true,
  id:    "v2-lineage",
  tag:   "COMING SOON",
  text:  "v2.0 — Lineage / Server Ready: two new powers, the Battle Pass, Vendettas, Factions and the flight overhaul.",
  cta:   "READ THE CHANGELOG",
  href:  "/changelogs#v2-0",
};

/* Social icon paths (24×24 viewBox). */
const ICONS = {
  discord: "M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.2 14.2 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.349-1.22.645-1.873.892a.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.056c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.42 0-1.332.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.42 0 1.332-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.332.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.42 0 1.332-.946 2.418-2.157 2.418Z",
  youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  patreon: "M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6Z",
};

function icon(name, size){
  return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" style="width:${size}px;height:${size}px;"><path d="${ICONS[name]}"></path></svg>`;
}

function buildBanner(){
  if (!BANNER.on) return "";
  return `
  <div class="announce" id="site-announce" data-banner="${BANNER.id}" hidden>
    <a class="announce-link" href="${BANNER.href}">
      <span class="announce-tag">${BANNER.tag}</span>
      <span class="announce-text">${BANNER.text}</span>
      <span class="announce-cta">${BANNER.cta} &rarr;</span>
    </a>
    <button class="announce-x" type="button" aria-label="Dismiss announcement">&#10005;</button>
  </div>`;
}

function buildHeader(active){
  const links = NAV.map(n =>
    `<a href="${n.href}"${n.key === active ? ' class="active" aria-current="page"' : ''}>${n.label}</a>`
  ).join("");
  return `
  <header class="site-header">
    <a class="brand" href="/"><span class="b1">INVINCIBLE</span> <span class="b2">INCORPORATED</span></a>
    <button class="nav-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="primary-nav">MENU</button>
    <div class="header-right">
      <nav class="nav" id="primary-nav" aria-label="Primary">${links}<a class="nav-install" href="${LINKS.install}">Install</a></nav>
      <div class="header-social">
        <a href="${LINKS.discord}" target="_blank" rel="noopener" aria-label="Discord">${icon("discord", 22)}</a>
        <a href="${LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube">${icon("youtube", 22)}</a>
        <a href="${LINKS.patreon}" target="_blank" rel="noopener" aria-label="Patreon">${icon("patreon", 20)}</a>
      </div>
      <a class="header-cta" href="${LINKS.install}">INSTALL</a>
    </div>
  </header>`;
}

function buildFooter(){
  return `
  <footer class="site-footer">
    <div class="foot-top">
      <a class="brand" href="/"><span class="b1">INVINCIBLE</span> <span class="b2">INC</span></a>
      <nav class="foot-links" aria-label="Footer">
        <a href="/install">Install</a>
        <a href="/wiki">Wiki</a>
        <a href="/changelogs">Changelogs</a>
        <a href="/shop">Shop</a>
        <a href="${LINKS.discord}" target="_blank" rel="noopener">Discord</a>
        <a href="${LINKS.youtube}" target="_blank" rel="noopener">YouTube</a>
        <a href="${LINKS.patreon}" target="_blank" rel="noopener">Patreon</a>
        <a href="${LINKS.curseforge}" target="_blank" rel="noopener">CurseForge</a>
        <a href="/#wall">Feedback</a>
      </nav>
    </div>
    <div class="foot-copy">INVINCIBLE INCORPORATED &copy; ${new Date().getFullYear()} &middot; A mod by DarknessDxD &middot; Fan project. Not affiliated with Skybound or the Invincible rights holders.</div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page || "";

  const headerSlot = document.getElementById("site-header");
  if (headerSlot) headerSlot.outerHTML = buildBanner() + buildHeader(active);

  const footerSlot = document.getElementById("site-footer");
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  /* ---- announcement bar: show unless this exact banner was dismissed ---- */
  const bar = document.getElementById("site-announce");
  if (bar){
    let dismissed = null;
    try { dismissed = localStorage.getItem("ii-banner"); } catch (e) { /* storage blocked */ }
    if (dismissed !== BANNER.id) bar.hidden = false;
    bar.querySelector(".announce-x").addEventListener("click", () => {
      bar.hidden = true;
      try { localStorage.setItem("ii-banner", BANNER.id); } catch (e) { /* storage blocked */ }
    });
  }

  /* ---- mobile menu ---- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "CLOSE" : "MENU";
    });
  }
});
