const openBtnMenu = document.querySelector(".leading > div > button");
const closeBtnMenu = document.querySelector(".menu-mobile > div > button");
const container = document.querySelector(".menu-mobile");
const cardPromotion = document.querySelector(".menu-mobile .card-promotion");

openBtnMenu.addEventListener("click", () =>{
  container.classList.add("ativo");
});

closeBtnMenu.addEventListener("click", () =>{
  container.classList.remove("ativo");
});


for (let i = 0; i < 6; i++) {
  const section = document.createElement("section");
  
  section.innerHTML = `
    <h4>Categoria <span class="iconify" data-icon="lucide:chevron-down"></span></h4>
    <div>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
      <p>Categoria</p>
    </div>
  `;

  container.insertBefore(section, cardPromotion);
}

const titles = document.querySelectorAll(".menu-mobile h4");
let activeTitle;

titles.forEach((title) => {
  title.addEventListener("click", () => {
    
    const contentDiv = title.nextElementSibling;
    const isActive = contentDiv.classList.toggle("active");

    if (activeTitle && activeTitle !== title) { // Se estava outro aberto, remove a cor
      activeTitle.classList.remove("blue-text");
      activeTitle.nextElementSibling.classList.remove("active"); // Para fechar o div anterior aberto
    }

    
    if (isActive) { // Se o div ficou aberto agora, aplica azul
      title.classList.add("blue-text");
      activeTitle = title;
    } else {
      title.classList.remove("blue-text");
      activeTitle = null;
    }
    console.log(title);
  });
});

window.addEventListener("resize", () => {
  if(window.innerWidth > 480){
    container.style.display = 'none';
  }
});