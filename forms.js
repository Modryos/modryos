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
    btn.disabled = true;
    say("Sending...", "");
    try {
      const r = await fetch(form.dataset.api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json().catch(() => ({}));
      if (r.ok) { say(form.dataset.ok, "ok"); form.reset(); }
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
