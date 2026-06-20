/* =====================================================================
   wall.js — Feedback Wall + "Post" modal.

   The wall reads posts from suggestions.json (edit that file to control
   what appears). The Post button opens a form that sends submissions to
   Discord. Approve good ones by adding them to suggestions.json.

   >>> SET THIS <<<  Paste your Discord webhook URL (same one as before).
   See README.txt. Security note: a webhook in client-side JS is visible
   in page source; fine for a small community, swap for a relay if spammed.
   ===================================================================== */
const WEBHOOK_URL = ""; // e.g. "https://discord.com/api/webhooks/123.../abc..."

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("wall-grid");
  if (!grid) return;

  const state = { tab: "suggestions", scope: "all", posts: [] };

  /* ---------- render ---------- */
  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }

  function scopeTag(scope){ return scope === "server" ? "Server" : "Invincible Inc"; }
  function typeTag(type){ return type === "bugs" ? "bug" : "suggestion"; }

  function cardHTML(p){
    const media = p.media
      ? `<div class="card-media"><span>${esc(p.media)}</span></div>` : "";
    const body = p.body
      ? `<p class="card-body">${esc(p.body)}</p>` : "";
    return `
      <article class="card">
        <div class="card-top">
          <span class="card-user">${esc(p.user || "Anonymous Hero")}</span>
          <span class="card-time">${esc(p.time || "")}</span>
        </div>
        <div class="card-title">${esc(p.title || "")}</div>
        ${media}
        ${body}
        <div class="card-tags">
          <span class="card-tag">${typeTag(p.type)}</span>
          <span class="card-tag">${esc(scopeTag(p.scope))}</span>
        </div>
        <div class="card-foot">
          <span class="card-comments">💬 ${esc(p.comments != null ? p.comments : 0)}</span>
          <span class="card-react">${esc(p.reaction || "🙂 0")}</span>
        </div>
      </article>`;
  }

  function emptyHTML(){
    const isSug = state.tab === "suggestions";
    return `
      <div class="wall-empty">
        <div class="ico">${isSug ? "💡" : "🐞"}</div>
        <div class="et">${isSug ? "No suggestions yet" : "No bugs reported yet"}</div>
        <p class="em">${isSug
          ? "Be the first to share an idea for the Invincible mod or server."
          : "Nothing's broken here yet — if you find something, let the team know."}</p>
        <button type="button" class="wall-post-btn" id="empty-post">${isSug ? "+ POST A SUGGESTION" : "+ REPORT A BUG"}</button>
      </div>`;
  }

  function render(){
    const items = state.posts.filter(p =>
      p.type === state.tab && (state.scope === "all" || p.scope === state.scope)
    );
    if (!items.length){
      grid.style.columnCount = "1";
      grid.innerHTML = emptyHTML();
      const eb = document.getElementById("empty-post");
      if (eb) eb.addEventListener("click", () => openModal(state.tab));
    } else {
      grid.style.columnCount = "";
      grid.innerHTML = items.map(cardHTML).join("");
    }
  }

  /* ---------- tabs + pills ---------- */
  document.querySelectorAll(".wall-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".wall-tab").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.tab = btn.dataset.tab;
      // keep the heading post button label in sync
      const pb = document.getElementById("open-post");
      if (pb) pb.textContent = state.tab === "suggestions" ? "+ POST A SUGGESTION" : "+ REPORT A BUG";
      render();
    });
  });
  document.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill").forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.scope = btn.dataset.scope;
      render();
    });
  });

  /* ---------- load data ---------- */
  if (Array.isArray(window.WALL_POSTS)){
    state.posts = window.WALL_POSTS;
    render();
  } else {
    fetch("suggestions.json")
      .then(r => r.json())
      .then(d => { state.posts = (d && d.posts) || []; render(); })
      .catch(() => { state.posts = []; render(); });
  }

  /* =====================================================================
     POST MODAL
     ===================================================================== */
  const modal = document.getElementById("post-modal");
  const m = {
    type: "suggestions", scope: "mod",
    title: document.getElementById("m-title"),
    titleLabel: document.getElementById("m-title-label"),
    body: document.getElementById("m-body"),
    bodyLabel: document.getElementById("m-body-label"),
    counter: document.getElementById("m-counter"),
    name: document.getElementById("m-name"),
    discord: document.getElementById("m-discord"),
    attach: document.getElementById("m-attach"),
    file: document.getElementById("m-file"),
    submit: document.getElementById("m-submit"),
    status: document.getElementById("m-status"),
    heading: document.getElementById("modal-title"),
  };

  function applyType(type){
    m.type = type;
    const isSug = type === "suggestions";
    document.querySelectorAll("#seg-type .seg-btn").forEach(b =>
      b.classList.toggle("is-active", b.dataset.type === type));
    m.heading.textContent = isSug ? "Post a suggestion" : "Report a bug";
    m.titleLabel.textContent = (isSug ? "Title" : "Bug summary") + " *";
    m.title.placeholder = isSug
      ? "e.g. Add a grappling power for Tech Jacket"
      : "e.g. Crash when activating Atomic Manipulation";
    m.bodyLabel.textContent = (isSug ? "Details" : "Steps / details") + " *";
    m.body.placeholder = isSug
      ? "What should it do? Why would it make the mod better?"
      : "What happened? What did you expect? Steps to reproduce, mod + MC version…";
  }
  function applyScope(scope){
    m.scope = scope;
    document.querySelectorAll("#seg-scope .seg-btn").forEach(b =>
      b.classList.toggle("is-active", b.dataset.scope === scope));
  }
  document.querySelectorAll("#seg-type .seg-btn").forEach(b =>
    b.addEventListener("click", () => applyType(b.dataset.type)));
  document.querySelectorAll("#seg-scope .seg-btn").forEach(b =>
    b.addEventListener("click", () => applyScope(b.dataset.scope)));

  m.body.addEventListener("input", () => {
    m.counter.textContent = m.body.value.length + " / 3000";
  });
  m.attach.addEventListener("click", () => m.file.click());
  m.file.addEventListener("change", () => {
    const n = m.file.files.length;
    m.attach.classList.toggle("has-files", n > 0);
    m.attach.textContent = n ? `📎 ${n} FILE${n>1?"S":""} ATTACHED` : "📎 ATTACH IMAGES / VIDEOS";
  });

  function openModal(type){
    applyType(type || state.tab);
    applyScope(state.scope === "server" ? "server" : "mod");
    m.status.className = "form-status";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    m.title.focus();
  }
  function closeModal(){
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  document.getElementById("open-post").addEventListener("click", () => openModal());
  modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  function setStatus(kind, msg){ m.status.className = "form-status show " + kind; m.status.textContent = msg; }

  async function submit(){
    const title = m.title.value.trim();
    const body  = m.body.value.trim();
    const discord = m.discord.value.trim();
    const name = m.name.value.trim() || "Anonymous Hero";

    if (!title || !body || !discord){
      setStatus("err", "Fill in the title, the details, and your Discord user ID.");
      return;
    }
    if (!WEBHOOK_URL){
      setStatus("info", "Submissions aren't connected yet — add your Discord webhook URL in wall.js (see README).");
      return;
    }

    m.submit.disabled = true;
    setStatus("info", "Sending…");

    const isBug = m.type === "bugs";
    const embed = {
      title: (isBug ? "🐞 Bug — " : "💡 Suggestion — ") + title.slice(0,240),
      description: body.slice(0,4000),
      color: isBug ? 0xE11515 : 0x2E6BFF,
      fields: [
        { name: "Type",  value: isBug ? "Bug" : "Suggestion", inline: true },
        { name: "Scope", value: m.scope === "server" ? "Server" : "Mod", inline: true },
        { name: "By",    value: name.slice(0,256), inline: true },
        { name: "Discord ID", value: discord.slice(0,256), inline: false },
      ],
      timestamp: new Date().toISOString(),
    };
    const payload = { username: "Invincible Inc — Feedback Wall", embeds: [embed] };

    try {
      let res;
      const files = m.file.files;
      if (files && files.length){
        const fd = new FormData();
        fd.append("payload_json", JSON.stringify(payload));
        for (let i = 0; i < files.length; i++) fd.append("files[" + i + "]", files[i]);
        res = await fetch(WEBHOOK_URL, { method: "POST", body: fd });
      } else {
        res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      if (!res.ok) throw new Error("HTTP " + res.status);

      setStatus("ok", "Sent! Once the team approves it, it'll show up on the wall.");
      m.title.value = ""; m.body.value = ""; m.discord.value = ""; m.name.value = ""; m.file.value = "";
      m.counter.textContent = "0 / 3000";
      m.attach.classList.remove("has-files");
      m.attach.textContent = "📎 ATTACH IMAGES / VIDEOS";
    } catch (err){
      setStatus("err", "Couldn't send (" + err.message + "). Check the webhook URL, or try again.");
    } finally {
      m.submit.disabled = false;
    }
  }
  m.submit.addEventListener("click", submit);

  // expose for the empty-state button (re-rendered dynamically)
  window.__openWallPost = openModal;
});
