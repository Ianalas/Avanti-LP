/* Criar os cards no realase*/
const containers = document.querySelectorAll(".glide__slides");

containers.forEach(container => {

  for (let i = 0; i < 6; i++) {

    const card = document.createElement("li");
    card.classList.add("glide__slide");
    
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

    container.appendChild(card);
  }
});

///////////////////////

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

function footerMobile(){
  if(window.innerWidth <= 480){
    
    const elementos = document.querySelectorAll("#services-footer > div");
    
    elementos.forEach( el => {
      const btnIcon = el.querySelector("h4");
      
      btnIcon.addEventListener("click", () =>{
        btnIcon.classList.toggle("active");
        console.log(btnIcon);
        
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
document.addEventListener("DOMContentLoaded", () => {
  footerMobile();
});
window.addEventListener("resize", footerMobile );

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

//////////////////////////

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

window.addEventListener("resize", () => {
  if(window.innerWidth > 480){
    container.style.display = 'none';
  }
});

//////////////////////////////

const input = document.querySelector("#search");
const btnInput = document.querySelector("#search-btn");

async function showNotification(newValue) {
  const notification = document.querySelector(".notification");
  const notificationValue = document.querySelector(".notification p");
  notificationValue.innerText = `Você buscou por: '${newValue.trim()}'`;

  notification.classList.add("show");

  btnInput.disabled = true;
  setTimeout(() => {
    notification.classList.add("hide");

    setTimeout(() => {
      // Remove do DOM após a animação
      notification.classList.remove("show", "hide");

      btnInput.disabled = false;
    }, 500);
  }, 5000);
}

btnInput.addEventListener("click", () => {
  if (!btnInput.disabled && input.value.trim() != "") {
    showNotification(input.value);
    input.value = "";
  }
});