/* =====================================================================
   site.js — shared header + footer for every page.
   EDIT THE NAV / FOOTER IN ONE PLACE HERE. It updates on all pages.

   Each page just needs:
     <body data-page="home">           <- matches a NAV key below
     <div id="site-header"></div>      <- header drops in here
     ... page content ...
     <div id="site-footer"></div>      <- footer drops in here
     <script src="site.js"></script>
   ===================================================================== */

/* Add / rename / reorder pages here. key = data-page value. */
const NAV = [
  { key: "home",    label: "Home",   href: "/"      },
  { key: "wiki",    label: "Wiki",   href: "/wiki"       },
  { key: "server",  label: "Server", href: "/server"     },
  { key: "forum",   label: "Forum",  href: "/forum"      },
];

/* External links used in the footer. */
const LINKS = {
  curseforge: "#",   // paste your CurseForge mod URL
  discord:    "#",   // paste your Discord invite
  youtube:    "#",   // paste your YouTube channel URL
  patreon:    "#",   // paste your Patreon URL
  changelogs: "/changelogs",
};

function buildHeader(active){
  const links = NAV.map(n =>
    `<a href="${n.href}"${n.key === active ? ' class="active"' : ''}>${n.label}</a>`
  ).join("");
  return `
  <header class="site-header">
    <a class="brand" href="/"><span class="b1">INVINCIBLE</span> <span class="b2">INCORPORATED</span></a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false">MENU</button>
    <nav class="nav">${links}</nav>
  </header>`;
}

function buildFooter(){
  return `
  <footer class="site-footer">
    <a class="brand" href="/"><span class="b1">INVINCIBLE</span> <span class="b2">INC</span></a>
    <nav class="foot-links">
      <a href="${LINKS.discord}">Discord</a>
      <a href="${LINKS.youtube}">YouTube</a>
      <a href="${LINKS.patreon}">Patreon</a>
      <a href="${LINKS.curseforge}">CurseForge</a>
      <a href="/changelogs">Changelogs</a>
      <a href="/#wall">Feedback</a>
    </nav>
    <div class="foot-copy">INVINCIBLE INCORPORATED &copy; ${new Date().getFullYear()} &middot; A mod by DarknessDxD &middot; Not affiliated with the Invincible rights holders.</div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page || "";

  const headerSlot = document.getElementById("site-header");
  if (headerSlot) headerSlot.outerHTML = buildHeader(active);

  const footerSlot = document.getElementById("site-footer");
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  // mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});