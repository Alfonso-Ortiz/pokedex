window.onscroll = function () {
    efectoHabilidades();
  };

function efectoHabilidades() {
    let skills = document.getElementById("poke-stats");
    let distancia_skills =
      window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
      document.getElementById("html").classList.add("barra-progreso");
    }
  }
  