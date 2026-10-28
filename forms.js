// Sends each form[data-api] as JSON and shows the reply in place.
document.querySelectorAll("form[data-api]").forEach(form => {
  const msg = form.querySelector(".status-msg"), btn = form.querySelector("button");
  const say = (text, cls) => { msg.textContent = text; msg.className = "status-msg " + cls; };
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const f = form.elements, body = { email: f.email.value.trim(), age15: true };
    if (f.terms) body.terms = true;
    if (f.news) body.news = f.news.checked;
    body.website = f.website.value;
    btn.disabled = true;
    f.email.removeAttribute("aria-invalid");
    say("Sending...", "");
    try {
      const r = await fetch(form.dataset.api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json().catch(() => ({}));
      if (r.ok) { say(form.dataset.ok, "ok"); form.reset(); }
      else if (r.status === 429) say("Too many tries, please wait a few minutes.", "err");
      else if (data.error === "invalid_email") { f.email.setAttribute("aria-invalid", "true"); say("That email does not look right. Please check it and try again.", "err"); f.email.focus(); }
      else if (data.error === "age_required") say("You need to be 15 or older. Please tick the box.", "err");
      else if (data.error === "terms_required") say("Please agree to the Terms of Use and Privacy Policy.", "err");
      else say("Something went wrong on our side. Please try again later.", "err");
    } catch { say("We could not reach the server. Please try again later.", "err"); }
    btn.disabled = false;
  });
});
