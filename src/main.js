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


/* Criar os cards no realase*/
const containers = document.querySelectorAll(".cards-container");

containers.forEach(container => {
  const nextButton = container.querySelector(".next"); 

  for (let i = 0; i < 12; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    card.innerHTML = `
      <div class="image">
        <span>NOVO</span>
      </div>
      <div>
        <h3>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
        <div>
          <div>
            <p>R$ 100,00</p>
            <h4>R$ 79,90</h4>
          </div>
          <span>10% OFF</span>
        </div>
        <p>Ou em até <strong>10x de R$ 7,90</strong></p>
      </div>
      <button>Comprar</button>
    `;

    container.insertBefore(card, nextButton);
  }
});