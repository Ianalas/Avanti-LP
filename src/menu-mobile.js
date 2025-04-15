const openBtnMenu = document.querySelector(".leading > div > button");
const closeBtnMenu = document.querySelector(".menu-mobile > div > button");

openBtnMenu.addEventListener("click", () =>{
  if (container.style.display === 'flex') {
    container.style.display = 'none';
  } else {
    container.style.display = 'flex';
  }
});

closeBtnMenu.addEventListener("click", () =>{
  container.style.display = 'none';
});

const container = document.querySelector(".menu-mobile");

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

  container.appendChild(section);
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
  });
});

