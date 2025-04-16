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
