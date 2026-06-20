/* =====================================================================
   wiki.js — powers all three wiki pages.
   Each page sets <body data-view="picker|category|article">.
   Content comes from wiki-data.js (window.WIKI_DATA).
   ===================================================================== */
(function(){
  function esc(s){
    return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;")
      .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }
  function param(k){ return new URLSearchParams(location.search).get(k); }

  document.addEventListener("DOMContentLoaded", function(){
    var DATA = window.WIKI_DATA || { categories:[], entries:[] };
    var view = document.body.dataset.view;
    if (view === "picker")  renderPicker(DATA);
    if (view === "category") renderCategory(DATA);
    if (view === "article")  renderArticle(DATA);
  });

  /* ---------------- PICKER (wiki.html) ---------------- */
  function renderPicker(DATA){
    var grid = document.getElementById("cat-grid");
    var results = document.getElementById("search-results");
    var search = document.getElementById("wiki-search");

    grid.innerHTML = DATA.categories.map(function(c){
      var count = DATA.entries.filter(function(e){return e.cat===c.id && !e.hidden;}).length;
      return '<a class="cat-card" href="/category?cat='+encodeURIComponent(c.id)+'" '+
        'style="--cat:'+c.color+'">'+
        '<div class="cat-ico">'+c.icon+'</div>'+
        '<div class="cat-name">'+esc(c.name)+'</div>'+
        '<div class="cat-blurb">'+esc(c.blurb||"")+'</div>'+
        '<div class="cat-foot"><span class="cat-count">'+count+' entr'+(count===1?'y':'ies')+'</span>'+
        '<span class="cat-view">VIEW →</span></div></a>';
    }).join("");

    if (search){
      search.addEventListener("input", function(){
        var q = search.value.trim().toLowerCase();
        if (!q){ results.innerHTML=""; results.classList.remove("show"); grid.style.display=""; return; }
        grid.style.display = "none";
        var hits = DATA.entries.filter(function(e){
          if (e.hidden) return false;
          return e.name.toLowerCase().indexOf(q) >= 0 || (e.type||"").toLowerCase().indexOf(q) >= 0;
        });
        results.classList.add("show");
        if (!hits.length){
          results.innerHTML = '<div class="search-empty">No matches for "'+esc(search.value)+'". Try another term, or browse the categories.</div>';
          return;
        }
        results.innerHTML = hits.map(function(e){
          var c = catById(DATA, e.cat);
          return '<a class="result-row" href="/article?cat='+encodeURIComponent(e.cat)+'&id='+encodeURIComponent(e.id)+'">'+
            '<span class="result-name">'+esc(e.name)+'</span>'+
            '<span class="result-meta">'+esc(e.type||"")+' · '+esc(c?c.name:e.cat)+'</span>'+
            '<span class="result-go">→</span></a>';
        }).join("");
      });
    }
  }

  /* ---------------- CATEGORY (category.html) ---------------- */
  function renderCategory(DATA){
    var c = catById(DATA, param("cat"));
    var crumb = document.getElementById("crumb-cat");
    var title = document.getElementById("cat-title");
    var ico   = document.getElementById("cat-ico");
    var list  = document.getElementById("entry-list");
    var notice= document.getElementById("uc-notice");

    if (!c){
      title.textContent = "Category not found";
      list.innerHTML = '<p class="muted-note">That category doesn\'t exist. <a href="/wiki">Back to the wiki</a>.</p>';
      return;
    }
    document.title = c.name + " — Invincible Inc Wiki";
    crumb.textContent = c.name;
    title.textContent = c.name.toUpperCase();
    if (ico) ico.textContent = c.icon;
    document.documentElement.style.setProperty("--cat", c.color);

    var rows = DATA.entries.filter(function(e){return e.cat===c.id && !e.hidden;});
    if (!rows.length){
      list.innerHTML = "";
      if (notice) notice.style.display = "block";
      return;
    }
    if (notice) notice.style.display = "none";
    list.innerHTML =
      '<div class="entry-row entry-head"><span>Name</span><span>Type</span><span></span></div>' +
      rows.map(function(e){
        return '<a class="entry-row" href="/article?cat='+encodeURIComponent(e.cat)+'&id='+encodeURIComponent(e.id)+'">'+
          '<span class="entry-name">'+esc(e.name)+(e.wip?' <em class="wip-tag">WIP</em>':'')+'</span>'+
          '<span class="entry-type">'+esc(e.type||"—")+'</span>'+
          '<span class="entry-go">VIEW →</span></a>';
      }).join("");
  }

  /* ---------------- STAT CARD (NPC stats) ---------------- */
  function statBar(label, value, max, color){
    if (value == null || value === "") return "";
    var numeric = (typeof value === "number");
    var display = numeric ? value : esc(String(value));
    var fillStyle;
    if (numeric){
      var pct = Math.max(4, Math.min(100, (value / max) * 100));
      fillStyle = "width:"+pct+"%;background:"+color;
    } else {
      // ranged value (e.g. "100–230") — faint full bar, value shown as text
      fillStyle = "width:100%;background:"+color+";opacity:.30";
    }
    return '<div>'+
      '<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px;">'+
        '<span style="font-family:\'Barlow\',sans-serif;font-weight:800;font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#9aa0ab;">'+label+'</span>'+
        '<span style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:17px;color:#fff;">'+display+'</span>'+
      '</div>'+
      '<div style="height:9px;background:#0B0E15;border:1px solid #3a414f;overflow:hidden;">'+
        '<div style="height:100%;'+fillStyle+'"></div>'+
      '</div></div>';
  }

  function buildStatCard(st, accent){
    if (!st) return "";
    accent = accent || "#2E6BFF";
    var rep = st.reputation;
    var repBorder, repColor;
    if (typeof rep === "number" && rep > 0){ repBorder = "#9eff2a"; repColor = "#9eff2a"; }
    else if (typeof rep === "number" && rep < 0){ repBorder = "#E11515"; repColor = "#ff8a8a"; }
    else { repBorder = "#3a414f"; repColor = "#b9bdc6"; }

    function chip(label, val, border, color, labelColor){
      border = border || "#2a2f3a"; color = color || "#fff"; labelColor = labelColor || "#6b7280";
      return '<span style="font-family:\'Barlow\',sans-serif;font-weight:800;font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:'+color+';background:#0B0E15;border:2px solid '+border+';padding:6px 12px;display:inline-flex;align-items:center;gap:6px;">'+
        '<span style="color:'+labelColor+';font-weight:700;">'+label+'</span> '+esc(String(val))+'</span>';
    }

    var chips = "";
    if (st.race)        chips += chip("Race", st.race);
    if (st.power)       chips += chip("Power", st.power);
    if (st.affiliation) chips += chip("Affiliation", st.affiliation);
    if (rep != null)    chips += chip("Rep", rep, repBorder, repColor, repColor);

    var bars =
      statBar("Strength",     st.str,     500, "#ff5a4d") +
      statBar("Durability",   st.dura,    500, "#2E6BFF") +
      statBar("Mastery",      st.mastery, 100, "#FFD23D") +
      statBar("Health",       st.health,  500, "#9eff2a") +
      statBar("Flight Speed", st.flight,  20,  "#46d6ff");

    return '<div style="background:#15171d;border:2px solid #2a2f3a;border-left:6px solid '+accent+';padding:20px 22px;margin:0 0 30px;box-shadow:5px 5px 0 rgba(0,0,0,.45);">'+
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;">'+chips+'</div>'+
      (bars ? '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px 24px;">'+bars+'</div>' : '')+
      '</div>';
  }

  /* ---------------- ARTICLE (article.html) ---------------- */
  function renderArticle(DATA){
    var c = catById(DATA, param("cat"));
    var e = (DATA.entries||[]).filter(function(x){return x.id===param("id") && x.cat===param("cat");})[0];
    var crumbCat = document.getElementById("crumb-cat");
    var crumbArt = document.getElementById("crumb-art");
    var title = document.getElementById("art-title");
    var wip   = document.getElementById("art-wip");
    var body  = document.getElementById("art-body");
    var notice= document.getElementById("uc-notice");

    if (c){ crumbCat.textContent = c.name; crumbCat.href = "/category?cat="+encodeURIComponent(c.id);
            document.documentElement.style.setProperty("--cat", c.color); }
    if (!e){
      title.textContent = "Article not found";
      crumbArt.textContent = "—";
      body.innerHTML = '<p class="muted-note">That article doesn\'t exist yet. <a href="/wiki">Back to the wiki</a>.</p>';
      return;
    }
    document.title = e.name + " — Invincible Inc Wiki";
    crumbArt.textContent = e.name;
    title.textContent = e.name.toUpperCase();
    if (wip) wip.style.display = e.wip ? "inline-block" : "none";

    var statHtml = e.stats ? buildStatCard(e.stats, c ? c.color : "#2E6BFF") : "";
    var secs = e.sections || [];
    var secHtml = secs.map(function(s){
      return '<section class="art-section"><h2>'+esc(s.heading||"")+'</h2>'+
        '<p>'+esc(s.body||"")+'</p></section>';
    }).join("");

    if (!statHtml && !secs.length){
      body.innerHTML = "";
      if (notice) notice.style.display = "block";
      return;
    }
    if (notice) notice.style.display = "none";
    body.innerHTML = statHtml + secHtml;
  }

  function catById(DATA, id){
    return (DATA.categories||[]).filter(function(c){return c.id===id;})[0] || null;
  }
})();