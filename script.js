document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector(".nav");
const hero = document.getElementById("home");
const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle("scrolled", !entry.isIntersecting),
  { rootMargin: "-80px 0px 0px 0px" }
);
navObserver.observe(hero);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
