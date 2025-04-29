document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");
      button.classList.toggle("btn-danger");
      button.classList.toggle("btn-outline-danger");
      icon.classList.toggle("bi-heart");
      icon.classList.toggle("bi-heart-fill");
    });
  });

  document.querySelector(".barra input").addEventListener("input", (event) => {
    const filtro = event.target.value.toLowerCase();
    document.querySelectorAll(".receta-card").forEach(card => {
      const titulo = card.querySelector(".card-title").textContent.toLowerCase();
      card.style.display = titulo.includes(filtro) ? "" : "none";
    });
  });

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".receta-card").forEach(card => {
      const posicion = card.getBoundingClientRect().top;
      if (posicion < window.innerHeight) {
        card.style.transition = "transform 0.5s, opacity 0.5s";
        card.style.transform = "translateY(0)";
        card.style.opacity = 1;
      }
    });
  });
  document.querySelectorAll(".receta-card").forEach(card => {
    card.style.transform = "translateY(20px)";
    card.style.opacity = 0;
  });
  
  document.addEventListener("DOMContentLoaded", function() {
  
    function animateIcon(selector) {
      const icon = document.querySelector(selector);
      if (icon) {
        icon.addEventListener("click", (event) => {
          icon.classList.add("rotate");
          setTimeout(() => {
            icon.classList.remove("rotate");
          }, 500);
          event.stopPropagation();
        });
      }
    }
    
    animateIcon(".menu-icon");
    animateIcon(".settings-icon");
  
    function updateRecipeVisibility() {
      document.querySelectorAll(".receta-card").forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.transition = "transform 0.5s, opacity 0.5s";
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        } else {
          card.style.transition = "transform 0.5s, opacity 0.5s";
          card.style.transform = "translateY(20px)";
          card.style.opacity = "0";
        }
      });
    }
    
    updateRecipeVisibility();
    
    window.addEventListener("scroll", updateRecipeVisibility);
  });
  