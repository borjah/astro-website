document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const indicators = document.querySelectorAll("#section-indicator a");
    console.log('sections :>> ', sections);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
  
          if (entry.isIntersecting) {
            indicators.forEach((indicator) => {
              indicator.classList.remove("bg-gray-100", "opacity-100");
              indicator.classList.add("bg-amber-200", "opacity-30");
  
              if (indicator.dataset.section === id) {
                indicator.classList.remove("bg-gray-200", "opacity-30");
                indicator.classList.add("bg-amber-100", "opacity-100");
              }
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Detecta cuando al menos el 50% de la sección está visible
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  