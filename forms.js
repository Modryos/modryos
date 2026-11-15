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
    // The same address again from this browser (the owner, 2026-11-16: refresh and join again): say so, send nothing.
    // The server also ignores a repeat, with the same reply for anyone, so a stranger never learns who is on the list.
    const key = "joined:" + form.dataset.api, mail = f.email.value.trim().toLowerCase();
    const joined = (() => { try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; } })();
    if (joined.includes(mail)) { say("You already signed up with this email. Look for our email to confirm (check spam too); a second sign-up changes nothing.", "ok"); return; }
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
      if (r.ok) { try { localStorage.setItem(key, JSON.stringify([...joined, mail].slice(-20))); } catch { /* private window */ } say(form.dataset.ok, "ok"); form.reset(); form.querySelector(".cf-turnstile")?.remove(); btn.remove(); return; } // done: no second check pops up
      else if (data.error === "waitlist_full") { showFull(); }
      else if (data.error === "signups_paused") say("Sign-ups are paused for a short while. Try again later.", "err");
      else if (data.error === "captcha_required" || data.error === "captcha_failed") say("The check did not pass. Please wait for it to finish, then try again.", "err");
      else if (r.status === 429) say("Too many tries, please wait a few minutes.", "err");
      else if (data.error === "invalid_email" || data.error === "bad_email") { msg.textContent = ""; msg.className = "status-msg"; flag(f.email, "That email does not look right. Please check it."); f.email.focus(); }
      else if (data.error === "age_required") { msg.textContent = ""; msg.className = "status-msg"; flag(f.age15, "You need to be 15 or older to join."); }
      else if (data.error === "terms_required") { msg.textContent = ""; msg.className = "status-msg"; flag(f.terms, "Please agree to the Terms of Use, the Privacy Policy and the Closed Beta Addendum."); }
      else say("Something went wrong on our side. Please try again later.", "err");
    } catch { say("We could not reach the server. Please try again later.", "err"); }
    btn.disabled = false;
    window.turnstile?.reset(); // a token works once
  });
});

// The server says whether the beta is open and whether the wave is full (nothing to publish here when either changes).
// A full wave never closes the form (the owner, 2026-11-16): later sign-ups wait in line for the next wave.
const FULL = "Wave 1 is full. You're in line for the next wave. We'll email you.";
function showFull() {
  document.querySelectorAll('form[data-api$="/v1/waitlist"]').forEach(form => {
    if (form.previousElementSibling?.classList.contains("wave-full")) return;
    const p = document.createElement("p");
    p.className = "status-msg ok wave-full";
    p.textContent = FULL;
    form.before(p);
  });
  document.querySelectorAll(".beta-hero .lede").forEach(l => { l.textContent = FULL; });
}
const box = document.getElementById("have-invite");
if (box || document.querySelector('form[data-api$="/v1/waitlist"]')) {
  fetch("https://api.modryos.com/v1/beta").then(r => r.ok ? r.json() : null).then(b => {
    if (!b) return;
    const ver = b.open && box && /^Modryos-Install-([\w.-]+)\.exe$/.exec(b.installer || "");
    if (ver) {
      box.hidden = false;
      const h1 = document.querySelector(".beta-hero h1"), lede = document.querySelector(".beta-hero .lede"), pill = document.querySelector(".beta-hero .pill");
      if (h1) h1.textContent = "The beta is open.";
      if (pill) pill.textContent = "Open beta";
      if (lede) lede.textContent = "Got your invite? Download Modryos and type your code in the studio. No invite yet? Join the waitlist: invites go out by email in sign-up order, usually within a day.";
      document.querySelectorAll('form[data-api$="/v1/waitlist"]').forEach(f => { f.dataset.ok = "Your sign-up was received. We'll email you a link to confirm your place, usually within minutes; on busy days it can take until the next day. The email itself doesn't hold a place: pressing Confirm in it does, while places in this wave last. Once you confirm, your invite goes out in sign-up order, usually within a day."; });
      // The installer is a GitHub release asset (the owner, 2026-11-15); the studio itself opens only with a redeemed invite.
      const rel = "https://github.com/Modryos/modryos/releases/download/v" + ver[1] + "/";
      document.getElementById("dl-link").href = rel + b.installer;
      const sum = document.getElementById("dl-sum");
      sum.append("Windows 10 or 11. Check the file against ", Object.assign(document.createElement("a"), { href: rel + "SHA256SUMS", textContent: "SHA256SUMS" }), ".");
    }
    if (b.full) showFull();
  }).catch(() => {});
}
