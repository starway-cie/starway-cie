// Menu mobile
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Scroll doux
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    menu?.classList.remove("open");
    burger?.setAttribute("aria-expanded", "false");
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Année footer
document.getElementById("year").textContent = new Date().getFullYear();

// Formulaire -> mailto (simple, pas de backend)
document.getElementById("quoteForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const name = (data.get("name") || "").toString();
  const email = (data.get("email") || "").toString();
  const date = (data.get("date") || "").toString();
  const location = (data.get("location") || "").toString();
  const message = (data.get("message") || "").toString();

  const subject = encodeURIComponent(`Demande de devis — ${name}`);
  const body = encodeURIComponent(
`Bonjour Starway,

Nom/Société : ${name}
Email : ${email}
Date (approx.) : ${date}
Lieu : ${location}

Besoin :
${message}

Merci !`
  );

  // Email pro (à remplacer si tu changes)
  window.location.href = `mailto:nathanvillain25@gmail.com?subject=${subject}&body=${body}`;
});