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

  function buildStatCard(st, accent, title){
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

    return '<div style="background:#15171d;border:2px solid #2a2f3a;border-left:6px solid '+accent+';padding:20px 22px;margin:0 0 18px;box-shadow:5px 5px 0 rgba(0,0,0,.45);">'+
      (title ? '<div style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:20px;color:#fff;margin:0 0 14px;display:flex;align-items:center;gap:9px;"><span style="width:13px;height:13px;background:'+accent+';transform:skewX(-12deg);display:inline-block;flex:none;"></span>'+esc(title)+'</div>' : '')+
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;">'+chips+'</div>'+
      (bars ? '<div class="ii-grid2" style="display:grid;grid-template-columns:1fr 1fr;gap:14px 24px;">'+bars+'</div>' : '')+
      '</div>';
  }

  /* ---------------- SMART ARTICLE BODY RENDERER ---------------- */
  function sectionHeading(text){
    if (!text) return "";
    return '<div style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:22px;color:#2E6BFF;margin:0 0 12px;display:flex;align-items:center;gap:10px;">'+
      '<span style="width:14px;height:14px;background:#2E6BFF;transform:skewX(-12deg);display:inline-block;flex:none;"></span>'+esc(text)+'</div>';
  }

  function abilityRow(name, lvl, desc, opts){
    var badge  = (opts && opts.badge)  || "#FFD23D";
    var accent = (opts && opts.accent) || "#2E6BFF";
    return '<div style="background:#15171d;border:1px solid #2a2f3a;border-left:4px solid '+accent+';padding:13px 16px;margin:0 0 8px;display:flex;gap:14px;align-items:flex-start;">'+
      '<span style="font-family:\'Barlow\',sans-serif;font-weight:800;font-size:11px;letter-spacing:.5px;background:'+badge+';color:#0a0b0e;padding:4px 9px;white-space:nowrap;">LVL '+esc(lvl)+'</span>'+
      '<div><div style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:17px;color:#fff;">'+esc(name)+'</div>'+
      (desc ? '<div style="color:#9aa0ab;font-size:14px;line-height:1.5;margin-top:2px;">'+esc(desc)+'</div>' : '')+
      '</div></div>';
  }

  function calloutBox(heading, body, border, titleCol, bg, textCol, icon){
    var lines = String(body).replace(/\r/g,"").split("\n")
      .map(function(l){return l.trim();}).filter(function(l){return l!=="";});
    var inner = lines.map(function(l){
      if (l.charAt(0) === "•") return '<div style="padding:1px 0;">• '+esc(l.replace(/^•\s*/,""))+'</div>';
      return '<div style="padding:1px 0;">'+esc(l)+'</div>';
    }).join("");
    return '<div style="background:'+bg+';border:2px solid '+border+';border-left:6px solid '+border+';padding:16px 18px;margin:0 0 22px;">'+
      '<div style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:17px;color:'+titleCol+';margin-bottom:8px;">'+icon+' '+esc(heading.toUpperCase())+'</div>'+
      '<div style="color:'+textCol+';font-size:14px;line-height:1.7;">'+inner+'</div></div>';
  }

  function loreBlock(body){
    return '<div style="border-left:4px solid #6b7280;padding:6px 0 6px 18px;margin:0 0 24px;">'+
      '<div style="font-family:\'Bangers\',cursive;letter-spacing:2px;font-size:13px;color:#6b7280;margin-bottom:6px;">FROM THE COMIC / SHOW</div>'+
      '<div style="color:#b9bdc6;font-size:14px;line-height:1.7;font-style:italic;white-space:pre-wrap;">'+esc(body)+'</div></div>';
  }

  var LVL_RE = /^(.*?)\(Lvl:\s*(\d+)\)\s*$/;

  function parseBody(body, opts){
    var lines = String(body).replace(/\r/g,"").split("\n");
    var n = lines.length, i = 0, html = "";
    var bulletBuf = [], paraBuf = [];
    function flushBullets(){
      if (!bulletBuf.length) return;
      html += '<ul style="margin:0 0 14px;padding:0;list-style:none;">'+
        bulletBuf.map(function(b){
          return '<li style="position:relative;padding-left:18px;margin:4px 0;color:#b9bdc6;font-size:15px;line-height:1.6;">'+
            '<span style="position:absolute;left:0;color:#2E6BFF;font-weight:800;">▪</span>'+esc(b)+'</li>';
        }).join("")+'</ul>';
      bulletBuf = [];
    }
    function flushPara(){
      if (!paraBuf.length) return;
      html += '<p style="color:#b9bdc6;font-size:15px;line-height:1.7;margin:0 0 14px;white-space:pre-wrap;">'+esc(paraBuf.join("\n"))+'</p>';
      paraBuf = [];
    }
    while (i < n){
      var trimmed = lines[i].trim();
      var m = trimmed.match(LVL_RE);
      if (m){
        flushPara(); flushBullets();
        var name = m[1].trim(), lvl = m[2], desc = [];
        i++;
        while (i < n){
          var t2 = lines[i].trim();
          if (LVL_RE.test(t2)) break;
          if (t2 !== "") desc.push(t2);
          i++;
        }
        html += abilityRow(name, lvl, desc.join(" "), opts);
        continue;
      }
      if (trimmed.charAt(0) === "•"){ flushPara(); bulletBuf.push(trimmed.replace(/^•\s*/,"")); i++; continue; }
      if (trimmed === ""){ flushPara(); flushBullets(); i++; continue; }
      if (/:$/.test(trimmed) && trimmed.length <= 28){
        flushPara(); flushBullets();
        html += '<div style="font-family:\'Barlow\',sans-serif;font-weight:800;font-size:13px;letter-spacing:.5px;text-transform:uppercase;color:#FFD23D;margin:12px 0 4px;">'+esc(trimmed.replace(/:$/,""))+'</div>';
        i++; continue;
      }
      flushBullets(); paraBuf.push(trimmed); i++;
    }
    flushPara(); flushBullets();
    return html;
  }

  function rmEmoji(label){
    var l = label.toLowerCase();
    if (/power/.test(l)) return "⚡";
    if (/npc/.test(l)) return "👥";
    if (/system/.test(l)) return "⚙️";
    if (/structure/.test(l)) return "🏗️";
    if (/gameplay|survival/.test(l)) return "🎮";
    if (/event/.test(l)) return "📅";
    if (/race/.test(l)) return "🧬";
    if (/bug/.test(l)) return "🐛";
    if (/multiverse|dimension/.test(l)) return "🌌";
    if (/suit|item|armor|gear/.test(l)) return "🛡️";
    if (/world/.test(l)) return "🌍";
    return "📦";
  }

  function rmStatus(text, shipped){
    var t = text.trim(), icon, color, strike = "";
    if (/^✅/.test(t) || /\(done\)/i.test(t)){ icon="✔"; color="#9eff2a"; t=t.replace(/^✅\s*/,"").replace(/\s*\(done\)/i,""); }
    else if (/^❌/.test(t) || /\(cut\)/i.test(t)){ icon="✘"; color="#E11515"; strike="text-decoration:line-through;opacity:.65;"; t=t.replace(/^❌\s*/,"").replace(/\s*\(cut\)/i,""); }
    else if (/\(wip\)|concept made|set up done|no real function/i.test(t)){ icon="◑"; color="#FFD23D"; }
    else if (/\(maybe\)|\(tbd\)/i.test(t) || /^tbd$/i.test(t)){ icon="◻"; color="#6b7280"; }
    else if (shipped){ icon="✔"; color="#9eff2a"; }
    else { icon="◻"; color="#6b7280"; }
    return { icon:icon, color:color, text:t, strike:strike };
  }

  function rmItem(text, shipped){
    var s = rmStatus(text, shipped);
    return '<div style="display:flex;gap:8px;align-items:baseline;margin:3px 0;'+s.strike+'">'+
      '<span style="color:'+s.color+';font-weight:800;flex:none;font-size:13px;">'+s.icon+'</span>'+
      '<span style="color:#cdd2da;font-size:14px;line-height:1.5;">'+esc(s.text)+'</span></div>';
  }

  function rmSingleBox(text, shipped){
    var s = rmStatus(text, shipped);
    return '<div style="grid-column:1 / -1;background:#15171d;border:1px solid #2a2f3a;padding:13px 17px;display:flex;align-items:center;gap:10px;'+s.strike+'">'+
      '<span style="color:'+s.color+';font-weight:800;flex:none;font-size:14px;">'+s.icon+'</span>'+
      '<span style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:16px;color:#fff;">'+rmEmoji(s.text)+' '+esc(s.text)+'</span></div>';
  }

  function parseRoadmap(body, shipped){
    var blocks = String(body).replace(/\r/g,"").split(/\n\s*\n/);
    var introHtml = "", units = [];
    blocks.forEach(function(block){
      var lines = block.split("\n").map(function(l){return l.trim();}).filter(Boolean);
      if (!lines.length) return;
      var bullets = lines.filter(function(l){return l.charAt(0) === "•";});
      if (bullets.length === 0){
        introHtml += '<p style="color:#b9bdc6;font-size:15px;line-height:1.7;margin:0 0 16px;">'+esc(lines.join(" ").replace(/^✅\s*/,""))+'</p>';
      } else if (lines.length === 1){
        units.push({ single: lines[0].replace(/^•\s*/,"") });
      } else {
        var label = lines[0].replace(/^•\s*/,"").replace(/:$/,"");
        var items = lines.slice(1).map(function(l){return l.replace(/^•\s*/,"");}).filter(Boolean);
        units.push({ label: label, items: items });
      }
    });
    var grid = units.map(function(u){
      if (u.single !== undefined) return rmSingleBox(u.single, shipped);
      return '<div style="background:#15171d;border:1px solid #2a2f3a;padding:15px 17px;">'+
        '<div style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:16px;color:#2E6BFF;margin-bottom:10px;">'+rmEmoji(u.label)+' '+esc(u.label)+'</div>'+
        u.items.map(function(it){return rmItem(it, shipped);}).join("")+
      '</div>';
    }).join("");
    return introHtml + (grid ? '<div class="ii-grid2" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start;">'+grid+'</div>' : "");
  }

  function renderSection(s, cat, shipped){
    var heading = s.heading || "", body = s.body || "", hl = heading.toLowerCase();
    if (/weakness/.test(hl))    return calloutBox(heading, body, "#E11515", "#ff8a8a", "#1a0f0f", "#e6c9c9", "⚠");
    if (/acquisition/.test(hl)) return calloutBox(heading, body, "#9eff2a", "#9eff2a", "#0f1a12", "#cfe9c4", "★");
    if (/lore/.test(hl))        return loreBlock(body);
    if (cat === "roadmap"){
      return '<section style="margin-bottom:26px;">'+
        (/overview/.test(hl) ? "" : sectionHeading(heading))+ parseRoadmap(body, shipped) +'</section>';
    }
    var opts = /passive/.test(hl) ? {badge:"#9eff2a", accent:"#9eff2a"} : {badge:"#FFD23D", accent:"#2E6BFF"};
    return '<section style="margin-bottom:26px;">'+ sectionHeading(heading)+ parseBody(body, opts) +'</section>';
  }

  function renderBody(e, c){
    var cat = c ? c.id : e.cat;
    var shipped = false;
    if (cat === "roadmap"){
      shipped = e.shipped === true || (e.sections || []).some(function(s){ return /✅/.test(s.body || ""); });
    }
    var html = "";
    if (cat === "roadmap" && e.type){
      var label, bg, fg;
      if (e.wip){ label = "⏳ IN PROGRESS"; bg = "#FFD23D"; fg = "#0a0b0e"; }
      else if (shipped){ label = "✅ SHIPPED"; bg = "#9eff2a"; fg = "#0a0b0e"; }
      else { label = "🗓 PLANNED"; bg = "#2a2f3a"; fg = "#cdd2da"; }
      html += '<div style="margin:0 0 22px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">'+
        '<span style="font-family:\'Anton\',sans-serif;font-style:italic;font-size:15px;background:#2E6BFF;color:#fff;padding:5px 14px;">'+esc(e.type)+'</span>'+
        '<span style="font-family:\'Barlow\',sans-serif;font-weight:800;font-size:11px;letter-spacing:1px;background:'+bg+';color:'+fg+';padding:6px 12px;">'+label+'</span>'+
        '</div>';
    }
    (e.sections || []).forEach(function(s){ html += renderSection(s, cat, shipped); });
    return html;
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

    var accent = c ? c.color : "#2E6BFF";
    var statHtml = e.stats ? buildStatCard(e.stats, accent) : "";
    var rosterHtml = (e.roster && e.roster.length)
      ? e.roster.map(function(m){ return buildStatCard(m.stats, accent, m.name); }).join("")
      : "";
    var secs = e.sections || [];
    var secHtml = renderBody(e, c);

    if (!statHtml && !rosterHtml && !secs.length){
      body.innerHTML = "";
      if (notice) notice.style.display = "block";
      return;
    }
    if (notice) notice.style.display = "none";
    body.innerHTML = statHtml + rosterHtml + secHtml;
  }

  function catById(DATA, id){
    return (DATA.categories||[]).filter(function(c){return c.id===id;})[0] || null;
  }
})();