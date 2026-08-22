/* =====================================================================
   rank.js — powers every rank detail page under /shop/shop-ranks/.

   ADD OR EDIT A RANK: change the RANKS list below. Each rank needs a
   folder at /shop/shop-ranks/rank-<key>/ containing an index.html copied
   from any other rank folder (they're identical) and the art as
   <key>.png. Everything else on the page is generated from here.

   SHOW_KITS : flip to true to show the KITS block on every rank.
   TOKEN     : Tebex headless public token used for checkout.
   ===================================================================== */
var SHOW_KITS = false;
var TOKEN = 'v7x1-d56f91e2669f8af87a3481d30edc66e27808fe60';
var API   = 'https://headless.tebex.io/api';

var RANKS = [
  {
    key:'beta', name:'BETA TESTER', price:'$9.99', tier:'BETA ACCESS',
    color:'#2E6BFF', color2:'#5b8cff', art:'/shop/shop-ranks/rank-beta/beta.png', pkg:6398720,
    tagline:'Get in before full release.',
    lore:'Join the test build early, help shape the mod, and carry the Beta tag as proof you were here first.',
    includesTitle:'THIS PACKAGE INCLUDES',
    includes:['Beta Tester rank','Beta test version of the mod','Early access to the server','Exclusive "Beta" tag'],
    commands:[], rewards:[], kits:[], keys:[],
    note:'All advancements on the server are reset at full release. Beta versions of the mod are delivered through Discord.'
  },
  {
    key:'atomic', name:'ATOMIC', price:'$9.99', tier:'ENTRY TIER',
    color:'#EC4899', color2:'#F9A8D4', art:'/shop/shop-ranks/rank-atomic/atomic.png', pkg:6402001,
    tagline:'Your first taste of power.',
    lore:'The entry tier — a clean tag, a handy command kit and room to make the server home.',
    includesTitle:'PERKS',
    includes:['Atomic tag in-game and on Discord','Create up to 4 homes — /sethome'],
    commands:['/seen','/hat','/enderchest','/anvil','/furnace'],
    rewards:['$10,000 in-game currency'],
    kits:['Atomic Kit'],
    keys:['1× Atomic Crate Key'],
    note:''
  },
  {
    key:'immortal', name:'IMMORTAL', price:'$24.99', tier:'TIER II',
    color:'#FFD23D', color2:'#FFD23D', art:'/shop/shop-ranks/rank-immortal/immortal.png', pkg:6402033,
    tagline:'Rise above the mortals.',
    lore:'A wider command kit, more homes and a tag that marks you out wherever you go.',
    includesTitle:'PERKS',
    includes:['Immortal tag in-game and on Discord','Create up to 6 homes — /sethome'],
    commands:['/seen','/hat','/enderchest','/anvil','/furnace','/back','/feed','/repair','/brew'],
    rewards:['$20,000 in-game currency'],
    kits:['Atomic Kit','Immortal Kit'],
    keys:['1× Atomic Crate Key','1× Immortal Crate Key'],
    note:''
  },
  {
    key:'invincible', name:'INVINCIBLE', price:'$39.99', tier:'TIER III',
    color:'#E11515', color2:'#ff5a5a', art:'/shop/shop-ranks/rank-invincible/invincible.png', pkg:6402061,
    tagline:'Become unstoppable.',
    lore:'The popular pick — a deep command arsenal, a bigger payout and space to build big.',
    includesTitle:'PERKS',
    includes:['Invincible tag in-game','Create up to 8 homes — /sethome'],
    commands:['/seen','/hat','/enderchest','/anvil','/furnace','/back','/feed','/repair','/brew','/smeltall','/suicide','/extinguish'],
    rewards:['$45,000 in-game currency'],
    kits:['Atomic Kit','Immortal Kit','Invincible Kit'],
    keys:['1× Atomic Crate Key','1× Immortal Crate Key','1× Invincible Crate Key','1× Drip Crate Key'],
    note:''
  },
  {
    key:'conquest', name:'CONQUEST', price:'$59.99', tier:'ULTIMATE',
    color:'#8B2FE0', color2:'#C79BFF', art:'/shop/shop-ranks/rank-conquest/conquest.png', pkg:6402078,
    tagline:'Rule it all.',
    lore:'The ultimate tier — the full command set, the biggest reward and a custom race or power made for you.',
    includesTitle:'PERKS',
    includes:['Conquest tag in-game','Create up to 10 homes — /sethome'],
    commands:['/seen','/hat','/enderchest','/anvil','/furnace','/back','/feed','/repair','/brew','/smeltall','/sell hand','/suicide','/extinguish','/workbench','/repairall'],
    rewards:['$105,000 in-game currency',
             "Coupon for a custom Race or Power, created just for you on the server. You can enable your custom pick, but doing so removes your current race/power — if you later disable it you'll need to randomize to get one back."],
    kits:['Atomic Kit','Immortal Kit','Invincible Kit','Conquest Kit'],
    keys:['1× Atomic Crate Key','1× Immortal Crate Key','1× Invincible Crate Key','1× Conquest Crate Key','2× Drip Crate Key','1× Weapons Crate Key'],
    note:''
  }
];

