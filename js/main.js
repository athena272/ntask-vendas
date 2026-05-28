(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("nav-mobile");
  const yearEl = document.getElementById("year");
  const stickyCta = document.getElementById("cta-sticky");
  const ctaBand = document.getElementById("contato");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Header scroll state */
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  function updateStickyCta() {
    if (!stickyCta) return;
    const hero = document.querySelector(".hero");
    const showAfter = hero ? hero.offsetHeight * 0.55 : 400;
    const hideNearFooter = ctaBand
      ? window.scrollY + window.innerHeight > ctaBand.offsetTop + 80
      : false;
    const show = window.scrollY > showAfter && !hideNearFooter;
    stickyCta.classList.toggle("is-visible", show);
    document.body.classList.toggle("has-sticky-cta", show);
  }

  function onScrollAll() {
    onScroll();
    updateStickyCta();
  }

  window.addEventListener("scroll", onScrollAll, { passive: true });
  onScrollAll();

  /* Mobile menu */
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  /* Reveal on scroll */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
