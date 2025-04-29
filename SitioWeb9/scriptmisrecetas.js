document.querySelectorAll(".boton-favorito").forEach(boton => {
    boton.addEventListener("click", () => {
        const icono = boton.querySelector("i");
        boton.classList.toggle("btn-danger");
        boton.classList.toggle("btn-outline-danger");
        icono.classList.toggle("bi-heart");
        icono.classList.toggle("bi-heart-fill");
    });
});

//src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"

document.addEventListener("DOMContentLoaded", function() {
  
    // Función para animar (rotar) los íconos al hacer clic
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
    
    // Aplica la animación a los iconos de menú (tres líneas) y configuración (rueda)
    animateIcon(".menu-icon");
    animateIcon(".settings-icon");
  
    // Función para actualizar la visibilidad de las tarjetas de receta
    function updateRecipeVisibility() {
      document.querySelectorAll(".receta-card").forEach(card => {
        const rect = card.getBoundingClientRect();
        // Si la tarjeta está en parte dentro del viewport, se muestra
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.style.transition = "transform 0.5s, opacity 0.5s";
          card.style.transform = "translateY(0)";
          card.style.opacity = "1";
        } else {
          // Si prefieres que se oculten al salir de la vista, puedes dejar esta parte
          card.style.transition = "transform 0.5s, opacity 0.5s";
          card.style.transform = "translateY(20px)";
          card.style.opacity = "0";
        }
      });
    }
    
    // Al cargar la página revisamos la visibilidad de las tarjetas
    updateRecipeVisibility();
    
    // Actualizamos su visibilidad cuando se haga scroll
    window.addEventListener("scroll", updateRecipeVisibility);
  });
  