(function(){
  function esc(t){ return String(t==null?'':t).replace(/[&<>"]/g, function(x){
    return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[x]; }); }

  /* which rank is this page? taken from the folder name, e.g. /rank-atomic/ */
  function currentKey(){
    var m = String(location.pathname).match(/rank[-=]([a-z]+)/i);
    return m ? m[1].toLowerCase() : 'invincible';
  }

  function block(title, items, cls){
    if (!items || !items.length) return '';
    if (cls === 'chips'){
      return '<h3>' + esc(title) + '</h3><div class="chips">' +
        items.map(function(i){ return '<span class="chip' + (title === 'CRATE KEYS' ? ' chip--key' : '') + '">' + esc(i) + '</span>'; }).join('') +
        '</div>';
    }
    return '<h3>' + esc(title) + '</h3><div class="list">' +
      items.map(function(i){ return '<div class="item">' + esc(i) + '</div>'; }).join('') + '</div>';
  }

  document.addEventListener('DOMContentLoaded', function(){
    var key = currentKey();
    var sel = RANKS.filter(function(r){ return r.key === key; })[0] || RANKS[0];
    var others = RANKS.filter(function(r){ return r.key !== sel.key; });
    var kits = SHOW_KITS ? sel.kits : [];

    document.title = sel.name + ' Rank — Invincible Inc';
    document.documentElement.style.setProperty('--rank', sel.color);
    document.documentElement.style.setProperty('--rank2', sel.color2);

    document.getElementById('rTier').textContent    = sel.tier;
    document.getElementById('rTagline').textContent = sel.tagline;
    document.getElementById('rTitle').textContent   = sel.name;
    document.getElementById('rLore').textContent    = sel.lore;
    document.getElementById('rPrice').textContent   = sel.price;
    document.getElementById('rCrumbName').textContent = sel.name;

    var art = document.getElementById('rArt');
    art.src = sel.art;
    art.alt = sel.name + ' rank art';
    art.onerror = function(){ this.style.display = 'none'; };

    document.getElementById('rBody').innerHTML =
      block(sel.includesTitle || 'PERKS', sel.includes) +
      block('REWARDS', sel.rewards) +
      block('KITS', kits) +
      block('CRATE KEYS', sel.keys, 'chips') +
      block('COMMANDS', sel.commands, 'chips') +
      (sel.note ? '<div class="notebox"><b>NOTE</b><p>' + esc(sel.note) + '</p></div>' : '');

    var buy = document.getElementById('rBuy');
    buy.textContent = 'BUY ' + sel.name;

    document.getElementById('rOthers').innerHTML = others.map(function(r){
      return '<a class="orow" href="/shop/shop-ranks/rank-' + r.key + '/index.html" style="border-left-color:' + r.color + '">' +
        '<span class="oname">' + esc(r.name) + '</span><span class="oprice">' + esc(r.price) + '</span></a>';
    }).join('');

    /* remember the username between shop pages */
    var input = document.getElementById('rUser');
    try { var saved = localStorage.getItem('iwb_mc_user'); if (saved) input.value = saved; } catch(e){}

    /* ---------------- Tebex headless checkout ---------------- */
    var err = document.getElementById('rErr');
    var label = 'BUY ' + sel.name;

    buy.addEventListener('click', function(e){
      e.preventDefault();
      var name = (input.value || '').trim();
      if (!name){
        err.textContent = 'Enter your Minecraft username first.';
        err.classList.add('show');
        input.focus();
        return;
      }
      err.classList.remove('show');
      try { localStorage.setItem('iwb_mc_user', name); } catch(_){}
      buy.textContent = 'LOADING…';
      buy.setAttribute('aria-disabled', 'true');

      fetch(API + '/accounts/' + TOKEN + '/baskets', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify({
          username: name,
          complete_url: location.origin + '/shop/shop-ranks/index.html',
          cancel_url: location.href,
          complete_auto_redirect: true
        })
      })
      .then(function(r){ if (!r.ok) throw new Error('basket ' + r.status); return r.json(); })
      .then(function(j){
        var basket = j.data;
        var ident = basket.ident;
        var checkout = (basket.links && basket.links.checkout) || null;
        return fetch(API + '/baskets/' + ident + '/packages', {
          method:'POST',
          headers:{ 'Content-Type':'application/json', Accept:'application/json' },
          body: JSON.stringify({ package_id: sel.pkg, quantity: 1 })
        })
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(add){
          if (add && add.data && add.data.links && add.data.links.checkout) checkout = add.data.links.checkout;
          return fetch(API + '/accounts/' + TOKEN + '/baskets/' + ident + '/auth?returnUrl=' +
                       encodeURIComponent(checkout || location.href))
            .then(function(r){ return r.ok ? r.json() : null; })
            .then(function(aj){
              var list = Array.isArray(aj) ? aj : ((aj && aj.data) ? aj.data : []);
              return (list && list[0] && list[0].url) ? list[0].url : null;
            })
            .catch(function(){ return null; });
        })
        .then(function(authUrl){
          var dest = authUrl || checkout;
          if (!dest) throw new Error('no checkout');
          location.href = dest;
        });
      })
      .catch(function(){
        buy.textContent = label;
        buy.removeAttribute('aria-disabled');
        err.textContent = 'Something went wrong — please try again.';
        err.classList.add('show');
      });
    });
  });
})();
