const allDepartaments = document.getElementById("all-departaments");
const displayAllDepartaments = document.querySelector(".display-all-departaments");
const departament = document.querySelectorAll(".category > p");
const displayDepartament = document.querySelector(".display-departament");

allDepartaments.addEventListener("mouseenter", () => {
  displayAllDepartaments.style.display = "flex";
  displayDepartament.style.display = "none";
});

displayAllDepartaments.addEventListener("mouseleave", () => {
  displayAllDepartaments.style.display = "none";
});

departament.forEach((el)=>{
  el.addEventListener("mouseenter", () => {
    displayDepartament.style.display = "flex";
    displayAllDepartaments.style.display = "none";
  });
})

displayDepartament.addEventListener("mouseleave", () => {
  displayDepartament.style.display = "none";
});

/* Quando estiver em modo mobile, para o footer ser utilizavel */

function footerMobile() {
  const elementos = document.querySelectorAll("#services-footer > div");

  if (window.innerWidth > 480) {
    elementos.forEach(el => {
      const h5Array = el.querySelectorAll("h5");
      const pArray = el.querySelectorAll("p");

      h5Array.forEach(h5 => h5.style.display = "block");
      pArray.forEach(p => p.style.display = "block");

      const btnIcon = el.querySelector("h4");
      btnIcon.classList.remove("active", "listener-added");
    });
  } else {
    elementos.forEach(el => { // Esconde todos por padrão ao entrar no mobile
      const h5Array = el.querySelectorAll("h5");
      const pArray = el.querySelectorAll("p");

      
      h5Array.forEach(h5 => h5.style.display = "none");
      pArray.forEach(p => p.style.display = "none");

      const btnIcon = el.querySelector("h4");

      if (!btnIcon.classList.contains("listener-added")) {
        btnIcon.classList.add("listener-added");

        btnIcon.addEventListener("click", () => {
          btnIcon.classList.toggle("active");

          h5Array.forEach(h5 => {
            h5.style.display = (h5.style.display === "block") ? "none" : "block";
          });

          pArray.forEach(p => {
            p.style.display = (p.style.display === "block") ? "none" : "block";
          });
        });
      }
    });
  }
}
window.addEventListener("DOMContentLoaded", footerMobile);
window.addEventListener("resize", footerMobile);


document.querySelectorAll('.glide').forEach((glideElement) => {
  new Glide(glideElement, {
    type: 'carousel',
    perView: 5,
    gap: 16, // espaço entre os cards
    breakpoints: {
      768: {
        perView: 3
      },
      480: {
        perView: 2
      }
    }
  }).mount();
});

// Toda vez que for redimensionado será reloada a página para não ocorrer bugs no JS.
let resizeTimeout; 
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);

  resizeTimeout = setTimeout(() => {
    location.reload();
  }, 300); 
});