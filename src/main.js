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
window.addEventListener("resize", footerMobile );

function footerMobile(){
  if(window.innerWidth <= 480){

    const elementos = document.querySelectorAll("#services-footer > div");
  
    elementos.forEach( el => {
      const btnIcon = el.querySelector("h4 > button");
  
      btnIcon.addEventListener("click", () =>{
        btnIcon.classList.toggle("active");

        const h5Array = el.querySelectorAll('h5');
        const pArray = el.querySelectorAll('p');
  
        h5Array.forEach((h5) =>{
          if (h5.style.display === 'block') {
            h5.style.display = 'none';
          } else {
            h5.style.display = 'block';
          }
        })
  
        pArray.forEach((p) =>{
          if (p.style.display === 'block') {
            p.style.display = 'none';
          } else {
            p.style.display = 'block';
          }
        })
      })
    });
  }
}

footerMobile();



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