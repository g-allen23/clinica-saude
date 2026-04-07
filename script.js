document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  // Alterna a direção de entrada (left/right) para cada elemento
  targets.forEach((el, i) => {
    el.classList.add(i % 2 === 0 ? "from-left" : "from-right");
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  // Adiciona atraso incremental curto para um aparecimento mais suave
  targets.forEach((el, idx) => {
    el.style.transitionDelay = (idx % 6) * 100 + "ms";
    observer.observe(el);
  });
});

// Para uso: adicione a classe `reveal` aos elementos no HTML que devem aparecer ao rolar.
