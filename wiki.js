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
      return '<a class="cat-card" href="category.html?cat='+encodeURIComponent(c.id)+'" '+
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
          return '<a class="result-row" href="article.html?cat='+encodeURIComponent(e.cat)+'&id='+encodeURIComponent(e.id)+'">'+
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
      list.innerHTML = '<p class="muted-note">That category doesn\'t exist. <a href="wiki.html">Back to the wiki</a>.</p>';
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
        return '<a class="entry-row" href="article.html?cat='+encodeURIComponent(e.cat)+'&id='+encodeURIComponent(e.id)+'">'+
          '<span class="entry-name">'+esc(e.name)+(e.wip?' <em class="wip-tag">WIP</em>':'')+'</span>'+
          '<span class="entry-type">'+esc(e.type||"—")+'</span>'+
          '<span class="entry-go">VIEW →</span></a>';
      }).join("");
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

    if (c){ crumbCat.textContent = c.name; crumbCat.href = "category.html?cat="+encodeURIComponent(c.id);
            document.documentElement.style.setProperty("--cat", c.color); }
    if (!e){
      title.textContent = "Article not found";
      crumbArt.textContent = "—";
      body.innerHTML = '<p class="muted-note">That article doesn\'t exist yet. <a href="wiki.html">Back to the wiki</a>.</p>';
      return;
    }
    document.title = e.name + " — Invincible Inc Wiki";
    crumbArt.textContent = e.name;
    title.textContent = e.name.toUpperCase();
    if (wip) wip.style.display = e.wip ? "inline-block" : "none";

    var secs = e.sections || [];
    if (!secs.length){
      body.innerHTML = "";
      if (notice) notice.style.display = "block";
      return;
    }
    if (notice) notice.style.display = "none";
    body.innerHTML = secs.map(function(s){
      return '<section class="art-section"><h2>'+esc(s.heading||"")+'</h2>'+
        '<p>'+esc(s.body||"")+'</p></section>';
    }).join("");
  }

  function catById(DATA, id){
    return (DATA.categories||[]).filter(function(c){return c.id===id;})[0] || null;
  }
})();