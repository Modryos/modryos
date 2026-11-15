// Sends each form[data-api] as JSON and shows the reply in place.
document.querySelectorAll("form[data-api]").forEach(form => {
  const msg = form.querySelector(".status-msg"), btn = form.querySelector("button");
  const say = (text, cls) => { msg.textContent = text; msg.className = "status-msg " + cls; };
  const clear = () => form.querySelectorAll(".field-err").forEach(n => n.remove());
  const flag = (el, text) => {
    const p = document.createElement("p");
    p.className = "field-err"; p.id = "err-" + el.name; p.textContent = text;
    (el.closest(".check") || el).after(p);
    el.setAttribute("aria-invalid", "true"); el.setAttribute("aria-describedby", p.id);
  };
  // The bot check loads when someone first touches a form, so the page itself stays light.
  form.addEventListener("focusin", () => {
    if (document.querySelector('script[src*="turnstile"]')) return;
    document.head.append(Object.assign(document.createElement("script"), { src: "https://challenges.cloudflare.com/turnstile/v0/api.js", async: true }));
  }, { once: true });
  form.addEventListener("input", e => { e.target.removeAttribute("aria-invalid"); e.target.closest(".check")?.nextElementSibling?.matches(".field-err") && e.target.closest(".check").nextElementSibling.remove(); });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const f = form.elements;
    clear(); say("", "");
    form.querySelectorAll("[aria-invalid]").forEach(n => n.removeAttribute("aria-invalid"));
    const bad = [];
    if (!f.email.value.trim() || !f.email.validity.valid) bad.push([f.email, "Please type a real email, like you@example.com."]);
    if (!f.age15.checked) bad.push([f.age15, "You need to be 15 or older to join."]);
    if (f.terms && !f.terms.checked) bad.push([f.terms, "Please agree to the Terms of Use, the Privacy Policy and the Closed Beta Addendum."]);
    if (bad.length) { bad.forEach(([el, t]) => flag(el, t)); bad[0][0].focus(); return; }
    const body = { email: f.email.value.trim(), age15: true };
    if (f.terms) body.terms = true;
    if (f.news) body.news = f.news.checked;
    body.website = f.website.value;
    body.legalVersion = "2026-11-09"; // the version of the Terms, Privacy and Beta texts the person agreed to
    const token = f["cf-turnstile-response"]?.value; // set by the Turnstile widget, when the page has one
    if (token) body.turnstile = token;
    // The check runs before the send (and asks the person only when it must); never send without its answer.
    if (form.querySelector(".cf-turnstile") && !token) { say("One moment: the security check is still running. Try again in a few seconds.", "err"); return; }
    btn.disabled = true;
    say("Sending...", "");
    try {
      const r = await fetch(form.dataset.api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json().catch(() => ({}));
      if (r.ok) { say(form.dataset.ok, "ok"); form.reset(); form.querySelector(".cf-turnstile")?.remove(); btn.remove(); return; } // done: no second check pops up
      else if (data.error === "waitlist_full") { showFull(); }
      else if (data.error === "signups_paused") say("Sign-ups are paused for a short while. Try again later.", "err");
      else if (data.error === "captcha_required" || data.error === "captcha_failed") say("The check did not pass. Please wait for it to finish, then try again.", "err");
      else if (r.status === 429) say("Too many tries, please wait a few minutes.", "err");
      else if (data.error === "invalid_email") { msg.textContent = ""; msg.className = "status-msg"; flag(f.email, "That email does not look right. Please check it."); f.email.focus(); }
      else if (data.error === "age_required") { msg.textContent = ""; msg.className = "status-msg"; flag(f.age15, "You need to be 15 or older to join."); }
      else if (data.error === "terms_required") { msg.textContent = ""; msg.className = "status-msg"; flag(f.terms, "Please agree to the Terms of Use, the Privacy Policy and the Closed Beta Addendum."); }
      else say("Something went wrong on our side. Please try again later.", "err");
    } catch { say("We could not reach the server. Please try again later.", "err"); }
    btn.disabled = false;
    window.turnstile?.reset(); // a token works once
  });
});

// The server says whether the beta is open and whether the waitlist is full (nothing to publish here when either changes).
const COMMUNITY = "https://discord.com/invite/ccWxeu8BVh";
function showFull() {
  document.querySelectorAll('form[data-api$="/v1/waitlist"]').forEach(form => {
    const p = document.createElement("div");
    p.className = "status-msg ok";
    p.setAttribute("role", "status");
    p.innerHTML = "<span><b>Sign-ups are closed for now.</b> All places in this wave are taken, and a new wave opens soon. Join our <a href=\"" + COMMUNITY + "\">Discord community</a> to hear first.</span>";
    form.replaceWith(p);
  });
  document.querySelectorAll(".beta-hero .lede").forEach(l => { l.textContent = "All places in this wave are taken. A new wave opens soon: join our Discord community to hear first."; });
}
const box = document.getElementById("have-invite");
if (box || document.querySelector('form[data-api$="/v1/waitlist"]')) {
  fetch("https://api.modryos.com/v1/beta").then(r => r.ok ? r.json() : null).then(b => {
    if (!b) return;
    if (b.open && box && /^Modryos-Install-[\w.-]+\.exe$/.test(b.installer)) {
      box.hidden = false;
      const h1 = document.querySelector(".beta-hero h1"), lede = document.querySelector(".beta-hero .lede"), pill = document.querySelector(".beta-hero .pill");
      if (h1) h1.textContent = "The beta is open.";
      if (pill) pill.textContent = "Open beta";
      if (lede) lede.textContent = "Got your invite? Download with your code. No invite yet? Join the waitlist, and your invite usually arrives by email within 24 hours.";
      document.querySelectorAll('form[data-api$="/v1/waitlist"]').forEach(f => { f.dataset.ok = "Check your inbox: we sent a link to confirm your email. Once you confirm, your invite usually arrives within 24 hours."; });
      document.getElementById("invite-dl").addEventListener("submit", e => {
        e.preventDefault();
        const code = document.getElementById("inv-code").value.trim().toUpperCase();
        const msg = e.target.querySelector(".status-msg");
        if (!/^[A-Z0-9-]{6,40}$/.test(code)) { msg.textContent = "Type the code from your invite email."; return; }
        msg.textContent = "Your download starts in a moment.";
        location.href = "https://api.modryos.com/v1/download/" + encodeURIComponent(b.installer) + "?code=" + encodeURIComponent(code);
      });
    }
    if (b.full) showFull();
  }).catch(() => {});
}
