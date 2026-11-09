(() => {
  // Search box in the bar (Pagefind's own UI).
  if (window.PagefindUI) new PagefindUI({ element: "#search", showImages: false, showSubResults: true, resetStyles: false, translations: { placeholder: "Search the docs" } });

  // Phone: the left menu folds away behind a button.
  const btn = document.querySelector(".docs-menu-btn"), nav = document.getElementById("docs-nav");
  if (btn && nav) {
    const set = (open) => { nav.classList.toggle("closed", !open); btn.setAttribute("aria-expanded", String(open)); };
    const mq = matchMedia("(max-width: 860px)");
    set(!mq.matches);
    mq.addEventListener("change", () => set(!mq.matches));
    btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  }

  // Copy the page's Markdown (embedded at build).
  const copy = document.getElementById("copy-md");
  if (copy) copy.addEventListener("click", async () => {
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(JSON.parse(document.getElementById("page-md").textContent));
      copy.textContent = "Copied"; status.textContent = "Page copied as Markdown.";
    } catch { copy.textContent = "Copy failed"; status.textContent = "Could not copy."; }
    setTimeout(() => { copy.textContent = "Copy page as Markdown"; }, 2000);
  });

  // Ask the docs: a Pagefind search, top five passages, no AI and no network beyond this site.
  const form = document.getElementById("ask-form");
  if (form) form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const out = document.getElementById("ask-out"), q = document.getElementById("ask-q").value.trim();
    if (!q) return;
    out.textContent = "Looking...";
    try {
      const pf = await import("./pagefind/pagefind.js");
      const res = await pf.search(q);
      const top = await Promise.all(res.results.slice(0, 5).map((r) => r.data()));
      out.replaceChildren();
      if (!top.length) { out.textContent = "Nothing found in the docs for that. Try other words."; return; }
      const ol = document.createElement("ol");
      for (const d of top) {
        const li = document.createElement("li"), a = document.createElement("a"), p = document.createElement("p");
        a.href = d.url; a.textContent = d.meta.title || d.url;
        p.innerHTML = d.excerpt; // Pagefind returns the excerpt with <mark> around the matches
        li.append(a, p); ol.append(li);
      }
      out.append(ol);
    } catch { out.textContent = "Search is not ready yet."; }
  });
})();
