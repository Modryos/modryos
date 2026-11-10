(() => {
  const head = document.querySelector("header.top");
  if (head) {
    const onScroll = () => head.classList.toggle("scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const lb = document.getElementById("lb");
  if (lb) {
    const body = lb.querySelector(".lb-body"), text = lb.querySelector("p");
    const open = el => {
      const big = el.tagName === "VIDEO" ? Object.assign(document.createElement("video"), { src: el.currentSrc || el.src || el.dataset.src, autoplay: true, loop: true, muted: true, playsInline: true, controls: true })
                                         : Object.assign(document.createElement("img"), { src: el.currentSrc || el.src, alt: el.alt });
      const frame = document.createElement("div");
      frame.className = "lb-frame";
      frame.append(big);
      body.replaceChildren(frame);
      const cap = el.closest("figure")?.querySelector("figcaption");
      text.textContent = cap ? cap.innerText.replace(/\n+/g, " - ") : (el.alt || el.getAttribute("aria-label") || "");
      lb.showModal();
    };
    document.querySelectorAll(".zoom").forEach(el => {
      el.tabIndex = 0;
      el.setAttribute("role", "button");
      el.addEventListener("click", () => open(el));
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(el); } });
    });
    const aim = (im, e) => {
      const r = im.parentElement.getBoundingClientRect();
      im.style.transformOrigin = `${(e.clientX - r.left) / r.width * 100}% ${(e.clientY - r.top) / r.height * 100}%`;
    };
    lb.addEventListener("click", e => {
      const im = e.target.closest(".lb-frame img");
      if (im) { aim(im, e); im.classList.toggle("zoomed"); return; }
      if (!e.target.closest(".lb-frame")) lb.close();
    });
    lb.addEventListener("mousemove", e => { const im = lb.querySelector("img.zoomed"); if (im) aim(im, e); });
    lb.addEventListener("close", () => body.replaceChildren());
  }

  // Videos load only when they come near the screen; autoplay would otherwise fetch them all at once.
  const videos = document.querySelectorAll("video[data-src]");
  const start = v => { v.src = v.dataset.src; v.play?.().catch(() => {}); };
  if ("IntersectionObserver" in window) {
    const vo = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { start(e.target); vo.unobserve(e.target); }
    }, { rootMargin: "300px 0px" });
    videos.forEach(v => vo.observe(v));
  } else videos.forEach(start);

  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  items.forEach(el => io.observe(el));
})();
